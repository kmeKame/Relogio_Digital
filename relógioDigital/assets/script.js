const horas = document.getElementById('horas');
const tempo = document.getElementById('tempo');
const minutos = document.getElementById('minutos');

const clock = setInterval( function time () {
    let dateToday = new Date ();
    let hor = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hor < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    

    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent = sec;
})