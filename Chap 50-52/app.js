function submit(){
    var a=document.getElementById('one');
    var b=document.getElementById('two');
    var result="The data you given is= "+a.value+" "+b.value;
    var p=document.getElementById('post');
    p.innerHTML=result;
}