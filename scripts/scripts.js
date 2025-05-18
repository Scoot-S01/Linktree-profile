const texts = [
  "PyAde",
  "Developer",
  "Coding for fun"
];

const typingElement = document.getElementById("typing-text");
const typingSpeed = 100;
const erasingSpeed = 50;
const nextTextDelay = 2000;

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, nextTextDelay);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

document.getElementById('profil-img').addEventListener('error', function(){
  this.src = 'assets/Gojo.jpeg'
})


