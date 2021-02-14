/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

import geo from "./geoFactory"

//const logger = Logger("services:onecount")

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
    timings: { init: getTimeStamp() },
    status: 'init',
    apiKey: '<YOUR_RAPIDAPI_KEY>'
}

function getTimeStamp(){
    return new Date().getTime();
}

function getOdes() {
 
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
        let substr = '?location_lat=45.5595712&location_lon=-122.6573743'; //$("#strokeScanForm").serialize();
        console.log("url+substr:"+callUrl+"?"+substr);

        fetch(callUrl, {
            "method": "GET",
            /*"headers": {
                "x-rapidapi-host": "jokes-database.p.rapidapi.com",
                "x-rapidapi-key": odes.apiKey
            }*/
        })
        .then(response => { 
            if(response.ok){
               // return response.json()  
               console.log("first then - ok")  
            } else{
                alert("first then; Server returned " + response.status + " : " + response.msg);
            }              
           // renderStrokes(results.items);
           // strokes.env.listDirty=true;

        })
        .then(response => {
            console.log("2nd then")
            this.result = response.body; 
            this.responseAvailable = true;
        })
        .catch(err => {
            console.log("response ERROR2 ************ ")
            console.log("Error in Feed!", err);
        });


                            // Form data
                            //data: substr, 
                            //dataType:'jsonp',
                            //cache: false

        return true;

}

/*
function backupOdes(timestamp){
 if (geo.browser.localStorage === true) { 
        //localStorage["here"]=JSON.parse(geo.here.latitude);
        localStorage.setItem("here", JSON.stringify(geo.here));
        localStorage.setItem("geoTimestamp",timestamp);
 }
}

function restoreOdes(){
    if (geo.browser.localStorage) {
        console.log("resetpre Geo is ",localStorage.here)
        geo.here = JSON.parse(localStorage.getItem("here"));
        //geo.here = JSON.parse(JSON.stringify(localStorage.here))
        geo.timings.located = JSON.parse(localStorage.getItem("geoTimestamp"))

        return true;
    }
    return false
}
*/

async function initOdes() {
   
    console.log("INIT Odes Factory -", odes)

    // check conditions
    //if (!geo.here.latitude || !geo.here.longitude) { alert("Indistinct Location. Please retrieve Location ..."); return false;}
    console.log("mking geo as ",geo)

    await getOdes()

    // show map and get location
    //place.viewMap();
    return true;

}



export default {

    helloOdes (invara) {
        console.log("Hello Odes", invara, odes)
        return "Odes says hi!"
    },

    async getOdes(){
        if (odes.stack.length<=0) {
            await initOdes()
            console.log("End init Odes call")
        }
        return odes;
    },

} // end
