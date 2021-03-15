/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
require('fetch-jsonp')
import utils from "./utilsFactory"
//import geo from "./geoFactory"
import fetchJsonp from "fetch-jsonp"

console.log("Mounting Odes Factory")

const url = { 
    base:'https://www.scripter.net/stroke/',
    share:'https://www.scripter.net/stroke/?sid=',
    loginCheck:'lib/ilogin_token4.php',
    login:'lib/ilogin4.php',
    scan: 'lib/pscan5.php',
    add: 'lib/ssave4.php',
    update: 'lib/upsave.php',
    icon:'./img/icons/',
    lookup:'lib/slookup.php'
};

let odes = {
    options: null,
    stack: [],
    timings: { init: utils.getTimeStamp() },
    status: 'init',
}


function getOdes(here) {
 
        /* prep scan form
        var fdt=scripter.getFDT();
        $('#scanFormLat').val(session.env.here.latitude);
        $('#scanFormLon').val(session.env.here.longitude);
        $('#scanFormLat1').val(session.env.here.latitude1);
        $('#scanFormLon1').val(session.env.here.longitude1);
        $('#scanFormAlt').val(session.env.here.altitude);
        $('#scanFormAccuracy').val(session.env.here.accuracy);
        $('#scanFormRad').val(session.env.here.accuracy);
        $('#scanFormToken').val(user.login.token);
        $('#scanFormScope').val(session.settings.scope);
        $('#scanFormHits').val(session.settings.hits);
        $('#scanFormRadius').val(session.settings.radius);
        $('#scanFormDT').val(scripter.getFDT(fdt));*/

        // run call
        const callUrl=url.base+url.scan;
        let substr = '?location_lat=45.5595478&location_lon=-122.65733010000001&location_lat1=45.5595478&location_lon1=-122.65733010000001&location_accuracy=43&location_altitude=&location_radius=43&token=&location_dt=2021-02-13+19%3A37%3A59&scant=&scanm=&scanr='
        //$("#strokeScanForm").serialize();
        console.log("url+substr:"+callUrl+"?"+substr,here);
let atest='https://www.scripter.net/stroke/lib/pscan5.php?location_lat=45.5595478&location_lon=-122.65733010000001&location_lat1=45.5595478&location_lon1=-122.65733010000001&location_accuracy=43&location_altitude=&location_radius=43&token=&location_dt=2021-02-13+19%3A37%3A59&scant=&scanm=&scanr='
        fetchJsonp(atest) //callUrl)
        .then(function(response) {
            if (response.ok){ // if HTTP-status is 200-299
                // return response.json()  
                console.log("first then - ok", response)  
             } else{
                 alert("ERROR: Server returned unexpected codes - " + response);
             }  
            return response.json()
        }).then(function(json) {
            console.log("2nd then", json)
            //
            //this.result = response.body; 
            //this.responseAvailable = true;
            odes.stack=json.items;

        }).catch(function(err) {
            console.log("response ERROR2 ************ ")
            console.log("Error in Feed!", err);
        })



                            // Form data
                            //data: substr, 
                            //dataType:'jsonp',
                            //cache: false

        return true;

}

async function initOdes(here) {
   
    console.log("INIT Odes Factory -", odes)

    // check conditions
    //if (!geo.here.latitude || !geo.here.longitude) { alert("Indistinct Location. Please retrieve Location ..."); return false;}
    //console.log("mking geo as ",geo)

    await getOdes(here)

    // show map and get location
    //place.viewMap();
    return true;

}



export default {

    helloOdes (invara) {
        console.log("Hello Odes", invara, odes)
        return "Odes says hi!"
    },

   async initOdes(here){
        await initOdes(here)
        return odes
    },

    getOdes(){
        console.log("ODES STACK IN FACtORY -", odes)
        return odes;
    },

} // end
