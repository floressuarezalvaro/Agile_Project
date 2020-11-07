console.log("hello world")

//Jacky
























// Franco
























// Faith
























//Alvaro 
var key = 'AIzaSyDgOQIrGftzlp5IuWOtEiSU0Iw4tWvD_NE'
//function searchYt(vid) {
    var ytUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${key}`
    fetch(ytUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

//}


//https://developers.google.com/youtube/v3/docs/