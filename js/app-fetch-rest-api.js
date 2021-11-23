const btn            = document.querySelector('#rest-btn');
const postsContainer = document.getElementById("postContainer");

if(btn) {

    btn.addEventListener('click', (event) => {
       
        let restRequest = new XMLHttpRequest();

        restRequest.open('GET', 'http://localhost/wpdev/wp-json/wp/v2/posts');
        restRequest.onload = function() {

            if(restRequest.status >= 200 && restRequest.status < 400) {

                var data = JSON.parse(restRequest.responseText);

                print_to_html(data);
                btn.remove(); // remove button click more to load data !
            
             } else {

                console.log("Connection lost, Check internet connection");
            }

        };
 
        restRequest.onerror = function() { console.log( "Connection error" ); };

        restRequest.send();
    
    });

}

/** 
 * 
 * 
 * 

 with Vanilla JS
 function createHTML(postData) {
   
    var restHTMLString = "";
    for (i = 0 ; i < postData.length; i++ ) {

        restHTMLString += '<h2>' + postData[i].title.rendered + '</h2>';
        restHTMLString += '<P>'  + postData[i].content.rendered + '</p>';
    
    }
   
    postsContainer.innerHTML = restHTMLString;
}

 * 
 * 
 * **/


// With Handlebar JS
function print_to_html(postData) {
   
    var restTemplate     = document.getElementById("posts-template").innerHTML;
    var compiledTemplate = Handlebars.compile(restTemplate);
    var genHTML          = compiledTemplate(postData);

    postsContainer.innerHTML =  genHTML;

}

// check JS if installed 
console.log(" JS External installed ! ");
       
