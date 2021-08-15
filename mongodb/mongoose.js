const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/File-manager-Api',{useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true,useNewUrlParser:true})