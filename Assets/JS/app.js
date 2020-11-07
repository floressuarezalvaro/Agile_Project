console.log("hello world")

//Jacky
























// Franco
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});























// Faith
























//Alvaro 
var searchCountry = document.querySelector('#search-form');
// var key = 'AIzaSyDgOQIrGftzlp5IuWOtEiSU0Iw4tWvD_NE'

function handleSearchFormSubmit(e) {
    e.preventDefault();
  
    var countryInput = document.querySelector('#country-input').value;
    console.log(countryInput)
    if (!countryInput) {
      console.error('You need a search input value!');
      return;
    }
  
    // var queryString = './results-index.html'
    // //add country code, key, and other parameters
    //  location.assign(queryString);
  }

searchCountry.addEventListener('submit', handleSearchFormSubmit);
