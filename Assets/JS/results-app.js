var searchForm = document.querySelector('#country-form');
var ytContent = document.querySelector('#topresults')
var key = 'AIzaSyCvHoQNCOCyA7XEf4h8L333aP82U1LV34s'

function getParams() {
    // Get the country params out of the URL and convert it to an array
    var searchCountryArr = document.location.search.split('&');
  
    // Get the country
    var Country = searchCountryArr[0].split('=').pop();
    searchYoutube(Country)
}

function searchYoutube (Country) {
    var ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${Country}&key=${key}`
    // Fetch Youtube Video List
    fetch(ytUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            if (!data.items.length) {
                console.log('No Youtube Videos Found');
            } else {
                console.log(ytContent)
                ytContent.textContent = '';
                for (let i = 0; i < data.items.length; i++) {
                    showVids(data.items[i]);
                }
        }
        })
        // .catch(function (error) {
        //     console.error(error);
        // });
};

function showVids (itemsObj) {
    console.log(itemsObj)
    let ytDiv = document.createElement('div');

    // creates empty paragraph element
    var vidEl = document.createElement('p');
    // puts Thumbnail with metadata, Title, and Duration all in one <p> and <div>
    vidEl.innerHTML = '<img src="' + itemsObj.snippet.thumbnails.default.url + '"class="click-me" id="' + itemsObj.id + '"><br/><strong>Snippet:</strong> ' + itemsObj.snippet.channelTitle + ' // ' + itemsObj.contentDetails.duration + '<br/>';

    ytDiv.append(vidEl)
    ytContent.append(ytDiv)
};

getParams(); //actually runs the program

// Adds event listeners to all elements with the class "clickme" and console logs it (to be pushed to URL later)
document.querySelectorAll(".click-me").forEach(item => {
    item.addEventListener("click", function () {
        var videoID = this.getAttribute("id");   // <-- functional
        console.log(videoID);
    });
});