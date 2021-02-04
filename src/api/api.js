
import  axios from 'axios';
export const fetchGetDataProductHome= async ()=>{
    try {
        const  res=await axios('http://localhost:3000/products');
        return res;
    } catch (error) {
        console.log(error);
    }
}
