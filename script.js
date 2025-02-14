function inputting(a){
    document.getElementById("screenValue").value += a
}

calculate = ()=>{
    let result = eval(document.getElementById("screenValue").value)
    document.getElementById("screenValue").value = result
}

function clr(){
    document.getElementById("screenValue").value = ""
}