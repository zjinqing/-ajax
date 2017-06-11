/**
 * Created by Administrator on 2017/6/9.
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const SETTING = require('../setting');
const ContentSchema =new Schema({
    name:{
        type:String
    }
})

const Content =mongoose.model('Content',ContentSchema)
module.exports = Content