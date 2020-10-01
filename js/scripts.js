document.addEventListener('DOMContentLoaded', () => {

//Global variables

const aboutContainer = document.querySelector('.about');
const aboutButton = document.querySelector('.about-button');
const header = document.querySelector('.hero');
let bigWidthMatch = window.matchMedia('(min-width: 992px)');
let smallWidthMatch = window.matchMedia('(max-width: 991px)');
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

const quote = `${aboutContainer.innerHTML}`;

const oldHero = `${header.innerHTML}`;

const aboutMe = `
<button class="close">X</button>
    <div class="bio bio-type">
        <h2>About Me</h2>
        <p>Self-taught developer, designer, and a lifelong learner.</p>
        <p>Fluent in HTML, CSS, JavaScript, jQuery, SCSS, and GIT.</p>
        <p>As long as my availability and your budget allow:</p>
        <p>no project is too big nor too small.</p>
        <p>I'm excited about the opportunity to make something for you.</p>
        <p>--Alec</p>
    </div>
`;

//function variables

const xOutSmall = (replace) => {
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        header.innerHTML = replace;
    });
};

const xOutBig = (replace) => {
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
        aboutContainer.innerHTML = replace;
    });
};

const addAboutMe = () => {
    aboutButton.addEventListener('click', (e) => {
        aboutContainer.innerHTML = aboutMe;
        xOutBig(quote);
    });
};

const smallScreenAboutMe = () => {
    aboutButton.addEventListener('click', (e) => {
        header.innerHTML = aboutMe;
        xOutSmall(oldHero);
    });
};

//event handlers

if (viewportWidth < 990) {
	smallScreenAboutMe();
}

if (viewportWidth > 991) {
	addAboutMe();
}

window.addEventListener("resize", function() {
    if (bigWidthMatch.matches) {
     addAboutMe();
    } else if (smallWidthMatch.matches) {
        smallScreenAboutMe();
    }
   });





}); //end domcontentloaded event handler
