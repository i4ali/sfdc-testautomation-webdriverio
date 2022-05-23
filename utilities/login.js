var jsforce = require('jsforce'),
    conn = new jsforce.Connection({loginUrl : 'https://test.salesforce.com'});

module.exports = function login(username, password){
    return conn.login(username, password)
        .then(res => conn);
}
