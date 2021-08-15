const express=require('express')
const app=express()
const fs=require('fs')
const port=process.env.PORT || 3000
const hbs=require('hbs')
const pt=require('path')
const pub=pt.join(__dirname,'../public')
const par=pt.join(__dirname,'../partials')
const mul=require('multer')
require('../mongodb/mongoose')
const file=require('../model/user')
const storage=mul.diskStorage({
    destination:'public/images/',
    filename:function(req,file,cb){
        cb(null,file.fieldname+'-'+Date.now()+pt.extname(file.originalname))
    }
})

const upload=mul({
    storage:storage
}).single('upload')

hbs.registerPartials(par)
app.set('view engine','hbs')
app.use(express.static(pub))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/add',(req,res)=>{
    res.render('index')
})
app.post('/add', (req,res)=>{
      upload(req,res,(err)=>{
        if(err){
            res.send('something went wrong')
        }else{
            const data=fs.readFileSync(req.file.path)
            const encd=data.toString('base64')
            const newfile=new file({name:req.body.name+pt.extname(req.file.filename),file:encd})
            newfile.save().then((data)=>{
            }).catch((e)=>{
                console.log(e)
            })
            res.redirect('/')
        }
    })
})

app.get('/data',async (req,res)=>{
     const data=await file.find({})
     res.json(data)
})

app.get('/show',(req,res)=>{
    res.render('view')
})
app.get('/delete/:id',async (req,res)=>{
    await file.findByIdAndDelete({_id:req.params.id})
    res.redirect('/show')
})

app.listen(port,()=>{
    console.log('litening on port...',port)
})
