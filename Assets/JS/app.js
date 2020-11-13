

var searchCountry = document.querySelector('#country-form');

function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var countryInput = document.querySelector('#country-input').value;
    console.log(countryInput)
    if (!countryInput) {
      console.error('You need a search input value!');
      return;
    }
  
    var queryUrl = './results-index.html?q=' + countryInput;
    location.assign(queryUrl);
  }

searchCountry.addEventListener('submit', handleSearchFormSubmit);
