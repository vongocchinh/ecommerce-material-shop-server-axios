import axios from 'axios';
import * as api  from './../constant/configApi';
export default function getApi(adPoint,method,body){
    return axios({
                method: method,
                url: api.api+adPoint,
                data: body
            }).catch(er=>{
                console.log(er);
            });
};
