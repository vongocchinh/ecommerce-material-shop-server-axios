import axios from 'axios';
import * as api  from './../constant/configApi';
export default function getApiServer(adPoint,method,body){

    return axios({
                method: method,
                url: api.apiServer+adPoint,
                data: body,
                headers:{
                    
                }
            }).catch(er=>{
                console.log(er);
            });
};