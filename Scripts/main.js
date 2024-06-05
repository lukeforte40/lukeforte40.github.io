// variables
    var currentPage = "about";
    var about = document.getElementById("aboutButtonContainer");
    var resume = document.getElementById("resumeButtonContainer");
    var skills = document.getElementById("skillsButtonContainer");
    var projects = document.getElementById("projectsButtonContainer");
    var aboutContainer = document.querySelectorAll("#aboutButtonContainer .container");
    var resumeContainer = document.querySelectorAll("#resumeButtonContainer .container");
    var skillsContainer = document.querySelectorAll("#skillsButtonContainer .container");
    var projectsContainer = document.querySelectorAll("#projectsButtonContainer .container");
    var allContainers = document.getElementsByClassName("container");
    var allButtonContainers = document.getElementsByClassName("buttonContainer");
    var landingPage = document.getElementById("landingPage");
    var aboutButton = document.getElementById("aboutButton");
    var resumeButton = document.getElementById("resumeButton");
    var skillsButton = document.getElementById("skillsButton");
    var projectsButton = document.getElementById("projectsButton");
// Event Listeners
    landingPage.addEventListener("click", openHomePage);
    about.addEventListener("click", function(){show('about')});
    resume.addEventListener("click", function(){show('resume')});
    skills.addEventListener("click", function(){show('skills')});
    projects.addEventListener("click", function(){show('projects')});
    aboutButton.addEventListener("click", function(){open('about')});
    resumeButton.addEventListener("click", function(){open('resume')});
    skillsButton.addEventListener("click", function(){open('skills')});
    projectsButton.addEventListener("click", function(){open('projects')});
// functions
    function openHomePage(){
        document.getElementById('landingPage').style.display = "none";
        document.getElementById('homeContainer').style.display = "grid";
        var buttonContainerArr = document.getElementsByClassName('buttonContainer');
        var arrayLength = buttonContainerArr.length;
        for (var i=0; i<arrayLength; i++) {
            buttonContainerArr[i].style.display = "grid";
        }
    };
    function show(conatiner){
        if (conatiner != currentPage) {
            // reset conatiners
                var arrayLength = allButtonContainers.length;
                for (var i = 0; i < arrayLength; i++) {
                    allButtonContainers[i].style.top = "1%";
                    // set width and height based on screen size
                    allButtonContainers[i].style.width = "200px";
                    allButtonContainers[i].style.height = "250px";
                    allButtonContainers[i].style.transform = "translateX(-50%)";
                    allButtonContainers[i].style.borderRadius = "20px";
                    allButtonContainers[i].style.boxShadow = "0 20px 30px rgba(255,255,255,0.3) inset";
                    allButtonContainers[i].style.cursor = "pointer";
                    allButtonContainers[i].style.zIndex = "2";
                }
                arrayLength = allContainers.length;
                for (let i = 0; i < arrayLength; i++) {
                    allContainers[i].style.display = "none";            
                }
            // activate conatiner
            switch (conatiner) {
                case 'about':
                    currentPage = 'about';
                    about.style.left = "0";
                    about.style.top = "0";
                    about.style.width = "100%";
                    about.style.height = "100%";
                    about.style.transform = "none";
                    about.style.borderRadius = "0";
                    about.style.boxShadow = "none";
                    about.style.zIndex = "1";
                    about.style.cursor = "default";
                    aboutContainer[0].style.display = "flex";
                    aboutContainer[0].style.cursor = "default";
                    resume.style.left = "25%";
                    skills.style.left = "50%";
                    projects.style.left = "75%";
                    break;
                case 'resume':
                    currentPage = 'resume';
                    resume.style.left = "0";
                    resume.style.top = "0";
                    resume.style.width = "100%";
                    resume.style.height = "100%";
                    resume.style.transform = "none";
                    resume.style.borderRadius = "0";
                    resume.style.boxShadow = "none";
                    resume.style.zIndex = "1";
                    resume.style.cursor = "default";
                    resumeContainer[0].style.display = "flex";
                    resumeContainer[0].style.cursor = "default";
                    about.style.left = "25%";
                    skills.style.left = "50%";
                    projects.style.left = "75%";
                    break;
                case "skills":
                    currentPage = 'skills';
                    skills.style.left = "0";
                    skills.style.top = "0";
                    skills.style.width = "100%";
                    skills.style.height = "100%";
                    skills.style.transform = "none";
                    skills.style.borderRadius = "0";
                    skills.style.boxShadow = "none";
                    skills.style.zIndex = "1";
                    skills.style.cursor = "default";
                    skillsContainer[0].style.display = "flex";
                    skillsContainer[0].style.cursor = "default";
                    about.style.left = "25%";
                    resume.style.left = "50%";
                    projects.style.left = "75%";
                    break;
                case "projects":
                    currentPage = 'projects';
                    projects.style.left = "0";
                    projects.style.top = "0";
                    projects.style.width = "100%";
                    projects.style.height = "100%";
                    projects.style.transform = "none";
                    projects.style.borderRadius = "0";
                    projects.style.boxShadow = "none";
                    projects.style.zIndex = "1";
                    projects.style.cursor = "default";
                    projectsContainer[0].style.display = "flex";
                    projectsContainer[0].style.cursor = "default";
                    about.style.left = "25%";
                    resume.style.left = "50%";
                    skills.style.left = "75%";
                    break;
                default:
                    break;
            }
        }
    };
    function open(conatiner){

    };
