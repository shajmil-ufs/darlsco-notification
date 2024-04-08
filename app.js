var app     = require( 'express' )();
var http    = require( 'http' ).createServer( app );
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
}); 
   

 
const PORT = 4510;
 
app.get( '/', function( req, res ) { 
    res.send(  '/public/index.html' ); 
}); 


http.listen( PORT, function() {
    console.log( 'listening on *:' + PORT );
});


var upvote_count = 0;
io.on( 'connection', function( socket ) {
 
    console.log( 'a user has connected!' );
    socket.on("new-message", (message) => {
		console.log(message);
		console.log("message"); 
		//sio.emit(message);
		io.emit("new-message", message ); 
	}); 
    socket.on( 'disconnect', function() {
        console.log( 'user disconnected' );
    });
    
    socket.on( 'upvote-event', function( upvote_flag ) {
        upvote_count += upvote_flag ? 1: -1;
        var f_str = upvote_count + ( upvote_count == 1 ? ' upvote': ' upvotes');
        
        io.emit( 'update-upvotes', f_str );
    });
});
