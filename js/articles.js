var xmlhttp = new XMLHttpRequest();
var url = "https://raw.githubusercontent.com/tsbrigato/mic-dev-test/master/data/articles.json";
var url2 = "https://raw.githubusercontent.com/tsbrigato/mic-dev-test/master/data/more-articles.json";

// var urls = [url, url2]

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        showArticles(xmlhttp.responseText);
        articleCount();
        dateCalc();
        loadMore();
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

var listItems = document.getElementsByTagName("li");

function showArticles(response) {
    var arr = JSON.parse(response);
    var i;
    var out = "<ul id='list'>";

    for(i = 0; i < arr.length; i++) {

        out += "<li class='col-12'>" +
        "<div class='col-6 article-title'>" +
        "<img src=" + arr[i].image + ">" +
        "<a href=" + arr[i].url + ">" +
        arr[i].title +
        "</a>" +
        "</div>" +
        "<div class='col-2 author'>" +
        arr[i].profile.first_name + " " + arr[i].profile.last_name +
        "</div>" +
        "<div class='col-1 word-count'>" +
        arr[i].words +
        "</div>" +
        "<div class='col-2 date'>" +
        arr[i].publish_at +
        "</div>"
        "</li>";

    }
    out += "</ul>";
    document.getElementById("articles").innerHTML = out;

    // create an array of the word count
    var wordsList = document.getElementsByClassName('word-count');
    var arr = [];
    for(var i = 0; i < wordsList.length; i++) arr.push(wordsList[i].innerHTML);


    var wordsClick = document.getElementById("words").onclick = function() {
        arr.sort(function(a, b){
          return a-b
        }
      );
      console.log(arr);
    };

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creates a collection of list items from the generated list


// show the total number of articles by counting the list items
function articleCount() {
  var countHolder = document.getElementById("article-count");
  var totalListItems = listItems.length;
  countHolder.innerHTML = "(" + totalListItems + ")";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creates a collection of dates, shows the difference in dates between today and the published date
function dateCalc() {
  var dateList = document.getElementsByClassName("date");
  var d;
  for (d = 0; d < dateList.length; d++) {
        var dateHtml = dateList[d].innerHTML;
        var today = new Date();
        var newPubDate = new Date(dateHtml);
        var timeDiff = Math.abs(today.getTime() - newPubDate.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        dateList[d].innerHTML = diffDays + " days ago";
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// makes a collection of the list items, shows the first ten and adds a class to hide the rest.
// on click removes the hidden class off the next ten

function loadMore() {
    var parent = document.querySelector('ul'),
    items  = parent.querySelectorAll('li'),
    loadMoreBtn =  document.querySelector('#load-more'),
    maxItems = 10,
    hiddenClass = "visually-hidden";


    [].forEach.call(items, function(item, index){
        if (index > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });

    loadMoreBtn.addEventListener('click', function(){
      [].forEach.call(document.querySelectorAll('.' + hiddenClass), function(item, index){
          if (index < maxItems) {
              item.classList.remove(hiddenClass);
          }

          if ( document.querySelectorAll('.' + hiddenClass).length === 0) {
              // loadMoreBtn.style.display = 'none';
              loadMoreBtn.setAttribute("id", "load-next-json");
          }

      });

    });

}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// next json file

// function newJson() {
//   url = "https://raw.githubusercontent.com/tsbrigato/mic-dev-test/master/data/more-articles.json";
// }
//
//   var loadMoreJsonBtn = document.getElementById("load-next-json");
//   loadMoreJsonBtn.addEventListener("click", newJson, false);
