function init() {

  var serverBaseUrl = document.domain;

  // Init client to Socket.IO server
  var socket = io.connect(serverBaseUrl);
  var sessionId = '';

  // On Success -> auth
  socket.on('connect', function () {
    sessionId = socket.io.engine.id;         // Session ID
    console.log('Connected ' + sessionId);
  });
}

// Init doc.
$(document).on('ready', init);