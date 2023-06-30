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
