const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close nav on link click (mobile fix)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Optional: Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
    navLinks.classList.remove('active');
  });
});

// Typing Animation (No Erase)
const introText = document.getElementById('typing-intro');
const introPhrases = [
    `With a mindset of continuous learning and adaptability,
    I seek to contribute to innovative environments 
    where collaboration and impact go hand in hand.`
  ];
  

let introIndex = 0;
let introChar = 0;

function typeIntro() {
  const phrase = introPhrases[introIndex];
  if (introChar < phrase.length) {
    introText.textContent += phrase.charAt(introChar);
    introChar++;
    setTimeout(typeIntro, 50);
  }
}

typeIntro();

