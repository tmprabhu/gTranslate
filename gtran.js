process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const translate = require('google-translate-api');
translate('சாப்டியா?', {from:'ta',to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});