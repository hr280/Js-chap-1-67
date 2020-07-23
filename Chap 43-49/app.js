function del(){
    //     // var val=document.getElementById("del");
    //     // var res=val.value;
    //     // var res="empty"
    //     // console.log(res);
    //     var check=document.createElement("p");
    
    // console.log(a);
    //var a=document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[8];
    var a=document.getElementById('del')
    // console.log(a.childNodes[1]);
    var b=a.childNodes[1];
    var c=a.childNodes[3];
    var d=a.childNodes[5];
    a.removeChild(b);
    a.removeChild(c);
    a.removeChild(d);
    a.removeChild(a.lastElementChild);
    }