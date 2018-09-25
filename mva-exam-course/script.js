
function doSomething(){
    var name = prompt("Whats your name?");
    alert(name + ",cool!");
    document.getElementById("DOMdemo").innerHTML+=Date();

}
//
//

function doThis(){
    document.getElementById("editthis").innerHTML="Somethign else";
}

function show_image(src, width, height, alt){
    var img = document.createElement("img");
    img.src = src;
    img.width=width;
    //img.height= height;
    img.alt = alt;
    img.id="addedImg";
//add it to the body tag
    document.body.appendChild(img);
}

