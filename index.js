// Smooth scroll to section
function smoothScroll(target, duration) {
    const targetSection = document.querySelector(target);
    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollY = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollY);
        if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      requestAnimationFrame(scrollAnimation);
    }
  }
  
  
  
  // const prevBtn = document.getElementById('prevBtn');
  // const nextBtn = document.getElementById('nextBtn');
  // const projectContainer = document.querySelector('.project-card-container');
  
  let scrollPosition = 0;
  const projectWidth = 320; // Adjust this value to match the width of each project card
  const projectsToShow = 3; // Adjust this value to change the number of projects displayed at a time
  

  



// Calculate the width of a single project card (including margin)
const cardWidth = document.querySelector('.project-card').offsetWidth + 20; // 20px margin

// Initialize the current card index
let currentCardIndex = 0;

// Function to scroll to the next card


// Add click event listeners to the next and previous buttons
// nextButton.addEventListener('click', scrollToNextCard);
// prevButton.addEventListener('click', scrollToPreviousCard);
// Add the blur overlay dynamically using JavaScript
// Add the blur overlay dynamically using JavaScript


 function resume()
{
  window.open("https://drive.google.com/file/d/1xHurBAIPNYXKUSrepB38mbKzYLjL27tT/view?usp=download");
}