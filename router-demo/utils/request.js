import urlcat from 'urlcat';
import debug  from './debug.js';

const request = async (url,{method='GET' ,params,body} = {})=>{
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const requestUrl = urlcat(apiUrl,url,params);
    debug('requestUrl',requestUrl);
    const headers = {
        'Content-Type':'application/json',
        'Accept':'application/json',
    }

    const config = {
        method,
        headers,
        ...( body && {body: JSON.stringify(body) } )
    };
    debug("request config",config,`url[${requestUrl}]`);
    const response = await fetch(requestUrl);
    debug("after fetch")
    //debug("request response",await response.text());
    if(!response.ok){
        const {message , error} = await response.json().catch(()=>({message:'Unknown error',error:true}));
        debug("request error",message,error);
        //throw new Error(message || 'Request failed');
    }
    const result = await response.json();
    debug("request result",result);
    return result;
}

export const get = (url,params) => request(url,{method:'GET',params});
export const post = (url,body) => request(url,{method:'POST',body});
export const patch = (url, body) => request(url, { method: 'PATCH', body })

export const del = (url) => request(url, { method: 'DELETE' })

export default request;