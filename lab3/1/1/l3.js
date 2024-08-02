function clearscreen(){
    var clearsc=document.getElementById('result');
    clearsc.value=" ";
}

function display(value){
    document.getElementById('result').value+=value;
}

function calculate(){
    var p=document.getElementById("result").value;
    console.log(p);
    var q=eval(p);
    console.log(q);
    document.getElementById('result').value=q;
}