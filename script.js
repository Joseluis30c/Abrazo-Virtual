function Envio(){
    document.getElementById("loading-msg").innerText = "Completo!";
}

setTimeout(Envio,5200)

setTimeout(function(){
    document.getElementById("msg").innerText = "Recibiste un abrazo de oso by: Jose Luis";
},6000)