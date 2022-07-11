const Joi=require('joi')

module.exports.create= Joi.object().keys({
    Ticket_id:Joi.number().required(),
    Customer_name:Joi.string().required(),
    Movie_title:Joi.string().required(),
    Movie_time:Joi.string().required(),
    Ticket_price:Joi.number().required()
});

//Creation date


module.exports.update= Joi.object().keys({
    ticket_id:Joi.number().required(),
    Customer_name:Joi.string().required(),
    Movie_title:Joi.string().required(),
    Movie_time:Joi.string().required(),
    Ticket_price:Joi.number().required()
});


module.exports.delete= Joi.object().keys({
    Ticket_id:Joi.number().required()
});
module.exports.search= Joi.object().keys({
    Ticket_id:Joi.number().required()
});


module.exports.moneycount= Joi.object().keys({
    from_date:Joi.string().required(),
    to_date:Joi.string().required()
});
