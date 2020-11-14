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
    // Adds class and ID to the div item so click the title / duration / thumbnail all send people to next page
    ytDiv.setAttribute("class","click-me");
    ytDiv.setAttribute("id", itemsObj.id);

    // creates empty paragraph element
    var vidEl = document.createElement('p');
    // puts thumnail, title, and non-parsed duration here
    vidEl.innerHTML = '<img src="' + itemsObj.snippet.thumbnails.high.url + '"><br/>' + itemsObj.snippet.channelTitle + ' // ' + itemsObj.contentDetails.duration + '<br/><br/>';
    
    ytDiv.append(vidEl)
    ytContent.append(ytDiv)

    // Adds event listeners to all elements with the class "clickme", mostly so people can click a video thumbnail and go to the video in question.
    var clickMeStuff = document.querySelectorAll(".click-me")
    clickMeStuff.forEach(item => {
        item.addEventListener("click", clickbait);
    });
};

function clickbait() {
    // Grabs ID
    var videoID = this.getAttribute("id");   // <-- functional
    console.log(videoID);

    // Sends user to the next part
    var queryUrl = './comments-index.html?q=' + videoID;
    location.assign(queryUrl);
};

getParams(); //actually runs the program


