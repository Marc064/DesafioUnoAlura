var resultado = document.getElementById('res')
function encriptar() {
    var textoalterado =""
    var texto = document.getElementById("ingreso").value
    texto = texto.toLowerCase()
    for(let i = 0; i< texto.length; i++){
        if(texto[i] == "e"){
            textoalterado += "enter"
        }else if(texto[i] ==  "i"){
            textoalterado += "imes"
        }else if(texto[i] == "a"){
            textoalterado += "ai"
        }else if(texto[i] == "o"){
            textoalterado += "ober"
        }else if(texto[i] == "u"){
            textoalterado += "ufat"
        }else{
            textoalterado+=texto[i]
        }
    }
    resultado.innerHTML = textoalterado
}

function desencriptar() {
    var textoalterado =""
    var texto = document.getElementById("ingreso").value
    texto = texto.toLowerCase()
    for(let i = 0; i< texto.length; i++){
        if(texto[i] == "e"){
            textoalterado += "e"
            i += 4
        }else if(texto[i] ==  "i"){
            textoalterado += "i"
            i+=3
        }else if(texto[i] == "a"){
            textoalterado += "a"
            i+=1
        }else if(texto[i] == "o"){
            textoalterado += "o"
            i+=3
        }else if(texto[i] == "u"){
            textoalterado += "u"
            i+=3
        }else{
            textoalterado+=texto[i]
        }
    }
    resultado.innerHTML = textoalterado
}

function copiar(){
    resultado.select()
    document.execCommand("copy");
}

function borrar (){
    var texto = document.getElementById("ingreso")
    texto.innerHTML = ""
}