# Scrabble-rouser

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Notable Features](#notable-features)
* [Walkthrough](#walkthrough)
* [Learning Goals](#learning-goals)
* [Reflections](#reflections)
* [Contributors](#contributors)
* [Technologies](#technologies)
* [Additional Resources](#additional-resources)

## Description

 - This was the Mod 3 final project assigned by [Turing School of Software and Design](www.turing.edu). For this project, I had 6 days create a React application for a very specific, niche audience. 

 - Scrabble-rouser is a Scrabble-training app designed for competitive Scrabble players. The app utlizes a random-word API to help players identify and save high-scoring words, and words they aren't familiar with and would like to revisit.


### Deploy Link

http://golookatatree.surge.sh/

### Frontend Repo

https://github.com/kendallha/scrabble-rouser


### Notable features

 - Built using React framework
 - Use of Router to enable user to navigate using back and forward browser controls, and to visit site pages directly using URL paths
 - Frontend tested with Cypress acceptance testing including the use of stubbed fetch data and happy/sad paths
 - Utilized responsive design for mobile, tablet or desktop viewing
 - 100% Lighthouse accessibility score


## Installation
1. Clone down this [repo](https://github.com/kendallha/scrabble-rouser)
2. `cd` into project directory
3. Run `npm i` to install all project dependencies
4. Run `npm start` to begin the server
5. Application should open in default browser window (if not, navigate to http://localhost:3000)


## Walkthrough

### Home Page
The home page of the site provides an overview of the application, and encourages the user to get started.

Desktop

Mobile 

Clicking on 'Show me a word' takes the user to the 'Learn words' page, where they are shown a potential scrabble word, along with its word score. A user can save a word, and choose to see another.

<img src="https://media.giphy.com/media/k945xn7yt5GuXWKEiP/giphy.gif" width="400">

By visiting the 'Saved words' page, a user can see any of the words they have chosen to save, and can delete any they no longer wish to view.

<img src="https://media.giphy.com/media/0WUAcv9NrzB0YEwE0q/giphy.gif" width="400">


All words with a score of 10 or higher are automatically saved to 'Top-scorers', and can be deleted by the user.

<img src="https://media.giphy.com/media/kUqj1vCaLE3dbguOBn/giphy.gif" width="400">

Saved words and top-scorers are saved to local storage, so they are available to view after refresh.

## Learning Goals

- Understand how to create user personas and use those to guide the design of an application
- Demonstrate mastery of the following:
  - React
  - Router
  - Asynchronous JavaScript
  - End to end testing with Cypress

## Reflections

- This project was a lot of fun to build, partially due to the humorous nature of the niche audience. Because it was meant to evaluate skills I have developed over the last 5 weeks, I felt pretty comfortable with the technologies implemented. 

- The biggest blocker I faced was dealing with the API returning acronyms and words with special characters (not Scrabble-legal). I added a few functions to clean out some of the ineligible words before displaying them to help with this issue. I also was frequently rate-limited when requesting words,  so I created a specific error response if the user triggers a 429 response from the API (rate limiting). 

## Author
<table>
    <tr>
      <td><a href="https://github.com/kendallha">Kendall Haworth</td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/25498241?v=4" alt="K. Haworth" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
  <tr>
    <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript" width="100" height="auto" /></td>
    <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
    <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
    <td><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGhE8jNwjlc3w/company-logo_200_200/0/1554836371931?e=2159024400&v=beta&t=tQbdczcJ9C9g1pggtEXpC5CQgaFxCZn_d3CAOyeWWDU" alt="cypress" width="100" height="auto" /></td>
  </tr> 
</table>

## Additional resources
  - This project utilizes [this](http://theonicolaou.github.io/scrabble-tiles/) Bower package to style letters as scrabble tiles. Special thanks to [Theo Nicalaou](https://github.com/theonicolaou) for creating and sharing this!



