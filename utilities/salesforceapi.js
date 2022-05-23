var jsforce = require('jsforce');
const globalconfig = require('../globalconfig');



class SalesForce
{

    OID_REGEX = /^(%2F)?([a-zA-Z0-9]{15,18})$/

    constructor(){
        if(SalesForce._instance){
            return SalesForce._instance
        }
        SalesForce._instance = this;
    }

    
    async login(username, password) {
        var conn = new jsforce.Connection({loginUrl : globalconfig.baseurl});
        return conn.login(username, password).then(res => this.conn = conn);
    }
    
    async delete_object(obtype, oid){
        return await this.conn.sobject(obtype).destroy(oid, function(err, ret) {
            if (err || !ret.success) { 
                return console.error(err, ret); 
            }
            console.log('deleted Successfully : ' + ret.id);
        });
    }

    async get_current_record_id(){
        let current_url = await browser.getUrl()
        let url_splitted = current_url.split('/')
        let oid = ''
        url_splitted.forEach(element => {
            if (element.match(this.OID_REGEX)) {
                oid = element
            }
            })
        return oid
    }

    async form_url_for_object(obj){
        return this.conn.instanceUrl + '/lightning' + '/o/' + obj + '/home'
    }

    logout(){
        this.conn.logout(function(err) {
            if (err) { return console.error(err); }
            // now the session has been expired.
          });
    }

}

module.exports = new SalesForce();

