

fetch('/data').then((res)=>{
    res.json().then((data)=>{
        var main_div=document.getElementById('obj')
        if(data.length==0){
            window.alert('NO Docs To View')
            window.location.assign('/')
        }
        for(let i=0;i<data.length;i++){
            var nm=data[i].name.split('.')[0]
            var div=document.createElement('div')
            div.setAttribute('id','subdiv')
            div.setAttribute('onmouseover','dec(this)')
            div.setAttribute('onmouseout','undec(this)')
            div.innerHTML=`<h3>Upload-Date: ${data[i].date}</h3><h4 id=${data[i]._id} onclick="nav(this)">${nm}</h4>`
            main_div.appendChild(div)    
        }

})})


function dec(e){
    e.style.boxShadow='2px 4px 2px 0px coral'
    e.style.transition='0.3s'
}
function undec(e){
    e.style.boxShadow='none'
    e.style.transition='none'
}
function nav(e){
    var url=`/show/${e.id}`
    window.location.assign(url)
}

