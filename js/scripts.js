document.addEventListener('DOMContentLoaded', () => {

//Global variables

const aboutContainer = document.querySelector('.about');                            /* grabs the about container to use in events */
const aboutButton = document.querySelector('.about-button');                        /* grabs the about button for events  */
const header = document.querySelector('.hero');                                     /* grabs the header element to use in events later */
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;      /*  grabs the current viewport width on load  */

const quote = `${aboutContainer.innerHTML}`;                                        /* grabs the walph emerson quote */

// this is the about me info that I'm going to post into the page when the user hits the about me button
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

const xOutSmall = () => {                                            /* function to close the about me info for the small screen sizes and replace it with the hero/header elements that were there */
    const closeButton = document.querySelector('.close');           /* grabbing the close button to attach an event listener to */
    closeButton.addEventListener('click', function() {
        const heroContainer = document.querySelector('.hero-container');         /* grabbing the container that the current hero information is in storing it in a variable */
        heroContainer.classList.remove('hidden');                               /* removing the hidden class from the hero container that was put on in the smallScreenAboutMe function  */
        const smallAbout = document.querySelector('.about');                    /* grabbing the generated about me info and storing it in a variable */
        smallAbout.classList.add('hidden');                                     /* applying the hidden class to it as to hide it from the page and return the page to it's normal loaded state */
    });
};

const xOutBig = (replace) => {                                      /* function to close the about me info for the big screen sizes and replace it with the quote that were there previously */
    const closeButton = document.querySelector('.close');           /* grabbing the close button to attach an event listener to */
    closeButton.addEventListener('click', function() {
        let container = document.querySelector('.bio');             /* creating a variable that stores the about me info  */
        aboutContainer.removeChild(container);                      /*  deleting that content from the dom  */
        const roadMap = document.createElement('div');              /* creating a new div to hold the quote that was originally there before the event  */
        roadMap.className = 'bio';                                   /* adding the relevent styles  */
        roadMap.innerHTML = replace;                                 /* passes the argument that will be the original quote back into that div container  */
        aboutContainer.appendChild(roadMap);                         /* putting it back in the dom  */
    });
};

const addAboutMe = () => {                                  /* function to remove the quote from the page and replace it with my about me write up */
    aboutButton.addEventListener('click', () => {
        let current = document.querySelector('.bio');       /* storing the quote container in a variable  */
        current.remove();                                   /* removing it from the dom  */
        const aboutMe = document.createElement('div');      /* creating a new div element and storing it in a variable  */
        aboutMe.className = 'bio bio-type';                  /*  applying the desired styling classes to the div  */
        aboutMe.innerHTML = aboutMeContent;                 /* injecting the div with the variable that holds my about me template literal  */
        aboutContainer.appendChild(aboutMe);                 /* putting that div into the about me container  */
        xOutBig(quote);                                     /* added function from above to give close out performance and return the about me info to the emerson quote  */
    });
};

const smallScreenAboutMe = () => {                                              /* function for small screen to hide the header hero element from the page and show my about me write up */
    aboutButton.addEventListener('click', () => {
        const navBar = document.querySelector('.nav-bar');                      /* storing the button nav in a variable  */
        const heroContainer = document.querySelector('.hero-container');        /* storing the hero container in a variable  */
        heroContainer.classList.add('hidden');                                  /* adding the class to hide that container from the page */
        const currentAbout = document.querySelector('.about');                  /* storing the current about me container that's hidden for small screens in a variable */
        currentAbout.remove();                                                  /* removing it from the dom  */
        const smallAbout = document.createElement('div');                       /* creating a new div to hold my about me write up div */
        smallAbout.className = 'about';                                         /* adding styles to that new div  */
        const smallAboutContent = document.createElement('div');                /* creating a new div that actually will contain the about me  */
        smallAboutContent.className = 'bio';                                    /* adding styles to that div */
        smallAboutContent.innerHTML = aboutMeContent;                           /* injecting that div with the template literal  */
        smallAbout.appendChild(smallAboutContent);                              /* putting in in the previous div container */
        header.insertBefore(smallAbout, navBar);                                /* inserting it in the dom before the the buttons nav  */
        xOutSmall();                                                            /* added function to remove that generated content and replace with the original content */
    });
};

//event handlers

if (viewportWidth < 1049) {             /* if the screen is tablet size or smaller on load use the smallScreenAboutMe function  */
	smallScreenAboutMe();
}

if (viewportWidth > 1049) {             /* if the screen is larger than tablet use the regular addAboutMe function  */
    addAboutMe();
}

/* this was kind of a cop out to ensure that the proper function for the proper screen size would fire in case the user was resizing the screen a lot and pressing the buttons  */
window.onresize = function(){ location.reload(); };         


}); //end domcontentloaded event handler
