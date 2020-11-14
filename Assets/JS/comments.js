var vidzDecription = document.querySelector('#video-desc');
var comSubmit = document.querySelector('#search-form');
var spanKey = '105dc371-ca01-41da-9f77-edb2596e6683'
var engkey = '887ceb4b-27f8-48dd-b024-eaa31ca87885'

function dictPull (comInput) {
    var dictUrl = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${comInput}?key=105dc371-ca01-41da-9f77-edb2596e6683`
    fetch(dictUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showComm(data)
        })
        .catch(function (error) {
            console.error(error);
        });
};

function handleSearchFormSubmit(e) {
    e.preventDefault();
  
    var comInput = document.querySelector('#translation-input').value;
    if (!comInput) {
      console.error('Post cannot be blank');
      return;
    }
    dictPull(comInput);
}

comSubmit.addEventListener('submit', handleSearchFormSubmit);
// ============================================= Video write to screen code below
// Renders Video to Screen

var description = document.querySelector("#video-desc");
var title = document.querySelector("#video-title");

function getParams() {
    // Get the Video ID out of the URL and convert it to an array
    var address = document.location.search.split('=');
  
    // Get the vid ID from the array
    var videoID = address[1];

    // if the Video ID is not empty or null, carry on
    if(videoID !== null || videoID !== "") { 
    showVids(videoID); // Call showVid
    } else {
        // change Description text to error message if ID's missing or invalid
        description.textContent = "Looks like you got an error, go back to the homepage.";
    }
};

function showVids (str) {
    let videoDisplay = document.createElement('div');
    videoDisplay.setAttribute("class","iamthevideo");
    videoDisplay.setAttribute("id", str);

    // the Youtube embed with Video ID inserted
    videoDisplay.innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${str}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    // Puts this div with Iframe video embed inside the VIDEO-HERE element in HTML. Works if Video here's Div, P, Span, or Video
    document.querySelector("#video-here").append(videoDisplay)
};


function showComm (dictObj) {
    console.log(dictObj)
    let dictEl = document.querySelector('#trans-div')

    bodyDictEl = document.createElement('p');
    bodyDictEl.textContent = dictObj[0].shortdef[0];

    console.log(bodyDictEl)
    dictEl.append(bodyDictEl)
};

getParams();


