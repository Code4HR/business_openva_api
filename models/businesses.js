var Joi = require('joi');

module.exports = Joi.object().keys({
    id: Joi.string(),
    name: Joi.string(),
    street_1: Joi.string(),
    street_2: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    zip: Joi.string(),
    //coordinates: Joi.array().includes(Joi.number(), Joi.number()).min(2).max(2),
    dist: Joi.number(),
    address_date: Joi.date(),
    agent_name: Joi.string(),
    agent_street_1: Joi.string(),
    agent_street_2: Joi.string(),
    agent_city: Joi.string(),
    agent_state: Joi.string(),
    agent_zip: Joi.string(),
    agent_court_locality: Joi.string(),
    agent_date: Joi.date(),
    agent_status: Joi.string(),
    expiration_date: Joi.date(),
    incorporation_date: Joi.date(),
    industry: Joi.string(),
    state_formed: Joi.string(),
    status: Joi.string(),
    status_date: Joi.date(),
    domestic: Joi.string(),
    foreign: Joi.string(),
    merged: Joi.string(),
    number_shares: Joi.number(),
    total_shares: Joi.number(),
    stock_ind: Joi.string(),
    start: Joi.number(),
    limit: Joi.number()
});
    //.with('coordinates', 'dist');
