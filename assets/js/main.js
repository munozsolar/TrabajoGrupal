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

function confirmacion(){

    var nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let ciudad = document.getElementById("ciudad").value
    let telefono = document.getElementById("telefono").value

    if(nombre.length == 0){
       alert("No pusiste tu nombre")
    }else {
        if(apellido.length == 0){
            alert("No pusiste tu apellido")
        }
        else{
            if(ciudad.length == 0){
                alert("No pusiste tu ciudad")
            }
            else{
                if(telefono.length == 0){
                    alert("No pusiste tu telefono")
                }
                else{
                    alert("Bienvenid@ "+nombre+" "+apellido+" con residencia en "+ciudad+", "+" te llamaremos al telefono: "+telefono);
                }
            }
        }
    }

    
    
}



$(document).ready(function () {
    if($('.productos').length > 0 ){
        $('.productos').DataTable();
    }
} );

function compra(){
    alert("Se agrego a tu carrito de compras!")
}