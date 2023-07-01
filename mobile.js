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



const popupwindow = document.querySelector('.popup_window');

btn.addEventListener('click', () => {
  popupwindow.style.display = 'block';
  const popheading = document.querySelector('.update_heading');
  popheading.textContent = project.name;

  const modalimage = document.querySelector('.modall-img');
  const imgmodal = document.createElement('img');
  modalimage.appendChild(imgmodal);
  imgmodal.classList.add('modal-img');
  imgmodal.src = 'images/Group 109.png';

  const modalpara = document.querySelector('.modal-p');
  const para = document.createElement('p');
  modalpara.appendChild(para);
  para.textContent = project.description;

  project.technologies.forEach((tech) => {
    const modallang = document.querySelector('.modal-lang ul');
    const langli = document.createElement('li');
    modallang.appendChild(langli);
    const Lia = document.createElement('a');
    langli.appendChild(Lia);
    Lia.textContent = tech.name;
  });
});

const close2 = document.querySelector('.popup-close');
const modallang = document.querySelector('.modal-lang ul');
close2.addEventListener('click', () => {
  popupwindow.style.display = 'none';

  const removeLi = document.querySelector('.modal-lang ul li ');
  if (removeLi !== null) modallang.removeChild(removeLi);

  const modalimage = document.querySelector('.modall-img');
  const removeimg = document.querySelector('.modall-img img');
  if (removeimg !== null) modalimage.removeChild(removeimg);
});

});


const desktoptech = ['HTML/CSS', ' Ruby on Rails', 'JavaScript'];
const project2 = document.querySelector('.project-des-d');
const project22 = document.querySelector('.project-des-d1');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
project2.appendChild(btn1);
project22.appendChild(btn2);
btn1.classList.add('btn-projects');
btn2.classList.add('btn-projects');
btn1.textContent = 'See this project  \u2192';
btn2.textContent = 'See this project  \u2192';

const modalimage = document.querySelector('.modall-img');
const removeimg = document.querySelector('.modall-img img');
if (removeimg !== null) modalimage.removeChild(removeimg);


function popdesktop() {
  const popupwindow = document.querySelector('.popup_window');

  popupwindow.style.display = 'block';
  const popheading = document.querySelector('.update_heading');
  popheading.textContent = 'Project-desktop name goes here';

  const modalimage = document.querySelector('.modall-img');
  const imgmodal = document.createElement('img');
  modalimage.appendChild(imgmodal);
  imgmodal.classList.add('modal-img');
  imgmodal.src = 'images/Group 105.png';

  const modalpara = document.querySelector('.modal-p');
  const para = document.createElement('p');
  modalpara.appendChild(para);
  const para1 = document.createElement('p');
  para.classList.add('para-desk');
  para1.classList.add('para-desk1');
  modalpara.appendChild(para1);
  para.textContent = 'Lorem ipsum dolor sit amet,  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis';
  para1.textContent = 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br>labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi';

  const divdesktop = document.querySelector('.divdestop');
  const smallbtn = document.createElement('button');
  const smallbtn1 = document.createElement('button');
  divdesktop.appendChild(smallbtn);
  divdesktop.appendChild(smallbtn1);
  smallbtn.classList.add('arrow');
  smallbtn1.classList.add('arrow1');
  smallbtn.textContent = ' \u2190 Previous project';
  smallbtn1.textContent = 'Next project  \u2192';

  for (let i = 0; i < desktoptech.length; i += 1) {
    const modallang = document.querySelector('.modal-lang ul');
    const langli = document.createElement('li');
    modallang.appendChild(langli);
    const Lia = document.createElement('a');
    langli.appendChild(Lia);
    Lia.textContent = desktoptech[i];
  }
}



btn1.addEventListener('click', popdesktop);
btn2.addEventListener('click', popdesktop);

const close2 = document.querySelector('.popup-close');
// const modal-lang = document.querySelector('.modal-lang ul');

close2.addEventListener('click', () => {
  const popupwindow = document.querySelector('.popup_window');
  popupwindow.style.display = 'none';

  const modalpara = document.querySelector('.modal-p ');
  const removep = document.querySelector('.para-desk');
  if (removep !== null) modalpara.removeChild(removep);
  const removep1 = document.querySelector('.para-desk1');
  if (removep1 !== null) modalpara.removeChild(removep1);

  const divdesktop = document.querySelector('.divdestop');
  const removearr = document.querySelector('.arrow1');
  if (removearr !== null) {
    divdesktop.removeChild(removearr);
  }
  const removearr1 = document.querySelector('.arrow');
  if (removearr1 !== null) {
    divdesktop.removeChild(removearr1);
  }


});

