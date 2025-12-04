function showText(button, message) {
    // Check if text already exists for this button
    if (button.querySelector('.bubble-text')) return;

    const bubbleText = document.createElement('span');
    bubbleText.className = 'bubble-text';
    bubbleText.innerText = message;

    // Append the text inside the button so it stays with it
    button.appendChild(bubbleText);
}

   function toggleMenu() {
            const navItems = document.querySelector('.nav-items');
            const hamburgerIcon = document.querySelector('.hamburger i');
            
            navItems.classList.toggle('active');
            
            // Toggle between bars and xmark icons
            if (navItems.classList.contains('active')) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-xmark');
            } else {
                hamburgerIcon.classList.remove('fa-xmark');
                hamburgerIcon.classList.add('fa-bars');
            }
        }
		
		
function showText(button, message) {
  const wrapper = button.parentElement;
  const textSpan = wrapper.querySelector(".bubble-text");

  // Show the text
  textSpan.textContent = message;
  textSpan.style.display = "block";

  // Stop rotation
  button.classList.add("stop-rotate");
}

function hideText(button) {
  const wrapper = button.parentElement;
  const textSpan = wrapper.querySelector(".bubble-text");

  // Hide text
  textSpan.style.display = "none";
  textSpan.textContent = "";

  // Resume rotation
  button.classList.remove("stop-rotate");
}

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card__inner");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});