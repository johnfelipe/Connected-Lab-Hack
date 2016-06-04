var watson = require('watson-developer-cloud');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/',function (request, response) {
   
   // Send the response body as "Hello World"
   response.sendFile(__dirname+'/index.html');

    var speech_to_text = watson.speech_to_text({
      url: "https://stream.watsonplatform.net/speech-to-text/api",
      username: '14549245-6f4b-4af4-ba1f-62b4f8c33256',
      password: 'A7RD8DSibX4F',
      version: 'v1'
    });

    var params = {
      // From file
      audio: fs.createReadStream('speech.wav'),
      content_type: 'audio/wav'
    };
    console.log(__dirname);

    speech_to_text.recognize(params, function(err, res) {
      if (err)
        console.log(err);
      else{

      }
        console.log(JSON.stringify(res['results'][0]['alternatives'][0]['transcript'], null, 1));
        //console.log(JSON.parse(res));
    });
    
    console.log("done");
});

app.get('/benson',function (request, response) {
  console.log("Request: "+ request);
  console.log("Response: "+ response);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});