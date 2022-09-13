# Server-Client Communication Protocol

I have made a basic code to understand how the server and client communication works.
I have utilized websockets because they are one layer below HTTP communication but allow two-way communication unlike HTTP. Along with which websocket communication also is faster compared to socket.io
For the Python side, I have used Asynchronous programming so that the thread will not have to wait till the routines are completed in a hierarchical manner but instead make the subroutines into coroutines.
In the Node.js/JavaScipt side, which is the client I firstly try to establish a connection with the Python Server, then I try to send and recieve message using in-built functions of websocket technology.


This basic code will be used as a Prototype to code more complex and bigger codes fro the Websocket Communication Protocol.
