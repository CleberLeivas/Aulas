function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector('#profile')
    var btn = document.getElementById("btnStyle")
    var dt = document.getElementById("data")

    var registro = new Date();
    
    dt = formatarData(registro)

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "./Imagens/pic2.avif");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightseagreen";
        btn.style.borderColor = "lightseagreen";
        document.getElementById("colorTxt").style.color = "#ffff"
    }else{ 
        imagem.setAttribute("src", "./Imagens/pic1.jpg");
        document.getElementById("data").textContent = formatarData(registro);
        btn.style.color = "lightpink";
        btn.style.borderColor = "lightpink";
        document.getElementById("colorTxt").style.color = "lightpink"

    }
}

function formatarData(item){

    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    }

    return item.toLocaleString("pt-BR", options)
}