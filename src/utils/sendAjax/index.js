import * as superagent from 'superagent';
import VerificationResponse from './verificationResponse';

/**
 * 请求域名
 */
const getHost = () => {
    return 'http://www.dev.com'
    // return window['$$_env'].URL;
};

/**
 * 向后台发送请求 调用superagent
 * @param type 请求类型 如:post get 
 * @param uri 请求地址
 * @param params 参数
 */
const sendAjax = (type, uri, params) => {
    return new Promise((resolve) => {
        const options = {
            'Content-Type': 'application/json',
            'Authorization': '9999'
        };

        superagent[type](getHost() + uri)
            .set(options)[type === 'get' ? 'query' : 'send'](params)
            .end((err, res) => {
                resolve(new VerificationResponse(res, err).verification());
            })
            // .timeout(3000);
    });
};

export default sendAjax;
