function addButton(name, cb) {
  var a = document.createElement("button");
  a.innerText = name;
  a.onclick = cb;
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(a);
}

function log(str,logDiv) {
  console.log(str);
  logDiv.innerHTML += str + "<br>";
}

function docontent(){
document.body.innerHTML = "";

addButton("Clear logs", function() {
  logDiv.innerHTML = "";
});

addButton("Send message with delayed response", function() {
  chrome.runtime.sendMessage({delayedResponse: true}, function(response) {
    log("Background page responded: " + response,logDiv);
  });
});

addButton("Show counters", function() {
  chrome.runtime.sendMessage({getCounters: true}, function(response) {
    log("In-memory counter is: " + response.counter,logDiv);
    log("Persisted counter is: " + response.persistentCounter,logDiv);
  });
});

addButton("Set an alarm", function() {
  chrome.runtime.sendMessage({setAlarm: true});
});
var logDiv = document.createElement("div");
logDiv.style.border = "1px dashed black";
document.body.appendChild(document.createElement("br"));
document.body.appendChild(logDiv);

chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
  log("Got message from background page: " + msg,logDiv);
});


log("Ready.",logDiv);
}
window.onload = function(){docontent();};
