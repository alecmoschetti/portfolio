document.addEventListener('DOMContentLoaded', () => {

//Global variables

const aboutContainer = document.querySelector('.about');
const aboutButton = document.querySelector('.about-button');
const header = document.querySelector('.hero');
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const quote = `${aboutContainer.innerHTML}`;

const aboutMeContent = `
        <div class="close-button-container">
            <button class="close">X</button>
        </div>
        <div>
            <h2>About Me</h2>
        </div>
        <p>Self-taught developer, designer, and a lifelong learner.</p>
        <p>Fluent in HTML, CSS, JavaScript, jQuery, SCSS, and GIT.</p>
        <p>As long as my availability and your budget allow:</p>
        <p>no project is too big nor too small.</p>
        <p>I'm excited about the opportunity to make something for you.</p>
        <p>--Alec</p>
`;

//function variables

const xOutSmall = () => {
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        const heroContainer = document.querySelector('.hero-container');
        heroContainer.classList.remove('hidden');
        const smallAbout = document.querySelector('.about');
        smallAbout.classList.add('hidden');
    });
};

const xOutBig = (replace) => {
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        let container = document.querySelector('.bio');
        aboutContainer.removeChild(container);
        const roadMap = document.createElement('div');
        roadMap.className = 'bio';
        roadMap.innerHTML = replace;
        aboutContainer.appendChild(roadMap);
    });
};

const addAboutMe = () => {
    aboutButton.addEventListener('click', () => {
        let current = document.querySelector('.bio');
        current.remove();
        const aboutMe = document.createElement('div');
        aboutMe.className = 'bio bio-type';
        aboutMe.innerHTML = aboutMeContent;
        aboutContainer.appendChild(aboutMe);
        xOutBig(quote);
    });
};

const smallScreenAboutMe = () => {
    aboutButton.addEventListener('click', () => {
        const navBar = document.querySelector('.nav-bar');
        const heroContainer = document.querySelector('.hero-container');
        heroContainer.classList.add('hidden');
        const currentAbout = document.querySelector('.about');
        currentAbout.remove();
        const smallAbout = document.createElement('div');
        smallAbout.className = 'about';
        const smallAboutContent = document.createElement('div');
        smallAboutContent.className = 'bio';
        smallAboutContent.innerHTML = aboutMeContent;
        smallAbout.appendChild(smallAboutContent);
        header.insertBefore(smallAbout, navBar);
        xOutSmall();
    });
};

//event handlers

if (viewportWidth < 990) {
	smallScreenAboutMe();
}

if (viewportWidth > 991) {
    addAboutMe();
}

window.onresize = function(){ location.reload(); };


}); //end domcontentloaded event handler
