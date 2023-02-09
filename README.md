# React Weather App Assessment

## Introduction

This task is designed to evaluate your skills as a React developer. You will be working on a basic weather app, enhancing it with new features and performance optimizations. 

This task is not a test of how long you're willing to invest, so please do not spend more than 90 minutes total. Pull the request, spend 45 minutes on the first task, move on to the second task for 45 minutes, then submit your pull request with what you've come up with. 

Not completing every subtask within the allotted time does not indicate failure. The goal of these tasks is to see how you approach the problem and how you handle performance considerations, not necessarily to see if you can complete everything in the time frame.


## Task 1: Show Details Modal

Steps: 
- Add a button labeled "Details" on each card that, when clicked, will reveal the detailed weather information.
- The detailed weather information should include the following:
        - Humidity
        - Wind speed
        - Visibility
        - Pressure
- When the user clicks the "Details" button on a card, the detailed information should be displayed in a modal.
- Optimize the performance of the app so that the detailed information is only fetched when the user clicks the "Details" button, and the information is then cached for future use. You can use a simple in-memory cache to store the results of the API call.
- To demonstrate performance optimization, the detailed information for each city should only be fetched once, even if the user clicks the "Details" button multiple times.

## Task 2: Add a Search Bar to the Weather App

Steps:
- Add a search bar to the top of the app that allows the user to search for cities by name.
- When the user starts typing in the search bar, a dropdown should appear with suggestions for cities that match what the user has typed so far.
- When the user selects a city from the dropdown, the detailed weather information for that city should be displayed in a modal.
- Add a button labeled "Add to Dashboard" to the modal. When the user clicks this button, the selected city should be added to the dashboard of cards, with the detailed weather information displayed.
- The dashboard of cards should have a button labeled "Remove" on each card. When the user clicks this button, the corresponding card should be removed from the dashboard.
- Implement a maximum limit of 5 cards on the dashboard, so that users can only add up to 5 cities at a time. If a user tries to add a 6th city, they should see an error message indicating that the limit has been reached.
- Implement a rate limiting feature to limit the number of API calls that can be made in a given time period.
- Add lazy loading to the details view so that it is only loaded when the user clicks on a city to view its details, improving the overall performance of the app.

## How to Submit

1. Fork the repository
2. Clone the repository to your local machine
3. Create a branch for task 1 and make your changes 
4. Create a branch for task 2 and your changes
4. Push your changes to your fork
5. Submit a pull request to the original repository
6. You can comment your PR with next steps, blockers, and comments if you would like

Note: Please submit the pull request within the 90 minute time window

Good luck, and we look forward to reviewing your submission!
