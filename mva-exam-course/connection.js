function load(url, data, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        callback(xhr.responseText);
    }
    xhr.send(data);
}

// For communication client-server we use JSON
//JSON.parse & JSON.stringify

navigator.geolocation.getCurrentPosition(showmap);

function showmap(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("locat").innerHTML = latitude+"Lat "+longitude+"Long";
    //display map

    sessionStorage.setItem("latitude", latitude);
    var myloadedLat = sessionStorage.getItem("latitude");

    localStorage.setItem("latitude", latitude);
    myloadedLat = localStorage.getItem("latitude");
}

// Web workers= background thread for scripts (Browser only fowllows 1)

//Websocket main events onopne onmessage onclose

//File API for uploading data to server (Web storage). Interfaces: file, filelist, blob and filereader

// localstorage for storing large amounts of data on device
// sessionStorage only for session
/* Localstorage using:
setItem(key,value); key is variable name, value is what we store
getItem(key);
removeItem();
clear();*/
