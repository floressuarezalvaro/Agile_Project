var searchForm = document.querySelector('#country-form');
var key = 'AIzaSyDgOQIrGftzlp5IuWOtEiSU0Iw4tWvD_NE'

function getParams() {
    // Get the country params out of the URL and convert it to an array
    var searchCountryArr = document.location.search.split('&');
  
    // Get the country
    var Country = searchCountryArr[0].split('=').pop();
    searchYoutube(Country)
    console.log(Country)
}

getParams()

function searchYoutube (Country) {
    var ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${Country}&key=${key}`
    // var ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${key}`
    
    fetch(ytUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
};
