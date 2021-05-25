/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

//import geo from "./geoFactory"

//const logger = Logger("services:onecount")
 
console.log("Mounting Util Factory")


export default {

getTimeStamp() {
    return new Date().getTime();
},

getAssetsDirectory(){
    return (process.env.NODE_ENV === 'development' ? process.env.BASE_URL+'gleodes/wake' : 'https://www.scripter.net/gleodes/wake')
}

} // end
