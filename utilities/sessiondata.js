const sf = require('./salesforceapi');

class SessionData {

    data_array = []

    constructor(){
        if (SessionData._instance){
            return SessionData._instance
        }
        SessionData._instance = this;
    }

    store_record(otype, oid){
        console.log("new record created : " + otype +':'+ oid)
        this.data_array.push({[otype]:oid})
    }

    async delete_records(){
        for (let i=0; i<this.data_array.length; i++){
            console.log("deleting record : " + Object.keys(this.data_array[i])[0] + ':' + Object.values(this.data_array[i])[0])
            await sf.delete_object(Object.keys(this.data_array[i])[0], Object.values(this.data_array[i])[0]) 
        }
    }


}

module.exports = new SessionData();