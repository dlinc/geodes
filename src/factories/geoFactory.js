/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */


import utils from "./utilsFactory"
import odes from "./odeFactory"

//const logger = Logger("services:onecount")

let geo = {
    browser: { localStorage: false },
    options: {
        center: { lat: 0, lng: 0 },
        zoom: 16,
        mapTypeId: "satellite",
        zone: {
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
            },
        },
    here: {},
    timings: { init: utils.getTimeStamp() },
    markers: {
        center: "./iconHere.jpg",
        anybody: "./person.jpg"
    },
    status: "init"
}
// eslint-disable-next-line no-unused-vars
//let map;
// eslint-disable-next-line no-unused-vars
//let callbacks = [];
// eslint-disable-next-line no-unused-vars
//let CALLBACK = "__googleMapsCallback";
//version = version;
//this.apiKey = apiKey;
//this.libraries = libraries;
// @ts-ignore
////this.language = language;
// @ts-ignore
//this.region = region;
//this.URL = 'https://maps.googleapis.com/maps/api/js';
// @ts-ignore
//this.mapIds = mapIds;

/*

function getDT (tm){ // date wi milliseconds
    var dt = new Date();
    if (tm) { dt = dt +" "+dt.getMilliseconds()+" ms"; }
    return dt; 
}

function getFDT() { // dt formatted for mysql
     var nowdt = new Date();
     var fdt = nowdt.getFullYear() + "-" + ((nowdt.getMonth()+1)<=9 ? '0' : '')+(nowdt.getMonth()+1) + "-" + ((nowdt.getDate())<=9 ? '0' : '')+nowdt.getDate() + " " +  ((nowdt.getHours())<=9 ? '0' : '')+nowdt.getHours() + ":" + ((nowdt.getMinutes())<=9 ? '0' : '')+ nowdt.getMinutes() + ":" + ((nowdt.getSeconds())<=9 ? '0' : '') + nowdt.getSeconds();
     console.log("getDT="+fdt);
     return fdt;
}

function nVal (v){ // normalize numeric, and string values
    //do nothing to the string if it starts with a numeric character
    if (parseFloat(v)==v) {
        v=(isNaN(parseFloat(v)) ? v : parseFloat(v));
    }
    return v;
}
*/


function backupGeo(timestamp){
 if (geo.browser.localStorage === true) { 
        //localStorage["here"]=JSON.parse(geo.here.latitude);
        localStorage.setItem("here", JSON.stringify(geo.here));
        localStorage.setItem("geoTimestamp",timestamp);
 }
}

function restoreGeo(){
    if (geo.browser.localStorage) {
        console.log("resetpre Geo is ",localStorage.here)
        geo.here = JSON.parse(localStorage.getItem("here"));
        //geo.here = JSON.parse(JSON.stringify(localStorage.here))
        geo.timings.located = JSON.parse(localStorage.getItem("geoTimestamp"))
        alert("Position restored from last locate."); //Restored coordinates from localstorage!");
        /*$.each( localStorage, function( key, value ) {
            if (key.indexOf("place_")==0) {
                    geo.here[key.substr(6)]=scripter.nVal(value); 
                }
        });*/
        return true;
    }
    return false
}

function initGeo() {

    // show map and get location
    //place.viewMap();
    console.log("INIT Geo Factory")

    geo.browser.userAgent = navigator.userAgent;
    if (typeof(Storage)!=="undefined") {
        geo.browser.localStorage=true;
    }

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition( onLocateSuccess, onLocateFailed, geo.options );
    } else {
        geo.status = "not supported"
    }
}


function onLocateSuccess(position) {
    //alert("success!");
    // set coordinate values
    console.log("onLocationSuccess -", position)
    //geo.here =  JSON.parse(position.coords);
    geo.here =  position.coords;
    geo.timings.located=position.timestamp;

    // set position holders
    geo.options.center = {
        lat:geo.here.latitude,
        lng: geo.here.longitude,
    }
    geo.here.latitude0=geo.here.latitude;
    geo.here.longitude0=geo.here.longitude;
    geo.status = "found"

    console.log('locate success. Final Geo -', geo);

    // init hits
    //initLocationReferences();
    odes.initOdes(geo.here);

    // render map
    //place.initMap();
    backupGeo(position.timestamp);
    // find POIs
    //strokes.getStrokes();
}

