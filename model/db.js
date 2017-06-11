// /**
//  * Created by Administrator on 2017/6/9.
//  */
// //
// // const mongoose = require('mongoose');
// // const setting = require('../setting');
// // const url = require('url');
// // mongoose.Promise = global.Promise;
//
// const mongoose = require('mongoose');
// const setting = require('../setting');
// //nodeJS加密模块
// const url = require('url');
// //这句话说明我们使用的promise对象是ES6中原生的promise对象.
// mongoose.Promise = global.Promise;
// mongoose.connect(`mongodb://${setting.host}/${setting.db}`);
//
//
// const DbSet = {
//     add:(obj, req, res, logMsg) => {
//         console.log('++++++++++++',req.body)
//         let newObj = new obj(req.body);
//         console.log(newObj)
//         newObj.save(function (err) {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('Save success');
//             }
//         }).then(result => {
//             res.end(logMsg);
//         }).catch(err => {
//            res.end(err);
//         })
//     },
//
// }
// module.exports = DbSet
const mongoose = require('mongoose');
const setting = require('../setting');
const Content = require('./content');
//这句话说明我们使用的promise对象是ES6中原生的promise对象.
mongoose.Promise = global.Promise;
//连接数据库的
mongoose.connect('mongodb://localhost/zjq');
const DbSet = {
    //新增操作
    add:(obj,req,res,logMsg)=>{
        console.log('+++++++++++',req.body)
        let newObj = new obj(req.body);
        newObj.save().then(result=>{
            res.end(logMsg);
        }).catch(err=>{
            res.end(err);
        })
    },

}

module.exports = DbSet;