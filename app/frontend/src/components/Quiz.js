import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import {Link} from 'react-router';
import axios from 'axios';


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            questions: [],
            openedhints: [],
            useranwsers:[],
            timer: 15 * 60,
            timestring: "",
            countdownInstance: null,

        }
        this.selectAnswer = this.selectAnswer.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.previousQuestion = this.previousQuestion.bind(this);
        this.submmitAnwsers = this.submmitAnwsers.bind(this);
        this.isFinished = this.isFinished.bind(this);
        this.countdownTimer = this.countdownTimer.bind(this);
        this.openHint = this.openHint.bind(this);
        this.hintcount = this.hintcount.bind(this);
    }
    hintcount() {
        var count=0;
        for(var i = 0; i<this.state.openedhints.length; i++){
            if(this.state.openedhints[i] == true) count++;
        }
        var rest = 3-count >= 0 ? 3-count : 0;
        return rest.toString();
    }

    openHint(index) {
        let tmphints = this.state.openedhints.slice();
        tmphints[index] = true;
        this.setState({openedhints:tmphints});
    }

    isFinished(){
        for(let i = 0; i <this.state.questions.length; i++){
            if(this.state.useranwsers[i] == null) return false;
        }
        if(this.state.useranwsers.length = this.state.questions.length){
            return true;
        }
        return false;
    }

    submmitAnwsers(){
        let conf = {
            headers:  {'Authorization': 'Bearer '+localStorage.getItem('SHRPASTOKEN')}
        }

        axios.post('/api/assessment/quiz/'+(localStorage.getItem('SHRPASUSERID')),this.state.useranwsers, conf).then(res => {

            localStorage.setItem('SHRPASSCORE', res.data);
            hashHistory.push('/results');
        });


    }

    nextQuestion(){
        this.setState({currentIndex: this.state.currentIndex + 1});
    }

    previousQuestion(){
        this.setState({currentIndex: this.state.currentIndex - 1});
    }

    selectAnswer(index){
        let tmparray = this.state.useranwsers.slice();
        tmparray[this.state.currentIndex] = index;
        this.setState({useranwsers:tmparray});
    }

    componentWillUnmount() {

    clearInterval(this.state.countdownInstance);
    }

    componentDidMount(){
        let conf = {
            headers:  {'Authorization': 'Bearer '+localStorage.getItem('SHRPASTOKEN')}
        }
        axios.get('/api/assessment/quiz/'+(localStorage.getItem('SHRPASUSERID')),conf).then(res => {
            this.setState({'questions': res.data});
            console.log(this.state.questions);
        });
        let IntervalID = setInterval(this.countdownTimer, 1000);
        this.setState({countdownInstance: this.state.countdownInstance ? this.state.countdownInstance : IntervalID });

    }

    countdownTimer(){
        this.setState({timer: this.state.timer - 1});
        var seconds = parseInt(this.state.timer % 60, 10);
        var minutes = parseInt(this.state.timer / 60, 10) % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        this.setState({timestring: minutes+":"+seconds});
        if(this.state.timer == 0){
            clearInterval(this.state.countdownInstance);
            this.submmitAnwsers();
        }

    }

    render() {
        const Ques = this.state.questions[this.state.currentIndex];
        return (

            <div className="container-fluid">

                <div className="header">


                    <div className="top-logo"><img className="shrpas-img" src="./shrpas.jpg" alt=""/></div>

                    <div className="top-logo"><img className="avatar-image"  src="./mario.jpg" alt=""/></div>


                </div>



            <div className="content">

                    <div className="row row-top-position align-items-center">



                    <div className="quiz-header">

                        <h4 className="quiz-header-message">{Ques ? Ques.question : null}</h4>


                    </div>

                            <div className="quiz-question-info">

                                    <div className="quiz-question-message">{this.state.currentIndex+1}/{this.state.questions.length}</div>
                                    <div className="quiz-question-message">
                                        <button onClick={this.openHint.bind(null,this.state.currentIndex)} className="hint-button" ><span className="glyphicon glyphicon-question-sign"></span>{this.hintcount()} hints</button>

                                    </div>
                                    <div className="quiz-question-message"><span className="glyphicon glyphicon-time"></span>{this.state.timestring}</div>



                            </div>


                            <div className="quiz-header">

                                {this.state.openedhints[this.state.currentIndex] == true ? <h4 className="quiz-header-message">{Ques.hint}</h4> : null}

                            </div>


        <div className="quiz-content">



                            {Ques ? Ques.options.map((choice,index) =>{
                                return(

                                <div className="col col-sm-12 col-md-12 col-lg-6 colm">

                                    <div className="radio">

                                                {/*<button   key={index} onClick={this.selectAnswer.bind(null,index)}  className={(index == this.state.useranwsers[this.state.currentIndex]) ? 'selectedchoice' : 'choice'} className="answersquiz">*/}

                                                <button   key={index} onClick={this.selectAnswer.bind(null,index)} className={(index == this.state.useranwsers[this.state.currentIndex]) ? 'answersquiz' : 'choice'}>
                                            {String.fromCharCode(97 + index).toUpperCase() + ".     " + choice}
                                                </button>


                                    </div>
                                </div>
                                    )
                                }) : null}




        </div>
        </div>
        </div>


                    <div className="footer">

                                <div className="footer-block-back">

                                        <button id="pre" className={this.state.currentIndex == 0 ? "quiztextdisabled" : "quiz-question-message"}
                                        onClick={this.previousQuestion} disabled = {this.state.currentIndex == 0} className="footer-section-back"><span className="glyphicon glyphicon-menu-left">
                                        Back</span></button>

                                </div>


                                <div className="footer-block-quiz">


                                        {this.isFinished() ? <button className="footer-section-quiz-next" onClick={this.submmitAnwsers} > Submit </button> : <button   className={this.state.currentIndex == this.state.questions.length - 1 ? "quiztextdisabled" : "quiz-question-message"}
        onClick={this.nextQuestion} disabled = {this.state.currentIndex == this.state.questions.length - 1} className="footer-section-quiz-next">
            Next<span className="glyphicon glyphicon-menu-right"></span></button>}
                                </div>

                    </div>

</div>

        );
    }
}

export default Quiz ;
