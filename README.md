# City-Explorer

**Author**: Daniel Jackson
**Version**: 1.1.3

## Overview
This application will allow you to enter a city name, and return relevant information (and images) pertaining to the specified city. This uses the Location IQ API to get data and pull it in based on the user's input. 

## Getting Started
You'll need React, React-Bootstrap (if you'd like to us the pre-built components), and GitHub/Netlify to deploy the project.

## Architecture
This application uses React, React Bootstrap (for importing/styling prebuilt components), and axios in order to make API calls.

## Change Log
12-06-2021 9:05pm - Application is rendering data from user input on local server, trying to resolve bug regarding pushing build to test server
12-07-2021 7:15am - Application is now properly displaying on test server, fixed bug regarding an empty code block on Main.js
12-07-2021 10:00am - Application is rendering error modal if the input location is invalid
12-07-2021 4:38pm - Application is able to operate on local host, and GET from server on local host, and render weather data accordingly

## Credit and Collaborations
[background image of site](https://unsplash.com/photos/8Ogfqvw15Rg)
Michael Milsap - helping me get over the 'rendering the map' hump of this project. 
Sara Russert - for being very informative about GET method and implementing the data from the return value. 