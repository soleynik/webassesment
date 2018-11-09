cd app
call ./gradlew test jacocoTestReport
echo %ERRORLEVEL%
exit %ERRORLEVEL%

