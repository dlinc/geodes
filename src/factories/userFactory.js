/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
//require('fetch-jsonp')

//import geo from "./geoFactory"


console.log("Mounting User Factory")
/*
const url = { 
    base:'https://www.scripter.net/stroke/',
    share:'https://www.scripter.net/stroke/?sid=',
    loginCheck:'lib/ilogin_token4.php',
    login:'lib/ilogin4.php',
    scan: 'lib/pscan5.php',
    add: 'lib/ssave4.php',
    update: 'lib/upsave.php',
    lookup:'lib/slookup.php'
};
*/

let user = {
    name:null,
    iconUrl: process.env.BASE_URL+'assets/icon/',
    icon: 'user-default.jpg',
    status: 'init',
    loggedIn: false,
}


function initUser() {
 /*

        odes.here = here
        let substr = '?location_lat='+here.latitude+'&location_lon='+here.longitude+'&location_accuracy='+here.accuracy
        const callUrl=url.base+url.scan+substr;
        console.log("url+substr:"+callUrl,here);
        fetchJsonp(callUrl)
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
            // add temp/work defaults
            odes.stack = odes.stack.map( (s) => {
                s.img=odes.icon
                return s
            })
        }).catch(function(err) {
            console.log("response ERROR2 ************ ")
            console.log("Error in Feed!", err);
        })
        */
       user.name= 'Dlinc' 
       user.icon= user.iconUrl+'user-1.png'
       user.loggedIn = true
       console.log("Init User ", user)
       return
}

initUser()

export default {

    getUser(){
        //console.log("ODES STACK IN FACtORY -", odes)
        return user;
    },

} // end
