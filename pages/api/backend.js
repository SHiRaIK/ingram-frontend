export const backendHost = 'http://localhost:8080';

// Generic functionality for getting data from backend:
async function getFromBackend(route, headers) {
  const res = await fetch(backendHost + route, {
    method: 'GET',
    headers: headers,
  });

  if (res.status >= 400)
    throw new Error('Failed to contact backend.')

  return res;
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
export function requestMessages(peerName) {
  return getFromBackend('/api/get-messages', new Headers({
    'Content-Type': 'text/plain',
    'type': 'message-request',
    'peer': peerName,
  })
  );
}

// Send message:
export function sendMessage(peerName, message) {
  return postToBackend('/api/send-message', message, new Headers({
    'Content-Type': 'text/plain',
    'type': 'message-send',
    'peer': peerName,
    'content': JSON.stringify(message),
  })
  );
}

// Request all known peers:
export function requestPeers() {
  return getFromBackend('/api/getChats', message, new Headers({
    'Content-Type': 'text/plain',
    'type': 'get-chats',
  }));
}
