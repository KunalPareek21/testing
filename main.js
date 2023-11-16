// Search Bar Header
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".header_search_icon_customs button.btn");
    const input = document.querySelector(".header_search_icon_customs input");
  
    if (button && input) {
      button.addEventListener("click", function () {
        button.classList.toggle("clicked");
  
        if (button.classList.contains("clicked")) {
          input.classList.add("opened");
          input.classList.remove("closed");
        } else {
          input.classList.remove("opened");
          input.classList.add("closed");
        }
      });
    }
});
// Search Bar Header

  
// Navbar Active Toggle
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar_row_customs li.nav-item a.nav-link");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      links.forEach(otherLink => {
        if (otherLink !== link) {
          otherLink.classList.remove("active");
        }
      });

      link.classList.add("active");
    });
  });
});
// Navbar Active Toggle


// Carousel Articles
function setupCustomCarousel() {
  const customCarousel = document.querySelector('.carousel_article_details');
  
  if (typeof $(customCarousel).owlCarousel === 'function') {
      $(customCarousel).owlCarousel({
          items: 3,
          loop: true,
          dots: true,
          autoplay: true,
          autoplayTimeout: 4000,
          autoHeight: true,
          nav: true,
          margin: 10,
          navText: [
            '<img src="assets/images/Left.svg" alt="Prev">',
            '<img src="assets/images/Right.svg" alt="Next">'
          ],
          responsive: {
            0: {
              items: 1 
            },
            800: {
              items: 2
            },
            900: {
              items: 3
            }
          }
      });
  }
  else {
      setTimeout(setupCustomCarousel, 100);
  }
}

document.addEventListener('DOMContentLoaded', setupCustomCarousel);
// Carousel Articles

