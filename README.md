# Vayupankh
[![npm version](https://img.shields.io/npm/v/vayupankh.svg?style=flat-square)](https://www.npmjs.org/package/vayupankh)


## Set-up

1. Download the NPM module
```bash
$ npm install vayupankh
```
2. Require the package in your code.
```js
const Vayupankh = require('vayupankh');
```
3. Initialize with your [Vayupankh](https://vayupankh.io) auth key
```js
const vayu = new Vayupankh("AuthKey",'AuthPin');
```

## Request
You now have the create_contract via following methods.

```js
vayu.create_contract(Tablename,Fields,Rpc,callback);
```


## Example
Performing a create contract
```js
var fields = ["FIELDS_ONE","FIELD_TWO","FIELDS_THREE"];
vayu.create_contract("TableName",fields,"RPC", function (error,data){
        if(error){
            console.log(error);
        }
        else{
            console.log(data);
        }
    });
}

```
