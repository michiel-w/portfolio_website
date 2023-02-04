let codeModeButton = document.getElementById('button');
let codeText = document.getElementsByClassName('code-text');

let codeMode = function() {
    for (let elem of codeText) {
        elem.style.fontFamily = "VT323";
        elem.style.color = "white"
    }
    document.getElementById("button").style.display = "none"
    document.body.style.backgroundColor = "black"
    document.getElementById("glass-box-header").style.backgroundColor = "black"
    document.getElementById("glass-box-header").style.boxShadow = "none"
    document.getElementById("glass-box-header").style.border = "5px solid white"
    document.getElementById("glass-box-header").style.borderRadius = "0px"
    document.getElementById("glass-box-main").style.backgroundColor = "black" 
    document.getElementById("glass-box-main").style.border = "5px solid white" 
    document.getElementById("glass-box-main").style.borderRadius = "0px" 
    document.getElementById("glass-box-main").style.boxShadow = "none"      
    document.getElementById("footer").style.color = "white"

    document.getElementById("skills-list").style.listStyleType = "square"
    
    document.getElementById("button-neumorphic").style.display = "block"
};

codeModeButton.onclick = codeMode;

let buttonNeumorphic = document.getElementById("button-neumorphic")

let neumorphicMode = function() {
    for (let elem of codeText) {
        elem.style.fontFamily = "";
        elem.style.color = ""
    }

    document.body.style.backgroundColor = ""
    document.getElementById("glass-box-header").style.backgroundColor = ""
    document.getElementById("glass-box-header").style.boxShadow = ""
    document.getElementById("glass-box-header").style.border = ""
    document.getElementById("glass-box-header").style.borderRadius = ""
    document.getElementById("glass-box-main").style.backgroundColor = "" 
    document.getElementById("glass-box-main").style.border = "" 
    document.getElementById("glass-box-main").style.borderRadius = "" 
    document.getElementById("glass-box-main").style.boxShadow = ""      
    document.getElementById("footer").style.color = ""

    document.getElementById("skills-list").style.listStyleType=""

    document.getElementById("button").style.display = ""
    document.getElementById("button-neumorphic").style.display = ""


}

buttonNeumorphic.onclick = neumorphicMode;
