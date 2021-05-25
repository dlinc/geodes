/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
//require('fetch-jsonp')

//import { userSetter } from "core-js/fn/symbol"

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
    id:-1,
    name:null,
    iconUrl: process.env.BASE_URL+'assets/icon/',
    icon: 'user-default.jpg',
    status: 'init',
    loggedIn: false,
    directory: '/'
}


function initUser() {
       /* test datat below, for now */
       user.name= 'Dlinc' 
       user.icon= user.iconUrl+'user-1.png'
       user.loggedIn = true
       user.directory = '/dlinc/'
       console.log("Init User ", user)
       return
}

initUser()

export default {

    getUser(){
        //console.log("ODES STACK IN FACtORY -", odes)
        return user;
    },

    loggedIn(){
        return user.loggedIn
    }

} // end
