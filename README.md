# Musical_Ladder_UX-UI
A note on the file structure:
While this project is written in html for a website, it is meant to be viewed as an app built using an MVC model.
With that being said, the index.html is meant to be used as the main template, using jquery to grab the data from the individual html "model" files and then inputing them into individually Id named divs to be seen as the view when their respective icons are clicked.
Due to this file structure, and the nature of the data generation, I've had to add the js and jquery functions into their respective html files. However, I have also copied those functions into the app.js file to have them all in one place.
I structured everything this way in order to make it easier to break everything apart and keep everything more modular for use in an app building framework.