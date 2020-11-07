console.log("hello world")

//Jacky
























// Franco
























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
