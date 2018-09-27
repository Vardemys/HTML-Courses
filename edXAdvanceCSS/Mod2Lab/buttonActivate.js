

    window.onload =function(){

    var refButton = document.getElementById( "burgerBtn");
    refButton.onclick = function() {
        openMenu();
    }
    }





function openMenu(){

var myMenu = document.getElementById("myMenu");
console.log(myMenu.style.display);
console.log("OK");
if(myMenu.style.display == "block"){
    myMenu.style.display = "none";
}else{
    myMenu.style.display = "block";
}


/*menu.classList.add("nav-visible");
menu.innerHTML("TEST");*/
//alert("works");
}