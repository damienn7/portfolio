let count = 0;
let h_w = ["H","e","l","l","o"," ","w","o","r","l","d"," ","!"];

function recursive() {
    count++;

    if (count%2 == 0) {
        document.getElementById("cursor_nav").innerText = "ll";
        document.getElementById("cursor_nav").style.color = "";
        document.getElementById("cursor_nav").classList = "text-color-ll";
    }else{
        document.getElementById("cursor_nav").classList = "";
        document.getElementById("cursor_nav").innerText = "_";
        document.getElementById("cursor_nav").style.color = "#f7ece1";
    }

    setTimeout(recursive, 700);
}
let count2 = 0;
function list_character(array = ["H","e","l","l","o"," ","w","o","r","l","d"," ","!"]){

        const element = array[count2];
        const text = document.getElementById("text_display").innerText;
        let inter = text + element;
        document.getElementById("text_display").innerText = inter;
        count2++;
        if (count2 == array.length+1) {
            document.getElementById("text_display").innerText = "";
            count2 = 0;
        }
        setTimeout(list_character,200);
}

list_character();

recursive();

// document.getElementsByClassName("send")[0].addEventListener("click", () => {

document.getElementsByTagName("form")[0].addEventListener("submit",function (event) {
    event.preventDefault();
    
        let body = document.getElementById("content").value;
        let email = document.getElementsById("email").value;
        let subject = document.getElementById("subject").value;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "damiennicolleau7@gmail.com",
            Password: "8F0A875E2871223CED93D716F03F67A21989",
            To: "damien.nicolleau@epitech.eu",
            From: "damiennicolleau7@gmail.com",
            Subject: subject + "["+email+"]",
            Body: body
        }).then(
            message => alert("Votre email a bien été envoyé !")
        );
    
})



window.onload = function(){document.getElementById("ul").style.display = "none";document.getElementById("menu").innerHTML = "menu  <span class='small-pastille' id='pastille-menu' style='font-size:16px;'>5</span>";
let counter = 0;
// console.log("hello ");
document.getElementById("menu").onclick = function (event) {
    // console.log("world");
    if (document.getElementById("menu").innerText != "menu_open") {
        document.getElementById("menu").innerHTML = "menu_open";
        document.getElementById("ul").style.display = "flex";
    }else{
        document.getElementById("menu").innerHTML = "menu <span class='small-pastille' id='pastille-menu' style='font-size:16px;'>5</span>";
        document.getElementById("pastille-menu").style.fontFamily = 'ubisoftsans-bold';
        document.getElementById("ul").style.display = "none";
    }
}
if (counter == 0) {
    let elem = document.getElementById("presentation");
    animation(elem);
    counter++;
}

function animation(elem) {
    
}
}