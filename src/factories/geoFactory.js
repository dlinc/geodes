/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */


import utils from "./utilsFactory"
import odes from "./odeFactory"
import { modalController } from '@ionic/vue';
import ShowLocation from "../views/components/showLocation";

// eslint-disable-next-line no-unused-vars
const dbug = process.env.VUE_APP_DEBUG || false;

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
    status: "init",
    modal: { open: false }
}

function backupGeo(timestamp){
 if (geo.browser.localStorage === true) { 
        //localStorage["here"]=JSON.parse(geo.here.latitude);
        localStorage.setItem("here", JSON.stringify(geo.here));
        localStorage.setItem("geoTimestamp",timestamp);
 }
}

function restoreGeo(){
    if (geo.browser.localStorage) {
        if (dbug) { console.log("resetpre Geo is ",localStorage.here) }
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
    if (dbug) { console.log("Init Geo Factory", this) }


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

    // set coordinate values
    if (dbug) { console.log("onLocationSuccess -", position) }
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

    if (dbug) {  console.log('locate success. Final Geo -', geo); }

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

function normalizeSetting(it) {
    if (it === null) { return ' -  n/a -'}
    return ""+it // force convert to string
}

function normalizeUTCToLocal(ts) {
    const local = new Date(ts)
    return local
}

initGeo()

export default {

    getGeo(){
        return geo;
    },

    XsetHomeMarker(){
      //  <ion-icon ios="ios-flash" md="md-flash"></ion-icon>
    },


    async locationModal() {
        if (dbug) {  console.log("Opening location Modal" ) }
        //if (geo.modal.open === true) { return }
        //this.toggleModal() 
        const ts = normalizeUTCToLocal(geo.timings.located)
        const modal = await modalController
            .create({
            component: ShowLocation,
            cssClass: 'my-custom-class',
            swipeToClose: true,
            componentProps: {
                latitude: normalizeSetting(geo.here.latitude),
                longitude: normalizeSetting(geo.here.longitude),
                timestamp: normalizeSetting(ts),
                accuracy: normalizeSetting(geo.here.accuracy),
                altitude: normalizeSetting(geo.here.altitude),
                heading: normalizeSetting(geo.here.heading),
                speed: normalizeSetting(geo.here.speed),
                hasImage:  false 
            },
            })
        return modal.present(modal);
    },

    XtoggleModal(){ // combat double fires
        geo.modal.open = !geo.modal.open;
        return
    }

} // end
