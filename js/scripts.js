// "listens" for when the window is scrolled on. When a scroll happens, "onScroll" is executed

document.addEventListener('scroll', onScroll)

// When the user scrolls down 20px from the top of the document, show the button
function onScroll() {

  let lastKnownScrollPosition = window.scrollY;

  let button = document.getElementById("go-top-button");

  if ( lastKnownScrollPosition > 20 ) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo(0,0);
}
