// var request = new XMLHttpRequest();

// request.open('GET', 'https://hacker-news.firebaseio.com/v0/topstories.json', true);

// request.onload = function () {
//     var data = JSON.parse(this.response);

//     for(var i = 0; i<10; i++){
        
//         const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`;
//         console.log(storyUrl);
//     }
//   }

  

// request.send();
async function getData() {
    let finalData = [];
    throw new Error('yo');

    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    let data = await response.json();
    for(var i = 0; i<10; i++){
        var index = Math.floor(Math.random()*data.length);
        const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${data[index]}.json`;
        //console.log(storyUrl);
        let storyResponse =  await fetch(storyUrl);
        let storyData = await storyResponse.json();
        finalData.push({
            title: storyData.title,
            url: storyData.url,
            score: storyData.score
        })
    }

    //finalData.push({'title': 'this is the title', 'url': 'https://google.com', score: 450});
    return finalData;
}

// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
    
  
// });
getData().then(data => {
    console.log(data);
    
    var html = document.getElementById('listings').innerHTML;
    console.log(html);
    var storyListHtml = '';
    // <li><a href="www.google.com" class="link"> This is title</a> ( www.google.com ) - 450</li>
    for(var i = 0; i<10; i++) {
        
        const story = data[i];
        storyListHtml += `<li><a href=${story.url}" class="link">${story.title}</a> ( ${story.url} ) - ${story.score}</li>`;
    }

    document.getElementById('listings').innerHTML = storyListHtml;
}).catch(function(err) {
    console.log("error", err);
});