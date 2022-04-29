const axios = require('axios');

const create_contract = async (DATA) =>{
    try{
        var request = ({
            "table_name": DATA.table,
            "rpc_net": DATA.rpc,
            "contract_fields": DATA.fields.join("|")
        });
        var jsonData = JSON.stringify(request);

        var res = await axios({
            method: 'post', //you can set what request you want to be
            url: 'https://vayu-api.com/0x/public-api/v1/index.php/contract/create',
            data: jsonData,
            headers: {
                'Content-Type': 'application/json',
                'authkey': DATA.key,
                'authpin': DATA.pin
            }
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

        
        return res.response.data;

    }
    catch(err)
    {
        return err;
    }
}
module.exports = {
    create_contract
}