var express = require('express');
var router = express.Router();
const Content = require('../model/content')
//链接数据库
const DbSet = require('../model/db');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'AJAX' });
});

router.get('/get',function (req,res,next) {
    res.render('get', {
      title: 'AJAX-GET请求' ,
    });
    res.end('success')
})

router.post('/post',function (req,res,next) {
    DbSet.add(Content,req,res,'POST')
})

router.get('/post',function (req,res,next) {
    res.render('post',{
        title: 'AJAX-POST请求',

    });
})


module.exports = router;
