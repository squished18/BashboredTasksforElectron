if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.");
}

var db;
var request = window.indexedDB.open("BashboredTasksDB", 2);

request.onupgradeneeded = function(event)
{
  db = event.targt.result;

  var objectStore = db.createObjectStore("projectsStore", {keyPath: "project_id"});

  window.alert("Database schema upgraded to version 2.");
};
request.onerror = function(event) {
  window.alert("Error opening database.");
};
request.onsuccess = function(event) {
  window.alert("Database opened successfully.");
  db = event.target.result;
};
