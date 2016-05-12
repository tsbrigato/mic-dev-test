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



function showArticles(response) {
    var arr = JSON.parse(response);
    var i;

    var out = "<table>";

    for(i = 0; i < arr.length; i++) {
        out += "<tr><td class='article-title'>" +
        "<img src=" + arr[i].image + ">" +
        "<a href=" + arr[i].url + ">" +
        arr[i].title +
        "</a>" +
        "</td><td class='author'>" +
        arr[i].profile.first_name + " " + arr[i].profile.last_name +
        "</td><td class='word-count'>" +
        arr[i].words +
        "</td><td class='date'>" +
        arr[i].publish_at +
        "</td></tr>";
    }
    out += "</table>";
    document.getElementById("articles").innerHTML = out;


}

var trItems = document.getElementsByTagName("tr");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// creates a collection of list items from the generated list


// show the total number of articles by counting the list items
function articleCount() {
  var countHolder = document.getElementById("article-count");
  var totalListItems = trItems.length - 1;
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
    var parent = document.getElementById("sortable"),
    items  = parent.querySelectorAll('tr'),
    loadMoreBtn =  document.querySelector('#load-more'),
    maxItems = 11,
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
