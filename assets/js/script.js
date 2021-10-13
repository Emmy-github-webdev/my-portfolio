// Mobile menu overlay
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

const closeBtn = document.getElementById('close-btn');
const IconMenu = document.getElementById('click-image');
const hamItem = document.getElementsByClassName('nav-list');

closeBtn.addEventListener('click', () => {
  closeNav();
});
IconMenu.addEventListener('click', () => {
  openNav();
});

for (let index = 0; index < hamItem.length; index += 1) {
  hamItem[index].addEventListener('click', () => {
    closeNav();
  });
}

// Window popup - create object dynamically

const workDiv = document.querySelector('.work');

const projects = [
  {
    id: 1,
    featuredImage: '/assets/images/mobile/portfolio1.png',
    name: 'Tonic',
    frame: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML', 'CSS', 'Javascript'
    ],
    year: 2015,
    category: 'Canopy',
    liveDemo: '#',
    sourceDemo: '#',
  },
  
  {
    id: 2,
    featuredImage: '/assets/images/mobile/portfolio2.svg',
    name: 'Multi-Post Stories',
    frame: [
      'CANOPY', 'Back End Dev', '2015'],
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      technologies: [
      'HTML', 'CSS', 'Javascript'
    ],
    year: 2015,
    category: 'Canopy',
    liveDemo: '#',
    sourceDemo: '#',
  },

  {
    id: 3,
    featuredImage: '/assets/images/mobile/portfolio3.svg',
    name: 'Tonic',
    frame: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML', 'CSS', 'Javascript'
    ],
    year: 2015,
    category: 'Canopy',
    liveDemo: '#',
    sourceDemo: '#',
  },

  {
    id: 4,
    featuredImage: '/assets/images/mobile/portfolio4.svg',
    name: 'Multi-Post Stories',
    frame: [
      'CANOPY', 'Back End Dev', '2015',
    ],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: [
      'HTML', 'CSS', 'Javascript'
    ],
    year: 2015,
    category: 'Canopy',
    liveDemo: '#',
    sourceDemo: '#',
  },
];

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showProjects() {
  projects.forEach((project) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    const cardImage = document.createElement('img');
    cardImage.className = 'project1';
    cardImage.src = project.featuredImage;
    const cardTextDiv = document.createElement('div');
    cardTextDiv.className = 'card-text';
    const cardHeaderDiv = document.createElement('div');
    cardHeaderDiv.className = 'card-header';
    const cardHeaderH3 = document.createElement('h3');
    cardHeaderH3.textContent = project.name;
    const cardHeaderFrameDiv = document.createElement('div');
    cardHeaderFrameDiv.className = 'frame';
    const cardHeaderFrameUl = document.createElement('ul');
    for(let i = 0; i < project.frame.length; i+= 1){
      const cardHeaderFrameUlLi = document.createElement('li');
      cardHeaderFrameUlLi.textContent = project.frame[i];
      cardHeaderFrameUl.appendChild(cardHeaderFrameUlLi);
    }
    const cardHeaderP = document.createElement('p');
    cardHeaderP.textContent = project.description;
    const cardHeaderTag = document.createElement('div');
    cardHeaderTag.className = 'tag';
    const cardHeaderTagUl = document.createElement('ul');
    for(let i = 0; i < project.technologies.length; i+= 1){
      const cardHeaderTagUlLi = document.createElement('li');
      cardHeaderTagUlLi.textContent = project.technologies[i];
      cardHeaderTagUl.appendChild(cardHeaderTagUlLi);
    }
    const projectButtonDiv = document.createElement('div');
    projectButtonDiv.className = 'see-more-detai';
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buton ';
    const buttonDivA = document.createElement('a');
    buttonDivA.className = 'button-btn';
    buttonDivA.href = project.liveDemo;
    buttonDivA.textContent = 'See Project';


    cardHeaderDiv.appendChild(cardHeaderH3);
    cardHeaderDiv.appendChild(cardHeaderFrameDiv);
    cardHeaderFrameDiv.appendChild(cardHeaderFrameUl);
    cardHeaderFrameDiv.appendChild(cardHeaderP);
    cardHeaderFrameDiv.appendChild(cardHeaderTag);
    cardHeaderTag.appendChild(cardHeaderTagUl);
    cardHeaderFrameDiv.appendChild(projectButtonDiv);
    projectButtonDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(buttonDivA);


    cardHeaderDiv.appendChild(cardTextDiv);
    cardDiv.appendChild(cardHeaderDiv);
    cardDiv.appendChild(cardImage);
    workDiv.appendChild(cardDiv);
  });
}

showProjects();
