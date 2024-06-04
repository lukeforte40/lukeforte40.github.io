function openHomePage(){
    document.getElementById('landingPage').style.display = "none";
    document.getElementById('homeContainer').style.display = "grid";
    var buttonContainerArr = document.getElementsByClassName('buttonContainer');
    var arrayLength = buttonContainerArr.length;
    for (var i=0; i<arrayLength; i++) {
        buttonContainerArr[i].style.display = "grid";
    }
    document.getElementById('nav').style.display = "flex";
};