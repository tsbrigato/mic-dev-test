# Mic Frontend Development Test

## The Task:
Implementation Details

1. The implementation should look visually identical if not better than the screenshot below.
2. Populate the page with data from `articles.json`.  Initially show 10 of the 30 articles that are populated.
3. At the bottom of the table should be a Load More button (not shown below) that will show 10 more rows.  If there are no more articles to show from the bootstrapped data, then make an xhr request to `more-articles.json` and dynamically add them to the table, 10 at a time.
4. Allow the user to sort the table via the `words` and `submitted` columns.
5. If a user leaves the page and then returns, their previous sorting choice should be automatically set.  For this one you can ignore having your solution work in non-modern browsers.

[![End Product](https://bitbucket.org/policymic/dev-test/raw/master/screenshot.png)](https://bitbucket.org/policymic/dev-test/raw/master/screenshot.png)


## Submission:
1. The example should be able to be viewed locally. Two examples have been included. Please start with index.html

## Notes on the Process:
1. Created index.html for basic layout, article.css for basic styling, article.js
2. Created GitHub repository, uploaded 'data' directory containing json files
3. Created xhr request to retrieve the first json document, 'articles.json', populated index.html with data in articles.js as list
4. Did some basic styling so html looks like mockup
5. Got the article count for header, "Unpublished Articles"
6. Converted published dates to calculate difference between today's date and published date. This varies from the mockup due to the nature of the dates, which were from 2013. Displaying difference in minutes or hours returns very long times, so the difference is displayed in days*
7. Created loadMore() function, which adds a visually hidden class to all the list items over the first 10, which removes the hidden class for the next 10 on click
8. 


