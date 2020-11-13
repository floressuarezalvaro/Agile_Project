var vidzDecription = document.querySelector('#video-desc');
var comSubmit = document.querySelector('#search-form');
var key2 = 'AIzaSyADg2hq0YHi7riYfTy2q2OkDxxxKZru5jY'

function blogzPost (blogz) {
    var blogzUrl = `https://www.googleapis.com/blogger/v3/blogs/662244493697771155/posts?key=${key2}`
    
    fetch(blogzUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // if (!data.items.length) {
            //     console.log('No Youtube Videos Found');
            // } else {
            //     console.log(vidzDecription)
            //     vidzDecription.textContent = 'YOOOOOOOOOOOOOOOOOO';
            //     // for (let i = 0; i < data.items.length; i++) {
            //     //    console.log('Hello Blogz')
            //     // }
            // }
        })
        // .catch(function (error) {
        //     console.error(error);
        // });
};


function handleSearchFormSubmit(e) {
    e.preventDefault();
  
    var comInput = document.querySelector('#video-comment-box').value;
    console.log(comInput)
    if (!comInput) {
      console.error('Post cannot be blank');
      return;
    }
    blogzPost();
}

comSubmit.addEventListener('submit', handleSearchFormSubmit);
// ============================================= Video write to screen code below
// Renders Video to Screen

function getParams() {
    // Get the Video ID out of the URL and convert it to an array
    var address = document.location.search.split('=');
    console.log(address)
  
    // Get the vid ID from the array
    var videoID = address[1];
    console.log(videoID);

    // if the Video ID is not empty or null, carry on
    if(videoID !== null || videoID !== "") { 
    showVids(videoID); // Call showVid
    } else {
        // change paragraph text to error message
        
    }
};

function showVids (str) {
    let videoDisplay = document.createElement('div');
    videoDisplay.setAttribute("class","iamthevideo");
    videoDisplay.setAttribute("id", str);

    // creates empty paragraph element
    var vidEl = document.createElement('p');
    // the Youtube embed with Video ID inserted
    videoDisplay.innerHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${str}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.querySelector("#video-here").append(videoDisplay)
};

getParams()
