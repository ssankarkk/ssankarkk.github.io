/* 1. Grab the input */


document.querySelector(".js-go").addEventListener('click',function(){
    var  input = document.querySelector("input").value;
    searchResults(input);
   // pushToDom(input);
});

document.querySelector(".js-userinput").addEventListener('keyup',function(){
    var  input = document.querySelector("input").value;

    //if the key ENTER is pressed...
    if(e.which === 13){
        searchResults(input);
    // pushToDom(input);
    }

});
/* 2. do the data stuff with API */
function searchResults(searchWord){
    var url = "https://api.giphy.com/v1/gifs/search?api_key=MoMcjF7hJtPXiJBSdf6cJ8kezTWMPyAd&q=" + searchWord;
    var GiphyAJAXCall = new XMLHttpsRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener('load', function(e){
    
    var data = e.target.response;
    pushToDom(data);
    });
}


/* 3. Show me the GIF */
function pushToDom(input){
    var response = JSON.parse(input);
    var imageUrls = response.data;
    imageUrls.forEach(function(image) {

    var src = (image.images.fixed_height.url);
    console.log(src);

    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\""+ src + "\"class=\"container-image\">";

    });
    
    
}
