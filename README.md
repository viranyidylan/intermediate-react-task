# React Weather App Assessment

## Introduction

This task is designed to evaluate your skills as a React developer. You will enhance a basic weather app by adding new features and performance optimizations. Please limit your total working time to 90 minutes, with 45 minutes dedicated to each task. This is NOT a test of going the extra mile or investing extra time.

It is important to note that completing every subtask within the time frame is not the ultimate measure of success. The goal of these tasks is to assess your problem-solving skills and approach to performance considerations, rather than just checking if you can finish everything in the given time.

## Task 1: Show Details Modal

Steps: 
1. Add a button labeled "Details" on each card that, when clicked, will reveal the detailed weather information.
2. The detailed weather information should include the following:
    - Humidity
    - Wind speed
    - Visibility
    - Pressure
3. When the user clicks the "Details" button on a card, the detailed information should be displayed in a modal.
4. Optimize the performance of the app so that the detailed information is only fetched when the user clicks the "Details" button, and the information is then cached for future use. You can use a simple in-memory cache to store the results of the API call.
5. To demonstrate performance optimization, the detailed information for each city should only be fetched once, even if the user clicks the "Details" button multiple times.

## Task 2: Add a Search Bar to the Weather App

Steps:
1. Add a search bar to the top of the app that allows the user to search for cities by name.
2. When the user starts typing in the search bar, a dropdown should appear with suggestions for cities that match what the user has typed so far.
3. When the user selects a city from the dropdown, the detailed weather information for that city should be displayed in a modal.
4. Add a button labeled "Add to Dashboard" to the modal. When the user clicks this button, the selected city should be added to the dashboard of cards, with the detailed weather information displayed.
5. The dashboard of cards should have a button labeled "Remove" on each card. When the user clicks this button, the corresponding card should be removed from the dashboard.
6. Implement a maximum limit of 5 cards on the dashboard, so that users can only add up to 5 cities at a time. If a user tries to add a 6th city, they should see an error message indicating that the limit has been reached.
7. Implement a rate limiting feature to limit the number of API calls that can be made in a given time period.

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
