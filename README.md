# Vayupankh
[![npm version](https://img.shields.io/npm/v/vayupankh.svg?style=flat-square)](https://www.npmjs.org/package/vayupankh)


## Set-up

1. Download the NPM module
```bash
$ npm install vayupankh@latest
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
vayu.createContract(Tablename,Fields,Rpc,callback);
vayu.initIransaction(contractAddress,data,callback);
vayu.getTransaction(contractAddress,callback);
```


## Example
Performing a create contract
```js

var fields = ["FIELDS_ONE","FIELD_TWO","FIELDS_THREE"];
vayu.createContract("TableName",fields,"RPC", function (error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});


```
Performing a transaction to contract
```js

var data = ["DATA1","DATA2","DATA3"];
vayu.initIransaction("ContractAddress",data, function (error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});


```
getting list of transaction in contract
```js

vayu.getTransaction("ContractAddress", function (error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
});


```
