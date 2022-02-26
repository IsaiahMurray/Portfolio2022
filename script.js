const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

//Toggle nav menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkAction));


//Accordian Skills
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

const toggleSkills = (element, id) => {
  let itemClass = element.parentNode.className;
  let el = document.getElementById(id);

  if (itemClass === "skills-content skills-close") {
    el.classList.remove("skills-close");
    el.classList.add("skills-open");
  } else {
    el.classList.remove("skills-open");
    el.classList.add("skills-close");
  }
};


//Qualification Tabs
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

//Skills Percentage
let html = document.getElementById('skills-html')
let span = document.getElementsByClassName('skills-html')
span[0].setAttribute("style", `width: ${html.innerText}`);

let list = document.getElementsByClassName('skills-data');
for(let i = 0; i < list.length; i++){
  let skillPerc = list[i].children[1].children[0];
  let skillNumber = list[i].children[0].children[1];
  
  skillPerc.setAttribute("style", `width: ${skillNumber.innerText}`);
}

//Services Modal
const modalViews = document.querySelectorAll('.services-modal');
const modalBtns = document.querySelectorAll('.services-button');
const modalCloses = document.querySelectorAll('.services-modal-close');

let modal = (modalClick) => {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    modal(i)
  })
})

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((view) => {
      view.classList.remove('active-modal')
    })
  })
})

let swiper = new Swiper(".swiper-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let swiperTwo = new Swiper(".swiper-container-two", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-two-button-next",
    prevEl: ".swiper-two-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-two",
    clickable: true,
  },
});

//Scroll sections active link
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      // document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else{
      // document.querySelector('.nav-menu a[href*=' + sectionId + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);

//Change background header
const scrollHeader = () => {
  const nav = document.getElementById('header');

  if(this.scrollY >= 80){ 
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader);

//Show scroll up
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560){ 
    scrollUp.classList.add('show-scroll')
  } else {
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll', scrollUp);

// Light Dark Theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

//Previous selection
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => {
  return document.body.classList.contains(darkTheme) ? 'dark' : 'light'
}

const getCurrentIcon = () => {
  return themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'
}

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedTheme === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

//toggle theme manually
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
