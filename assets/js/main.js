function startTime(){
    today=new Date();
    y=today.getFullYear();
    x=today.getMonth() +1;
    d=today.getDate();
    h=today.getHours();
    m=today.getMinutes();
    s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('reloj').innerHTML=d+"/"+x+"/"+y+" "+h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
}
    
function checkTime(i){
    if (i<10) {i="0" + i;}return i;
}

window.onload=function(){
    startTime();
}
