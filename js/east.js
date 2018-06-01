function openNav(){
    this.style.visibility = "hidden";
    document.querySelector('.mobile-menu').style.display = "flex";
    document.querySelector('.mobile-menu').style.width = "100%";
}

function closeNav(){
    document.querySelector('.toggle-menu').style.visibility = "visible";
    document.querySelector('.mobile-menu').style.width = "0";
}

document.querySelector('.toggle-menu').addEventListener('click', openNav);
document.querySelector('.close-nav').addEventListener('click', closeNav);