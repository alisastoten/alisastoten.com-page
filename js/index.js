const faders = document.querySelectorAll('.fade-in');


var mybutton = document.getElementById("ToTopButton");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



/*  */
const appearOptions = {
    threshhold: 1,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) 
{
    entries.forEach(entry => {
        if (!entry.isIntersecting) /* false that entry is intersecting */
        {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, 
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
});