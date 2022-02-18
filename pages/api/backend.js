export const backendHost = 'http://localhost:8080';

// Generic functionality for getting data from backend:
async function getFromBackend(route, callback = e => {}) {
  fetch(backendHost + route)
    .then(r => r.text())
    .then(t => callback(t))
    .catch(e => alert(e))
}

// Generic functionality for sending data to backend:
function postToBackend(route, body, headers) {
  var json = JSON.stringify(body);
  var req = new XMLHttpRequest();

  req.open('POST', backendHost + route);
  for (let key in headers) {
    req.setRequestHeader(key, headers[key])
  };

  req.send(json);
}

// Request messages for given chat:
export function requestMessages(peerName, callback) {
  return getFromBackend('/api/getMessages', callback)
}

// Send message:
export function sendMessage(peerName, message) {
  return postToBackend('/api/sendMessage', {
    to: peerName,
    content: message,
  })
}

// Request all known peers:
export function requestPeers() {
  return getFromBackend('/api/getChats');
}
