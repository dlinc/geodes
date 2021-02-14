/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */


import utils from "./utilsFactory"
import odes from "./odeFactory"

//const logger = Logger("services:onecount")


let geo = {
    browser: { localStorage: false },
    options: null,
    here: null,
    timings: { init: utils.getTimeStamp() },
    status: "init"
}
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

initGeo()

export default {

    helloGeo (invara) {
        console.log("Hello Geo", invara)
        return "Geo says hi!"
    },

    getGeo(){
        return geo;
    },

} // end
