var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height"); 
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "Dark");
    }
    else{
        localStorage.setItem("theme", "Light");
    }


}
// to check weather your page is in light mode

if(localStorage.getItem("theme") == "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

// to check weather your page is in dark mode

else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}

// if your browser do not light or dark mode then it will automatically create a light mode theme  

else{
    localStorage.setItem("theme","light");
}

