# Mic Frontend Development Test
Tina Sbrigato (tsbrigato@verizon.net)

## The Task:
Implementation Details

1. The implementation should look visually identical if not better than the screenshot below.
2. Populate the page with data from `articles.json`.  Initially show 10 of the 30 articles that are populated.
3. At the bottom of the table should be a Load More button (not shown below) that will show 10 more rows.  If there are no more articles to show from the bootstrapped data, then make an xhr request to `more-articles.json` and dynamically add them to the table, 10 at a time.
4. Allow the user to sort the table via the `words` and `submitted` columns.
5. If a user leaves the page and then returns, their previous sorting choice should be automatically set.  For this one you can ignore having your solution work in non-modern browsers.

[![End Product](https://bitbucket.org/policymic/dev-test/raw/master/screenshot.png)](https://bitbucket.org/policymic/dev-test/raw/master/screenshot.png)


## Submission #1:
1. The example can be viewed locally, and only contains html, css and js files. No jquery has been used in these examples :(
2. Two examples have been included. Please start with index.html

## Notes on the Process:
1. Created index.html for basic layout, article.css for basic styling, article.js
2. Created GitHub repository, uploaded 'data' directory containing json files
3. Created xhr request to retrieve the first json document, 'articles.json' from the raw GitHub file, populated index.html with data in articles.js as list
4. Did some basic styling so html looks like mockup
5. Got the article count for header, "Unpublished Articles"
6. Converted published dates to calculate difference between today's date and published date. This varies from the mockup due to the nature of the dates, which were from 2013. Displaying difference in minutes or hours returns very long times, so the difference is displayed in days*
7. Created loadMore() function, which adds a visually hidden class to all the list items over the first 10, which removes the hidden class for the next 10 on click. It seems to make the most sense to fetch all the feeds at once to avoid multiple calls and display the first 10 and then hide the rest. Got stuck a little bit here but got it to work. Once the all the data is returned to the page, the Load More button id is changed to a different id in order to call the 'more-articles.json'
8. Got stuck trying to get the new json document to load while retaining initial document. Moved to the next task - will come back.
9. This example ends here, couldn't get the sorting to work on the list, or the more-articles.json call. In order to complete the sorting, created tableview.html and converted the feed display to tables for easier sorting.

## Submission #2:
1. The example can viewed locally, and only contains html, css and js files. 
2. Please open the tableview.html

This example is using the same techniques to fetch the json data and etc. as the last, with the addition of sorting on the 'words' and 'submitted' columns and written as an html table for easier sorting of rows.

The Words column seems to be doing the sort toggle nicely, however, not sure about the Submitted column. It's sorting but it doesn't seem to be correct. This may be because of the date calculation.

*More on the date calculation: For best UI/UX practice, it is probably preferable to display the actual date after 365 days. Perhaps I could have cheated a little and changed the published by dates to make them work with the mockup, but in reality the published dates do not change and it needs to be dynamic.


## Conclusion:
The sorting requires some more work to make the date sorting work and I ran out of time to complete the #5 item of the task. Both examples have been optimized for mobile (the tableview version less as this version approached deadline).

Thank you for this opportunity and the generous timeline, it was a great challenge for me and my skills. I enjoying creating this for you and especially the content!





