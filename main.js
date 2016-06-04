var http = require("http");
var watson = require('watson-developer-cloud');
var fs = require('fs');

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');

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
    console.log("1");

    speech_to_text.recognize(params, function(err, res) {
      if (err)
        console.log(err);
      else{

      }
        console.log(JSON.stringify(res['results'][0]['alternatives'][0]['transcript'], null, 1));
        //console.log(JSON.parse(res));
    });
    
    console.log("done");
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

//tw5mbx
