const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const {mongourl} = require('./config/keys')
// const Wish = require('./models/wish')
const Wish = mongoose.model('wishes')
data = ['morning']

mongoose.connect(mongourl,{useNewUrlParser: true, useUnifiedTopology: true})

module.exports= (app)=>{
    app.get('/',(req,res)=>{
				Wish.find({}).then(data=>{
					res.render('home',{data:data})
				})
    })
    
    app.get('/home',(req,res)=>{
        res.sendFile(__dirname +"/index.html")
    })

    app.get('/about',(req,res)=>{
        res.render('about',{data:data})
    })

    app.post('/sent',(req,res)=>{
        // data.push(req.body.item)
        // res.send(data)
				const Item = new Wish({
					wish : req.body.item
				})
				Item.save().then(data=>{
					console.log("success")
					res.send(data)
				}).catch(err=>{
					throw err
				})
				
    })

    app.delete('/remove/:id',(req,res)=>{
        // data = data.map(res=>{
        //     if(res!=req.params.id){
        //         return res
        //     }
        // })
				Wish.findOneAndDelete({
					wish: req.params.id
				}).then(data=>{
					res.send(data)
				})
    })
    
}