const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
	
]




		// Récupération des éléments
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImages = document.querySelectorAll('.banner-img');
const bannerText = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

// Définition des données
const images = ['./assets/images/slideshow/slide1.jpg', './assets/images/slideshow/slide2.jpg', './assets/images/slideshow/slide3.jpg', './assets/images/slideshow/slide4.jpg'];
const texts = ['Impressions tous formats en boutique et en ligne', 'Tirages haute définition grand format pour vos bureaux et events', 'Grand choix de couleurs de CMJN aux pantones', 'Autocollants avec découpe laser sur mesure'];

let activeIndex = 0;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  // Suppression de la classe "dot_selected" sur tous les éléments
  dots.forEach(dot => dot.classList.remove('dot_selected'));

  // Ajout de la classe "dot_selected" sur le dot correspondant à l'index actif
  dots[activeIndex].classList.add('dot_selected');

  // Mise à jour de l'image et du texte correspondant à l'index actif
  bannerImages.forEach((image, index) => {
    if (index === activeIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });

  bannerText.textContent = texts[activeIndex];
}

// Gestionnaire d'événement pour la flèche droite
arrowRight.addEventListener('click', () => {
  activeIndex = (activeIndex + 1) % images.length; // Passage à l'index suivant (en boucle)
  updateDisplay();
});

// Gestionnaire d'événement pour la flèche gauche
arrowLeft.addEventListener('click', () => {
  activeIndex = (activeIndex - 1 + images.length) % images.length; // Passage à l'index précédent (en boucle)
  updateDisplay();
});

// Initialisation de l'affichage
updateDisplay();
