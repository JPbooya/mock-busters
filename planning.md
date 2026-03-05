# Planning

This is for listing our requirements per Sprint as well as noting things to discuss or change when we meet.

## Sprint 2
Incorporate multiple view pages, EJS, and routing into your application. Save data to an in-memory array. Add navigation to your site.
### Requirements
- ~~Two express routes~~
    - / (home)
    - /billing
- ~~Use EJS views~~ - This was done in Sprint 1
- Display confirmation page on form submission
    - Somewhat complete; confirmation page needs work.
- Save the form data to an in-memory array with timestamps
- ~~Add a route that displays all submissions from the in-memory array ~~
    - I recommend we use "/admin"
    - Data must be formatted in a "clean, readable layout"
- A navigation bar that links to all pages is visible on every page
    - Specifically mentions all *major* pages.
    - Navigation bar requires "partials", we haven't discussed this in class yet.
### Notes
Have any other notes that need to be discussed? Write them below:
...figures.

## Sprint 3

Replace the in-memory array with a real database.

### Requirements
- A database connected to your application (SQL)
Form submissions saved to the database.
    - We'll be storing billing information in the database.
    - For the sake of our sanity, we won't be tracking movies in the database. This will instead be an in-memory array.
- A page that displays database records (table or card layout)
- Database credentials stored in a .env file
- .env must NOT be committed to GitHub
    - Obviously
- All SQL queries must use parameterized queries (no string concatenation)