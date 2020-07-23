// function incr(){
//     var counter=0;
//     var a=document.getElementById('data');
//     counter++;
//     a.innerHTML=counter;
//     counter++;
//     a.innerHTML=counter;
// }
var clicks = 0;
function incr() {
    clicks += 1;
    document.getElementById("data").innerHTML = clicks;
}
function decr() {
    clicks -= 1;
    document.getElementById("data").innerHTML = clicks;
}