inputs = [];

function getPara1(){
    for (var a = 1; a <= 6; a++){
        inputs.push(document.getElementById("para1_text" + a).value);
        inputs.join(". ")
        document.getElementById("showParagraph1").innerHTML = inputs.join(". ")
    }
}
function getPara2(){
    for (var h = 1; h <= 6; h++){
        inputs.push(document.getElementById("para2_text" + h).value);
        inputs.join(". ")
        document.getElementById("showParagraph2").innerHTML = inputs.join(". ")
    }
}