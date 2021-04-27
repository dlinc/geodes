/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
require('fetch-jsonp')
import utils from "./utilsFactory"
import fetchJsonp from "fetch-jsonp"
import User from "./userFactory"
import { modalController } from '@ionic/vue';
import ShowOde from "../views/components/showOde";
import ShowStreet from "../views/components/showStreet"
import { v4 as  uuidv4 } from 'uuid';

// eslint-disable-next-line no-unused-vars
const dbug = process.env.VUE_APP_DEBUG || false;

if (dbug) { console.log("Mounting Odes Factory", this) }

const url = { 
    base:'https://www.scripter.net/stroke/',
    share:'https://www.scripter.net/stroke/?sid=',
    loginCheck:'lib/ilogin_token4.php',
    login:'lib/ilogin4.php',
    scan: 'lib/pscan5.php',
    add: 'lib/ssave4.php',
    update: 'lib/upsave.php',
    lookup:'lib/slookup.php',
    addTestData : true,
};

let odes = {
    stack: [],
    timings: { init: utils.getTimeStamp() },
    default: {
        icon: process.env.BASE_URL+'assets/icon/user-default.jpg',
        image: process.env.BASE_URL+'assets/master1.jpg',
        audio: "https://archive.storycorps.org/interviews/americo-rodrigues-vociferar-contra-voice-against-sound-poem/audio/",
        video: "https://youtu.be/MTk6RMbWt10"
    },
    status: 'init',
}

function addTestData(){
    let td = []
    td.push({
        audience: "test",
        byline: "testy",
        distance: "-1",
        dt: "Apr 18, 2021 4:00 PM",
        icon: "u1drl.png", 
        lDistance: "-1 km",
        lat: "35.64104608",
        local: "0",
        lon: "-105.96100580",
        position: {lat: 35.64124608, lng: -105.96100580, id: "1544"},
        private: "0",
        radius: "0.000",
        readonce: null,
        sid: "1544",
        stroke: "And so test testo, ↵the yellow hills, increasing thrills,↵the river music even down to a bare trickle,  ↵that stick that looked like a snake   ↵slipping along the ground, the veritude ↵of solid objects is not enough, they also ↵find a place inside you like you are what ↵they came for, or the only thing of true matter. ↵Then this oblong machine works as designed, ↵then this stretch out sphere loves a bond in you  ↵to keep for always. The change retires of late,↵you remember the sun that lit other best days. Even ↵small glades of grass feel it, something out there ↵having a turn, delighted again for this.",
        title: "Test 1:: ",
        uid: "1",
        uimage: "u1image.png",
        userIcon: "/assets/icon/user-1.png",
    })
    td.push({
        audience: "test",
        byline: "testy",
        distance: "-3",
        dt: "Apr 18, 2021 4:00 PM",
        icon: "u1drl.png", 
        lDistance: "-3 km",
        lat: "35.64124608",
        local: "0",
        lon: "-105.98100580",
        position: {lat: 35.64124608, lng: -105.98100580, id: "1544"},
        private: "0",
        radius: "0.000",
        readonce: null,
        sid: "1545",
        xstroke: "And so test testo, ↵the yellow hills, increasing thrills,↵the river music even down to a bare trickle,  ↵that stick that looked like a snake   ↵slipping along the ground, the veritude ↵of solid objects is not enough, they also ↵find a place inside you like you are what ↵they came for, or the only thing of true matter. ↵Then this oblong machine works as designed, ↵then this stretch out sphere loves a bond in you  ↵to keep for always. The change retires of late,↵you remember the sun that lit other best days. Even ↵small glades of grass feel it, something out there ↵having a turn, delighted again for this.",
        title: "Test 2 :: Audio",
        uid: "1",
        audio: odes.default.audio,
        uimage: "u1image.png",
        userIcon: "/assets/icon/user-1.png",
    })
    td.push({
        audience: "test",
        byline: "testy",
        distance: "-4",
        dt: "Apr 18, 2021 4:00 PM",
        icon: "u1drl.png", 
        lDistance: "-5 km",
        lat: "35.63124608",
        local: "0",
        lon: "-105.97100580",
        position: {lat: 35.63124608, lng: -105.97100580, id: "1544"},
        private: "0",
        radius: "0.000",
        readonce: null,
        sid: "1546",
        stroke: "And so test 3, ↵the yellow hills, increasing thrills,↵the river music even down to a bare trickle,  ↵that stick that looked like a snake   ↵slipping along the ground, the veritude ↵of solid objects is not enough, they also ↵find a place inside you like you are what ↵they came for, or the only thing of true matter. ↵Then this oblong machine works as designed, ↵then this stretch out sphere loves a bond in you  ↵to keep for always. The change retires of late,↵you remember the sun that lit other best days. Even ↵small glades of grass feel it, something out there ↵having a turn, delighted again for this.",
        title: "Test 3 ::",
        image: odes.default.image,
        uid: "1",
        uimage: "u1image.png",
        userIcon: "/assets/icon/user-1.png",
    })
    td.push({
        audience: "test",
        byline: "testy",
        distance: "-6",
        dt: "Apr 18, 2021 4:00 PM",
        icon: "u1drl.png", 
        lDistance: "-6 km",
        lat: "35.65124608",
        local: "0",
        lon: "-105.97100580",
        position: {lat: 35.65124608, lng: -105.97100580, id: "1544"},
        private: "0",
        radius: "0.000",
        readonce: null,
        sid: "1547",
        xstroke: "And so test 4, ↵the yellow hills, increasing thrills,↵the river music even down to a bare trickle,  ↵that stick that looked like a snake   ↵slipping along the ground, the veritude ↵of solid objects is not enough, they also ↵find a place inside you like you are what ↵they came for, or the only thing of true matter. ↵Then this oblong machine works as designed, ↵then this stretch out sphere loves a bond in you  ↵to keep for always. The change retires of late,↵you remember the sun that lit other best days. Even ↵small glades of grass feel it, something out there ↵having a turn, delighted again for this.",
        title: "Test 4 :: Video",
        video: odes.default.video,
        uid: "1",
        uimage: "u1image.png",
        userIcon: "/assets/icon/user-1.png",
    })
    return td
}

