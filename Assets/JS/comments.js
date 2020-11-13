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
