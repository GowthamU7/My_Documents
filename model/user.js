const mg=require('mongoose')

const file_schema=new mg.Schema({
    name:{
        type:String
    },
    file:{
        type:String
    },
    date:{
        type:String
    }
})


const file=mg.model('file',file_schema)

module.exports=file