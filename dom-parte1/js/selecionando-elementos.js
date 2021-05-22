let links = document.querySelectorAll("a")
let link2 = links[1]


function mensagem(){
    alert("Você clicou no link!")
}
function mudarEstilo(mousemove){
    link2.style.color="red"
    link2.style.fontSize="25px     "
    console.log("Movendo mouse")
}