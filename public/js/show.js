if(document.getElementById('dt').data.split(';')[0].split('/')[1]=='pdf'){
    document.getElementById('dt').style.width='800px'
    document.getElementById('dt').style.height='700px'
}
else if(document.getElementById('dt').data.split(';')[0].split('/')[1]=='jpg' || document.getElementById('dt').data.split(';')[0].split('/')[1]=='png'){
    document.getElementById('dt').style.width='auto'
    document.getElementById('dt').style.height='auto'
}
function del(){
    var url='/delete/'+window.location.href.split('/show/')[1]
    window.location.assign(url)
}