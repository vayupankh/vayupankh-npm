"use strict";

let axios = require('axios');

class Vayupankh {
    /**
     * Creates a new Vayupankh instance
     * @param {string} authKey Authentication key
     * @param {string} authPin Authentication pin
     */

    constructor(authKey, authPin) {
        this.authKey = authKey;
        this.authPin = authPin;
    }

    /**
     * Returns the base URL for Vayupankh api call
     * @returns {string} Base URL for Vayupankh api call
     */

    static getBaseURL() {
        return "https://vayu-api.com/0x/public-api/v1/index.php/";
    }

    create_contract(table, fields, rpc, callback) {
            var request_params = ({
                "table_name": table,
                "net": rpc,
                "contract_fields": fields.join("|")
            });
            var jsonData = JSON.stringify(request_params);
        return Vayupankh.doRequest('contract/create', jsonData, this.authKey, this.authPin, callback);
    }


    static doRequest (path, params, key, pin,  callback) {

        if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        else if (callback === undefined && this.allow_promise) {
            promise = true;
        }

        let url = Vayupankh.getBaseURL() + "" + path
        
        axios({
            method: 'post', //you can set what request you want to be
            url: url,
            data: params,
            headers: {
                'Content-Type': 'application/json',
                'authkey': key,
                'authpin': pin
            }    
        })
        .then(function (response){
            callback(null, response.data);
        })
        .catch(function (error){
            return callback(new Error(error.response.data.message+" : "+error.response.data.description), null);
        });

    }

}
module.exports = Vayupankh