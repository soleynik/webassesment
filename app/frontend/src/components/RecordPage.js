import React from 'react';
import Webcam from './Webcam';
import {Link} from 'react-router';
import RecordRTC from 'recordrtc';
import { Modal, ProgressBar } from 'react-bootstrap';
import axios from 'axios';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia || navigator.msGetUserMedia);

class RecordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recordVideo: null,
            src: null,
            recording: false,
            uploadSuccess: null,
            uploading: false
        };

        this.requestUserMedia = this.requestUserMedia.bind(this);
        this.captureUserMedia = this.captureUserMedia.bind(this);
        this.startOrStopRecord = this.startOrStopRecord.bind(this);
        this.stopRecord = this.stopRecord.bind(this);
    }

    captureUserMedia(callback) {
        var params = { audio: true, video: true };

        navigator.getUserMedia(params, callback, (error) => {
            alert(JSON.stringify(error));
        });
    };

    componentDidMount() {
        if(!hasGetUserMedia) {
            alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
            return;
        }
        this.requestUserMedia();
    }

    requestUserMedia() {
        console.log('requestUserMedia')
        this.captureUserMedia((stream) => {
            this.setState({ src: window.URL.createObjectURL(stream) });
            console.log('setting state', this.state)
        });
    }

    startOrStopRecord() {
        if(!this.state.recording){
            this.setState({recording: true});
            this.captureUserMedia((stream) => {
                this.state.recordVideo = RecordRTC(stream, { type: 'video' });
                this.state.recordVideo.startRecording();
        });
        }
        else{
            this.stopRecord();
        }


    }

    stopRecord() {

        this.state.recordVideo.stopRecording(() => {
            let params = {
                type: 'video/webm',
                data: this.state.recordVideo.blob,
                id: Math.floor(Math.random()*90000) + 10000
            }

            this.setState({ uploading: true });
            var file = new File([this.state.recordVideo.getBlob()],'Record-' + (new Date).toISOString().replace(/:|\./g, '-') + '.webm', {type: 'video/webm'});
            var formData = new FormData();
            formData.append("uploadfile", file);
            var config = {
                headers:  {'Authorization': 'Bearer '+localStorage.getItem('SHRPASTOKEN')},
                onUploadProgress: function(progressEvent) {
                    var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
                }
            };

            axios.post('api/assessment/uploadfile'+(localStorage.getItem('SHRPASUSERID')), formData, config).then(res => {
                console.log(res);
                this.setState({uploading: false, uploadSuccess: true, recording: false});
            });
        });
    }

    render() {
        return(
            <div className="some">
                <div className="col col-sm-12 col-md-12 col-lg-12 fixed">

                    <div className="video-frame">
                        <video className="video-window" autoPlay src={this.state.src}></video>

                    </div>

                </div>

                <div className="col col-sm-12 col-md-12 col-lg-12 fixed">


                    <div className="video-section-record">

                        <button   id="video" onClick={this.startOrStopRecord} className="video-button-record">{this.state.recording ? "Stop" : "Start"} </button>

                    </div>


                    <div className="video-section-skip">

                                <Link to="/thanks"><button className="video-button-skip">Skip</button></Link>

                    </div>
                </div>
        </div>


        )
    }
}

export default RecordPage;