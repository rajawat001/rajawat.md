const express = require('express')
const path = require('path')
const hbs = require('hbs')
const forecast= require('./utils/forecast')
const request = require('request')



const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const viewspath = path.join(__dirname,'../templates/views')
const partialspath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)
app.use(express.static(publicDirectoryPath))

app.get('/',(_req,res)=>{
    res.render('index',{
        title:'WEATHER-WEBAPP',
        name:'himmat'
    })
})

app.get('/about',(_req,res)=>{
    res.render('about',{
        about:'about me',
        name :'himmat'
    })
})

app.get('/help',(_req,res)=>{
    res.render('help',{
        title:'help',
        name:'himmat'
    })
})



app.get('/weather',(req,res)=>{

       if(!req.query.address){
        return res.send({ error:'you must provide an address' })
       
       }
        forecast(req.query.address,(response)=>{
                // if(error){
                //     return res.send({error})
                // }
              
             res.render('index1',{
                tempval: response.current.temperature,
                location: req.query.address,
                country: response.location.country,
                name :'himmat singh'
             })
            })
            
         })


app.get('*',(_req,res)=>{
    res.render('404',{
        title:'page not found',
        name:'himmat singh'
    })
})



app.listen(5000,()=>{
    console.log('server is up on port 5000.')
})