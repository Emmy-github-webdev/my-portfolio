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
    liveDemo: '#',
    sourceDemo: '#',
  },
];

function createProject() {
  projects.forEach((project) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    const cardImg = document.createElement('img');
    cardImg.className = 'project1';
    cardImg.src = project.featuredImage;
    const cardTextDiv = document.createElement('div');
    cardTextDiv.className = 'card-text';
    const cardTextDivH3 = document.createElement('h3');
    cardTextDivH3.textContent = project.name;
    const cardFrameDiv = document.createElement('div');
    cardFrameDiv.className = 'frame';
    for(let i = 0; i < project.frame.length; i += 1){
      const cardFrameSpan = document.createElement('span');
      cardFrameSpan.textContent = project.frame[i];
      cardFrameDiv.appendChild(cardFrameSpan);
    } 
    const cardTextDivP = document.createElement('p');
    cardTextDivP.textContent = project.description;
    const tagDiv = document.createElement('div');
    tagDiv.className = 'tag';
    for(let j = 0; j < project.technologies.length; j += 1) {
      const tagDivSpan = document.createElement('span');
      tagDivSpan.textContent = project.technologies[j];
      tagDiv.appendChild(tagDivSpan);
    }
    const createProjectBtn = document.createElement('a');
    createProjectBtn.className = 'see-proj-btn';
    createProjectBtn.href = '#';
    createProjectBtn.textContent = 'See Project';

    createProjectBtn.addEventListener('click', () => {
      const modalCardDiv = document.createElement('div');
      modalCardDiv.className = 'modal-card';
      const modalCardContentdiv = document.createElement('div');
      modalCardContentdiv.className = 'modal-card-content';
      const modalCardContentdivSpan = document.createElement('span');
      modalCardContentdivSpan.className = 'close';
      modalCardContentdivSpan.textContent = '&times;';
      const modalCardContentdivh3 = document.createElement('h3');
      modalCardContentdivh3.textContent = project.name;
      modalCardContentdiv.appendChild(modalCardContentdivh3); 
      const cardFrameDiv = document.createElement('div');
      cardFrameDiv.className = 'card-frame';
      for(let k = 0; k < project.frame.length; k += 1){
        const FrameDivSpan = document.createElement('span');
        FrameDivSpan.textContent = project.frame[k];
        cardFrameDiv.appendChild(FrameDivSpan);
      }

      const cardImg = document.createElement('img');
      cardImg.src = project.featuredImage;
      modalCardContentdiv.appendChild(cardImg);
      const modalCardContentdivP = document.createElement('p');
      modalCardContentdivP.textContent = project.description;
      modalCardContentdiv.appendChild(modalCardContentdivP);
      const techdiv = document.createElement('div');
      techdiv.className = 'tech';
      for(let l = 0; l < project.technologies.length; l += 1){
        const techDivSpan = document.createElement('span');
        techDivSpan.textContent = project.technologies[l];
        techdiv.appendChild(techDivSpan);
      }
      const displayProjectBtn = document.createElement('a');
      displayProjectBtn.className = 'see-project';
      const seeProjectLive = document.createElement('button');
      seeProjectLive.textContent = 'See Live';
      seeProjectLive.href = project.liveDemo;
      const seeProjectDemo = document.createElement('button');
      seeProjectDemo.textContent = 'See Source';
      seeProjectDemo.href = project.sourceDemo;
      displayProjectBtn.appendChild(seeProjectLive);
      displayProjectBtn.appendChild(seeProjectDemo);


      modalCardContentdiv.appendChild(displayProjectBtn);
      modalCardContentdiv.appendChild(techdiv);
      modalCardContentdiv.appendChild(cardFrameDiv);
      modalCardContentdiv.appendChild(modalCardContentdivSpan);
      modalCardDiv.appendChild(modalCardContentdiv);
      document.body.appendChild(modalCardDiv);
      
    })




    cardTextDiv.appendChild(createProjectBtn);
    cardTextDiv.appendChild(tagDiv);
    cardTextDiv.appendChild(cardTextDivP);
    cardTextDiv.appendChild(cardFrameDiv);
    cardTextDiv.appendChild(cardTextDivH3);
    cardDiv.appendChild(cardTextDiv)
    cardDiv.appendChild(cardImg);
    workDiv.appendChild(cardDiv);
  })
}

createProject();