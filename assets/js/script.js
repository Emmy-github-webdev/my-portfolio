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
    createProjectBtn.textContent = 'See Project';

    createProjectBtn.addEventListener('click', () => {
      const popUpParentDiv = document.createElement('div');
      popUpParentDiv.className = 'parent-popup';
      const innerPopUpDiv = document.createElement('div');
      innerPopUpDiv.className = 'inner-popup-div';
      const closepopUp = document.createElement('span');
      closepopUp.className = 'close';
      closepopUp.textContent = 'X';
      innerPopUpDiv.appendChild(closepopUp);
      const cardPopuph3 = document.createElement('h3');
      cardPopuph3.textContent = project.name;
      innerPopUpDiv.appendChild(cardPopuph3);
      const cardFrameDiv = document.createElement('div');
      cardFrameDiv.className = 'card-frame';
      for(let k = 0; k < project.frame.length; k += 1){
        const frameSpan = document.createElement('span');
        frameSpan.textContent = project.frame[k];
        cardFrameDiv.appendChild(frameSpan);
      }
      innerPopUpDiv.appendChild(cardFrameDiv);
      const cardImg = document.createElement('img');
      cardImg.src = project.featuredImage;
      innerPopUpDiv.appendChild(cardImg);
      const cardPopupP = document.createElement('p');
      cardPopupP.textContent = project.description;
      innerPopUpDiv.appendChild(cardPopupP);
      const techDiv = document.createElement('div');
      techDiv.className = 'tech';
      for(let l = 0; l < project.technologies.length; l += 1){
        const techpopUpSpan = document.createElement('span');
        techpopUpSpan.textContent = project.technologies[l];
        techDiv.appendChild(techpopUpSpan); 
      }
      innerPopUpDiv.appendChild(techDiv);
      const popUpSeeProjectBtnDiv = document.createElement('div');
      popUpSeeProjectBtnDiv.className = 'see-project';
      const popUpseeProjectBtn = document.createElement('a');
      popUpseeProjectBtn.className = 'popup-see-proj-btn';
      popUpseeProjectBtn.href = project.liveDemo;
      popUpseeProjectBtn.textContent = 'See Live';
      const popUpseeSourceBtn = document.createElement('a');
      popUpseeSourceBtn.className = 'popup-see-source-btn';
      popUpseeSourceBtn.href = project.sourceDemo;
      popUpseeSourceBtn.textContent = 'See Demo'

      popUpSeeProjectBtnDiv.appendChild(popUpseeProjectBtn);
      popUpSeeProjectBtnDiv.appendChild(popUpseeSourceBtn);

      innerPopUpDiv.appendChild(popUpSeeProjectBtnDiv);

      popUpParentDiv.appendChild(innerPopUpDiv);

      document.body.appendChild(popUpParentDiv);

      closepopUp.addEventListener('click', () => {
        popUpParentDiv.style.display = 'none';
      })
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