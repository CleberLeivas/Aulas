function somar(){
    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;
    var resultSoma = num1 + num2;
    document.getElementById("resultSoma").textContent = resultSoma.toFixed(2);
}

function subtrair(){
    var num3 = document.getElementById(num3).valueAsNumber;
    var num4 = document.getElementById(num4).valueAsNumber;
    var resultSub = num3 - num4;
    document.getElementById("resultSub").textContent = resultSub.toFixed(2);
}

function divisao(){
    var num5 = document.getElementById(num5).valueAsNumber;
    var num6 = document.getElementById(num6).valueAsNumber;
    var resultDiv = num5 / num6;
    document.getElementById("resultDiv").textContent = resultDiv.toFixed(2);
}

function multi(){
    var num7 = document.getElementById(num7).valueAsNumber;
    var num8 = document.getElementById(num8).valueAsNumber;
    var resultMulti = num7 * num8;
    document.getElementById("resultMulti").textContent = resultMulti.toFixed(2);
}

function media(){
    var media1 = document.getElementById(media1).valueAsNumber;
    var media2 = document.getElementById(media2).valueAsNumber;
    var media3 = document.getElementById(media3).valueAsNumber;
    var resultMedia = ((media1 + media2 + media3) / 3);

    var x = document.getElementById("resultMedia");
    var resBoa = document.getElementById("cond")
    var resRuim = document.getElementById("condN")

    if(resultMedia > 7){
        x.style.color = "green"
        resBoa.style.display = "block"
        resBoa.style.color = "green"
        resRuim.style.display = "none"
    } else {
        x.style.color = "red"
        resRuim.style.display = "block"
        resRuim.style.color = "red"
        resBoa.style.display = "none"
    }

    document.getElementById("resultMedia").textContent = resultMedia.toFixed(2);
}

function limpar(){
    window.location.reload();
}