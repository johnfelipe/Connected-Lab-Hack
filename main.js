var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

//tw5mbx

{
  "iotf-service": [
    {
      "name": "iot-phone-iotf-service",
      "label": "iotf-service",
      "plan": "iotf-service-free",
      "credentials": {
        "iotCredentialsIdentifier": "a2g6k39sl6r5",
        "mqtt_host": "g93mm4.messaging.internetofthings.ibmcloud.com",
        "mqtt_u_port": 1883,
        "mqtt_s_port": 8883,
        "base_uri": "https://g93mm4.internetofthings.ibmcloud.com:443/api/v0001",
        "http_host": "g93mm4.internetofthings.ibmcloud.com",
        "org": "g93mm4",
        "apiKey": "a-g93mm4-fytqlqarei",
        "apiToken": "U)D-hEQ(?4U?Zg*BFV"
      }
    }
  ]
}