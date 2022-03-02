const WebSocket = require('ws');
var ws = new WebSocket("ws://localhost:8000");

ws.onopen = function(){
    console.log("Connection is established");
    ws.send("Message");
};

ws.onmessage = function(evt){
    var received_msg = evt.data;
    console.log(received_msg);
};

ws.onclose = function(evt) {
    if(evt.wasClean){
        console.log('[close] Connection closed cleanly, code = ${evt.code}');
    }else{
        console.log('[close] Connection died');
    }
};
