/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */


import utils from "./utilsFactory"
import odes from "./odeFactory"

//const logger = Logger("services:onecount")


let geo = {
    browser: { localStorage: false },
    options: {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 16,
        },
    here: null,
    timings: { init: utils.getTimeStamp() },
    markers: {
        center: "./here.jpg",
        genericPerson: "./person.jpg"
    },
    status: "init"
}
// eslint-disable-next-line no-unused-vars
let map;

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
/*
function initLocationReferences() {
    let dt = getDT();
    let lstr='Latitude: '           + geo.here.latitude              + '<br/>'+
                        'Longitude: '          + geo.here.longitude             + '<br/>' +
                        'Altitude: '           + geo.here.altitude              + '<br/>' +
                        'Accuracy: '           + geo.here.accuracy              + '<br/>' +
                        'Altitude Accuracy: '  + geo.here.altitudeAccuracy      + '<br/>' +
                        'Heading: '            + geo.here.heading               + '<br/>'+
                        'Speed: '              + geo.here.speed                + '<br/>' +
                        'Compass: '            + geo.here.compass                + '<br/>' +
                        'Alt X: '              + geo.here.altx               + '<br/>' +
                        'Alt Y: '              + geo.here.alty                + '<br/>' +
                        'Alt Z: '              + geo.here.altz                + '<br/>' +
                        'Date Time: '          + dt  + '<br/>' +
                            'Logged in: '          + (user.login.state ===true ? true : false );
    
    return lstr;
    //console.log('ulogin.state=', user.login.state);
}*/

/* function plotPoint (point){
 
    // setup map and pos based on point.coordinates
      session.env.here.latitude = point.item.lat;
      session.env.here.latitude1 = point.item.lat;
      session.env.here.longitude = point.item.lon;
      session.env.here.longitude1 = point.item.lon;
      //session.env.here.altitude=point.item.lon;
      session.env.here.accuracy=(point.item.accuracy> 0 ? point.item.accuracy : null);
      initLocationReferences();

       // refresh POIs
      place.deleteMarkers(); 							
      place.initMap();			           
      strokes.getStrokes(); 
      scripter.setMode("map");

      // show shared point on top
     setTimeout(function () { 
          var sstack = strokes.showStack();    
          console.log("Stack is ",sstack);
          strokes.prepStroke(0); //always the first in the stack?
         }, 1000); // set small delay to permit map init to happen before placing markers

    }*/



initGeo()

export default {

    helloGeo (invara) {
        console.log("Hello Geo", invara)
        return "Geo says hi!"
    },

    getGeo(){
        return geo;
    },


    initMap() {

        console.log("running Initmap...");


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
    },

} // end
