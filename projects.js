if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.");
}

var db;
var request = window.indexedDB.open("BashboredTasksDB", 1);

request.onerror = function(event) {
  window.alert("Error opening database.");
};
request.onsuccess = function(event) {
  window.alert("Database opened successfully.");
  db = event.target.result;
};
