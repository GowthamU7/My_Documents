

fetch('http://localhost:3000/data').then((res)=>{
    res.json().then((data)=>{
        var main_div=document.getElementById('obj')
        if(data.length==0){
            window.location.assign('/')
            window.alert('no documents to view')
        }
        for(let i=0;i<data.length;i++){
            var tp=''
            for(let j=data[i].name.length-1;j>-1;j--){
                if(data[i].name[j]!='.'){
                    tp=data[i].name[j]+tp
                }
                else{
                    break
                }
            }
            var div=document.createElement('div')
            div.setAttribute('id','subdiv')
            if(tp=='png' || tp=='jpg' || tp=='jpeg'){
                div.innerHTML=`<h3>${data[i].name}</h3><img src='data:image/png;base64,${data[i].file}'><br><br><a href='/delete/${data[i]._id}'><button>DELETE</button></a><a href='data:image/png;base64,${data[i].file}' download><button>DOWNLOAD</button></a>`
            }
            else if(tp=='pdf'){
                div.innerHTML=`<h3>${data[i].name}</h3><iframe src='data:application/pdf;base64,${data[i].file}'></iframe><br><br><a href='/delete/${data[i]._id}'><button>DELETE</button></a><a href='data:application/pdf;base64,${data[i].file}' download><button>DOWNLOAD</button></a>`
            }
            main_div.appendChild(div)
        }
})})


