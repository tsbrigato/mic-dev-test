# Mic Frontend Development Test

## The Task:
Implementation Details
1. The implementation should look visually identical if not better than the screenshot below.
1. Populate the page with data from `articles.json`.  Initially show 10 of the 30 articles that are populated.
1. At the bottom of the table should be a Load More button (not shown below) that will show 10 more rows.  If there are no more articles to show from the bootstrapped data, then make an xhr request to `more-articles.json` and dynamically add them to the table, 10 at a time.
1. Allow the user to sort the table via the `words` and `submitted` columns.
1. If a user leaves the page and then returns, their previous sorting choice should be automatically set.  For this one you can ignore having your solution work in non-modern browsers.

[![End Product](https://bitbucket.org/policymic/dev-test/raw/master/screenshot.png)](https://bitbucket.org/policymic/dev-test/raw/master/screenshot.png)
