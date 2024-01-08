"use script"
/* 

Samira Mohamud - Better@Home JS/JQuery File -

1. Insert document.ready() function to execute slideshow after HTML document is loaded.
2. Declare constants that select corresponding DOM elements belonging to slideshow.
3. Set variable 'currentIndex' to 0 which represents the currently displayed slide.
4. Insert click event handlers for the previous & next buttons which increment and decrement from the 'currentIndex' depending on the current slide.
5. Create 'updateSlide' function which will adjust CSS properties to slide either left or right depending on the 'currentIndex' variable.
6. Insert .hover effect on individual slides that sets slides opacity to 0 to reveal a textbox ; once it is not being hovered over anymore, it returns to default state.

*/

// Slideshow / Carousel Effect - First animation/effect

$(document).ready(function() {
    
    const slideshow = $('.slideshow');
    const slides = $('.slideshow-slide');
    const slideWidth = slides.eq(0).outerWidth();
    let currentIndex = 0;

    // Handle next button click
    $('.slideshow-button.next').click(function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        }
        updateSlideshow();
    });

    // Handle previous button click
    $('.slideshow-button.prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateSlideshow();
    });

    // Function to update the slideshow position - DOM Modification
    
    function updateSlideshow() {
        slideshow.css('transform', `translateX(-${currentIndex * slideWidth}px)`);
    }

    // Second animation/effect

    $('.slideshow-slide').hover(function () {

          $(this).find('img').css('opacity', 0.5);
          $(this).find('.slide-text').css('opacity', 1);
        },
        function () {
          $(this).find('img').css('opacity', 1);
          $(this).find('.slide-text').css('opacity', 0);
        }

      );


	});