var searchForm = document.querySelector('#country-form');
var ytContent = document.querySelector('#topresults')
var key = 'AIzaSyDgOQIrGftzlp5IuWOtEiSU0Iw4tWvD_NE'

function getParams() {
    // Get the country params out of the URL and convert it to an array
    var searchCountryArr = document.location.search.split('&');
  
    // Get the country
    var Country = searchCountryArr[0].split('=').pop();
    searchYoutube(Country)
}


function searchYoutube (Country) {
    var ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=${Country}&key=${key}`
    
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
    let ytBody = document.createElement('div');
    ytDiv.append(ytBody);

    var vidThumb = document.createElement('p');
    vidThumb.innerHTML = '<img src="' + itemsObj.snippet.thumbnails.default.url + '"><br/>';
    
    var idContent = document.createElement('p');
    idContent.innerHTML = '<strong>ID:</strong> ' + itemsObj.id + '<br/>';

    var snippetContent = document.createElement('p');
    snippetContent.innerHTML = '<strong>Snippet:</strong> ' + itemsObj.snippet.channelTitle + ' // ';

    var vidDuration = document.createElement('p');
    vidDuration.innerHTML = ' ' + itemsObj.contentDetails.duration + '<br/>';

    ytBody.append(vidThumb, idContent, snippetContent, vidDuration)
    ytContent.append(ytDiv)
}

getParams()