function normalizeOde(list){
    let user = User.getUser()
    let num = null
    if (url.addTestData === true ) {
        console.log("Add test data!!")
        list.push(...addTestData());
    }
    list = list.map( (s) => {
        s.userIcon=user.icon // odes.default.icon

        /* dev data hacks - remove for prod! */
        if (s.sid=="543") { s.image = odes.default.image;} // delete this line pre-prod! a test case!
        if (s.sid=="547") { s.audio = '/assets/dlinc/makingIt.mp3';}
        if (s.sid=="547") { s.image = '/assets/dlinc/saraInALQ.jpg';}
        if (s.sid=="542") { s.video = '/assets/dlinc/ravine360.mp4';}   
        
        s.uid = uuidv4() // don't need
        s.uuid = s.sid // temp for dev on share

        num = Number(s.distance)
        if (num > 999) {
              s.lDistance= (num/1000).toFixed(1) + " km"
        } else if (num > 0) {
              // code block
              s.lDistance= num.toFixed(1) + " m"
        } else {
              s.lDistance= null
          }
        s.position = {
            lat: Number(s.lat),
            lng: Number(s.lon)
        }
        return s
    })
    return list
}
function getOdes(here) {
 
        odes.here = here
        let substr = '?location_lat='+here.latitude+'&location_lon='+here.longitude+'&location_accuracy='+here.accuracy
        const callUrl=url.base+url.scan+substr;
        if (dbug) { console.log("url+substr:"+callUrl,here); }
        fetchJsonp(callUrl)
        .then(function(response) {
            if (response.ok){ // if HTTP-status is 200-299
 
                if (dbug) { console.log("first then - ok", response)  }
             } else{
                 alert("ERROR: Server returned unexpected codes - " + response);
             }  
            return response.json()
        }).then(function(json) {
            if (dbug) { console.log("2nd then", json) }

            odes.stack=normalizeOde(json.items);

        }).catch(function(err) {
            console.log("response ERROR2 ************ ")
            console.log("Error in Feed!", err);
        })
        return true;
}

async function initOdes(here) {
   
    if (dbug) { console.log("INIT Odes Factory -", odes) }

    await getOdes(here)
    return true;
}


function searchOdes(id){
   const ode = odes.stack.find(it => it.sid === id); // es6 way
   if (dbug) { console.log("Search Odes for id -", id, ode) }
   return ode
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
        //console.log("ODES STACK IN FACtORY -", odes)
        return odes;
    },

    getOneOde(id){
        let thisOde = searchOdes(id)
        return thisOde;
    },
    
    async odeModal(ode) {
        if (dbug) { console.log("Opening Ode Show - ",ode.title); } 
        const modal = await modalController
            .create({
            component: ShowOde,
            cssClass: 'my-custom-class',
            swipeToClose: true,
            componentProps: {
                title: ode.title,
                body: (ode.stroke ? ode.stroke : null),
                proximity: ode.lDistance,
                timestamp: ode.dt,
                byline: ode.byline,
                id: ode.sid,
                uid: ode.uid,
                icon: ode.userIcon,
                image: (ode.image ? ode.image : null),
                audio: (ode.audio ? ode.audio : null),
                video: (ode.video ? ode.video : null),
                hasImage: (ode.image ? true : false),
                hasBody: (ode.stroke ? true : false),
                hasAudio: (ode.audio ? true : false),
                hasVideo: (ode.video ? true : false),
            },
            })
        return modal.present(modal);
    },

    async streetModal(id, map) {
        if (dbug) { console.log("Opening Street show- ",id,map); }
        let thisOde = searchOdes(id)
        const modal = await modalController
            .create({
            component: ShowStreet,
            cssClass: 'my-custom-class',
            swipeToClose: true,
            componentProps: {
                title: thisOde.title,
                body: (thisOde.stroke ? thisOde.stroke : null),
                proximity: thisOde.lDistance,
                timestamp: thisOde.dt,
                byline: thisOde.byline,
                id: id,
                icon: thisOde.userIcon,
                image: (thisOde.image ? thisOde.image : null),
                audio: (thisOde.audio ? thisOde.audio : null),
                video: (thisOde.video ? thisOde.video : null),
                hasImage: (thisOde.image ? true : false),
                hasBody: (thisOde.stroke ? true : false),
                hasAudio: (thisOde.audio ? true : false),
                hasVideo: (thisOde.video ? true : false),
            },
            })
        return modal.present(modal);
    }

} // end
