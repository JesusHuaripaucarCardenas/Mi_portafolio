var texto = "Establecer normas e impulsar regulaciones," +
    " Colaborar con las ONG y el sector público para impulsar el crecimiento sostenible en los países en desarrollo y" +
    " Analizar el impacto de la industria en la vida y el bienestar de las personas"


function cambiar() {
    document.getElementById("continuaciòn").innerHTML = texto;

}
document.getElementById("continuaciòn").onclick = function () {
    cambiar();
}