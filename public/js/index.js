console.log('ready');

$(document).ready(function() {


});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("wrapper").style.marginLeft = "250px";
    document.getElementById("wrapper").style.backgroundColor = "rgb(198, 199, 199)";
    document.getElementById("iconNav").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "2.2em";
    document.getElementById("wrapper").style.marginLeft= "0";
    document.getElementById("wrapper").style.backgroundColor = "#fbede6";
    document.getElementById("iconNav").style.display = "block";
}