function onLocateFailed(position) {

    console.log("Geolocated failed, trying localstorage");

    if (restoreGeo()===true) {
        geo.status = "local copy"
        odes.initOdes(geo.here);
        
    } else {
        geo.status = "fail";
        console.log("Local copy not available")
    }

    console.log("Geoloation fail final Geo -", geo, position)
}

/* map load functions */
/*//
// eslint-disable-next-line no-unused-vars
function loadPromise() {
    return new Promise((resolve, reject) => {
        loadCallback((err) => {
            if (!err) {
                resolve();
            } else {
                reject(err);
            }
        });
    });
}
// eslint-disable-next-line no-unused-vars
function loadCallback(fn) {
    callbacks.push(fn);
    executeGeoInit();
}
/*
setScript() {
    const url = this.createUrl();
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.src = url;
    // @ts-ignore
    script.onerror = this.loadErrorCallback.bind(this);
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}
*//*
// eslint-disable-next-line no-unused-vars
function loadErrorCallback(e) {
    this.onerrorEvent = e;
    callback();
}
// eslint-disable-next-line no-unused-vars
function setCallback() {
    window.__googleMapsCallback = callback.bind(this);
}
// eslint-disable-next-line no-unused-vars
function callback() {
    // eslint-disable-next-line no-undef
    done = true;
    // eslint-disable-next-line no-undef
    loading = false;

    callbacks.forEach(cb => {
        cb(this.onerrorEvent);
    });

    callbacks = [];
}
// eslint-disable-next-line no-unused-vars
function executeGeoInit() {
    console.log("Execute GeoInit -", global)
    // eslint-disable-next-line no-undef
    if (done) {
        callback();
    } else {
        // eslint-disable-next-line no-undef
        if (loading) {
            // do nothing but wait
        } else {
            // eslint-disable-next-line no-undef
            loading = true;
            setCallback();
            //this.setScript();
        }
    }
}

*/

initGeo()

export default {

    helloGeo (invara) {
        console.log("Hello Geo", invara)
        return "Geo says hi!"
    },

    getGeo(){
        return geo;
    },

    setHomeMarker(){
      //  <ion-icon ios="ios-flash" md="md-flash"></ion-icon>
    },

    initMap1(mapDiv) {

            console.log("running Initmap...");

            // The location of Uluru
            //const uluru = { lat: -25.344, lng: 131.036 };
            // The map, centered at Uluru
            //const map = new google.maps.Map(document.getElementById("mapDiv"), geo.options);

           //const mapDiv = document.getElementById("mapDiv");
           // eslint-disable-next-line no-undef
           const map = new google.maps.Map(mapDiv.value, geo.options);
            // The marker, positioned at Uluru
           // const marker = new google.maps.Marker({
           //   position: uluru,
            //  map: map,
           // });
           return map;
          },

    initMap2(mapDiv) {

            console.log("running Initmap.. temp MapDiv ", mapDiv);

            // The location of Uluru
            //const uluru = { lat: -25.344, lng: 131.036 };
            // The map, centered at Uluru
            //const map = new google.maps.Map(document.getElementById("mapDiv"), geo.options);

           //const mapDiv = document.getElementById("mapDiv");
           // eslint-disable-next-line no-undef
           const map = "who is afraid of virginia wollf?"
           //new google.maps.Map(mapDiv.value, geo.options);
            // The marker, positioned at Uluru
           // const marker = new google.maps.Marker({
           //   position: uluru,
            //  map: map,
           // });
           return map;
          },

          // eslint-disable-next-line no-unused-vars
       // loadMap() {
       //     return loadPromise();
       // }

       // map = new google.maps.Map(document.getElementById("map"), geo.);

        // draw map object and set center
        /* eslint-disable no-undef */
       
       // let cpoint=new google.maps.LatLng(where.here.latitude,where.here.longitude);
       //if (google!==null){
        // eslint-disable-next-line no-unused-vars
           // map = new google.maps.Map(document.getElementById("mapDiv"),geo.options);
       // } else {
        //    console.log("Google is not yet defined! Try again...")
       // }
        //map.setCenter(cpoint) 
        // add self marker
        //let hereicon=geo.markers.center;

        //xplace.addMarker(session.env.here.latitude, session.env.here.longitude, "Here You Are", hereicon, -1);
        
        //google.maps.event.trigger(map, 'resize');
   // }

} // end
