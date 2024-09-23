// Show Menu
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}

const navLinkReponsive = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu')
}

navLinkReponsive.forEach((n) => n.addEventListener('click', linkAction));

// Active
const navLink = document.querySelectorAll('.nav__link');

function activeLink() {
    navLink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navLink.forEach((a) => a.addEventListener('click', activeLink));

// Background Header
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*Mixitup Filter*/
let mixerServices = mixitup('.services__container', {
  selectors: {
      target: '.services__item',
      control: '.services__btn' // Associe les boutons de filtre des compétences
  }
});

let mixerProjects = mixitup('.projects__container', {
  selectors: {
      target: '.project__item',
      control: '.category__btn' // Associe les boutons de filtre des projets
  }
});


/* Active */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

// Contact Form
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // Vérification des champs vides
  if (contactName.value.trim() === '' || contactEmail.value.trim() === '' || message.value.trim() === '') {
    contactMessage.classList.remove('color-light');
    contactMessage.classList.add('color-dark');
    contactMessage.textContent = 'Please fill in all the fields.';
  } else {
    // Envoi de l'email via emailJS
    emailjs.sendForm(
      'service_so3pczh',
      'template_kphah1j',
      '#contact-form',
      'sfWIpkIxvNN-pMcHu'
    )
    .then(() => {
      contactMessage.classList.remove('color-dark');
      contactMessage.classList.add('color-light');
      contactMessage.textContent = 'Message sent successfully ✅';

      // Réinitialiser les champs et le message après 5 secondes
      setTimeout(() => {
        contactMessage.textContent = '';
      }, 5000);

      // Réinitialisation du formulaire
      contactForm.reset();
    })
    .catch((error) => {
      alert('Oops! Something went wrong. Please try again.', error);
    });
  }
};

// Écouteur d'événement pour la soumission du formulaire
contactForm.addEventListener('submit', sendEmail);

document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll('.block');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Ajouter la classe 'visible' uniquement aux nouveaux éléments qui apparaissent
              entry.target.classList.add('visible');
              entry.target.classList.remove('hidden');
          } else {
              // Retirer la classe 'visible' uniquement pour les éléments qui sortent vers le bas
              if (entry.boundingClientRect.top > window.innerHeight) {
                  entry.target.classList.remove('visible');
                  entry.target.classList.add('hidden');
              }
          }
      });
  });

  blocks.forEach(block => {
      observer.observe(block);
  });
});
