const closebtn = document.querySelector('.menu > i:nth-child(2)');
const openbtn = document.querySelector('.open');
const hamburger = document.querySelector('.menu i:nth-child(1)');
const menu1 = document.querySelector('#menulist');
const menu = document.querySelector('.menu-d-list');
const items = document.querySelectorAll('.item > a');
const headline = document.querySelector('.headline-d');
const img = document.querySelector('.headline-img');
const img1 = document.querySelector('.rmimg');
const img2 = document.querySelector('.rmimg1');
const img3 = document.querySelector('.addimg');
const first = document.querySelector('.line');
const navmenu = document.querySelector('#menu-nav ul');
const home = document.querySelector('.headline');

hamburger.addEventListener('click', () => {
  menu1.classList.toggle('menu-d-list');
  navmenu.style.cssText = 'margin-top:5rem; text-align:left; line-height:300%; margin-right:calc(70% + 4.3rem); font-size:20px; height:195px; padding-top:5rem';
  menu.style.listStyle = 'none';
  menu.style.display = 'inline-block';
  first.style.display = 'none';
  closebtn.style.cssText = 'font-weight: 100; ';
  closebtn.style.display = 'block';
  openbtn.style.display = 'none';
  headline.style.display = 'none';
  img1.style.display = 'none';
  img3.style.display = 'block';
  img.style.display = 'none';
  img2.style.display = 'block';
  items.forEach((items) => {
    items.style.cssText = 'color: inherit; text-decoration: none; text-align:center; font-family: Poppins; font-weight: 400';
  });
});

function menuclose() {
  closebtn.style.display = 'none';
  home.style.display = 'block';
  hamburger.style.display = 'block';
  menu.style.display = 'none';
  headline.style.display = 'block';
  img1.style.display = 'block';
  img3.style.display = 'none';
  img.style.display = 'block';
  img2.style.display = 'none';
}

closebtn.addEventListener('click', menuclose);

items.forEach((items) => {
  items.addEventListener('click', menuclose);
});



const projects_dynamic = [
  {
    name: 'Project-1 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      img: 'images/Rectangle 21.png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-2 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

      img: 'images/Rectangle 21 (1).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },

  {
    name: 'Project-3 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',

      img: 'images/Rectangle 21 (2).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-4 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

      img: 'images/Rectangle 21 (3).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-5 name goes here',
    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

      img: 'images/Rectangle 21 (4).png',
    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: 'Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Project-6 name goes here',

    description:
      'Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',

      img: 'images/Rectangle 21 (5).png',

    technologies: [
      {
        name: 'HTML/CSS',
      },

      {
        name: ' Ruby on Rails',
      },

      {
        name: 'JavaScript',
      },
    ],
  },
];



projects_dynamic.forEach((project) => {
  const project_dyn = document.querySelector('#updates');
  const projImg = document.createElement('div');
  const imgdiv = document.createElement('img');
  const projDes = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const uL = document.createElement('ul');
  const btn = document.createElement('button');
  

  projDes.classList.add('project-des');
  projImg.classList.add('project-img');
  imgdiv.classList.add('project-imgd');
  uL.classList.add('dynamic_list');
  projectTitle.classList.add('sub-title');
  btn.classList.add('btn-projects');
  imgdiv.src = project.img;

  projDes.appendChild(projectTitle);
  project_dyn.appendChild(projImg);
  project_dyn.appendChild(projDes);
  projDes.appendChild(uL);
  projDes.appendChild(btn);
  projImg.appendChild(imgdiv);

  projImg.style.cssText = 'background-size: 100% 100%; background-repeat: no-repeat; height: 250px';
  

  projectTitle.textContent = project.name;
  btn.textContent = 'See this project  \u2192';

  project.technologies.forEach((tech) => {
    const tagLi = document.createElement('li');
    uL.appendChild(tagLi);
    tagLi.textContent = tech.name;
  });

});
