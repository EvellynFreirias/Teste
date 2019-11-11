//Importa a biblioteca moment
const moment = require('moment');

//Converte o formato da data enviada pelo usuário para uma data aceita pelo banco de dados
function dateFormat(date){
    var newDt = moment(date, "YYYY-MM-DDTHH:mm")
    var datetime = moment(newDt).format('YYYY-MM-DD HH:mm');
    return datetime;
}

//exporta a função data;
module.exports = dateFormat;