# Musical_Ladder_UX-UI
A note on the file structure:

~  /Musical_Ladder_UX-UI folder:
In the first folder, where this readme.md is found, the index page is meant as a substitute for a login page. If you want to view all of the files in your browser, this login substitute makes it easier to do so. With that being said, the dev-only folder located in this first folder simply holds the basic assets needed for this faux-login page. It is not needed for the final build.

~  /Musical_Ladder_UX-UI/users:
This folder holds the subfolders for the student, parent, and teacher views, respectively, as well as the assets folder required for all three views.

~  /Musical_Ladder_UX-UI/users/justin-assets/css:
This folder holds all of the stylesheets for each indivual view. The files in each folder are specifically used for the views they're named after, with the excepton of the student stylesheets. The student stylesheets are referenced by all three views. The foundation stylesheets are also found in this folder.

~  /Musical_Ladder_UX-UI/users/justin-assets/js:
This folder contains the vendor folder, which conatins the js necessary for foundations. The app.js file contains all of the javascript used for all of the views, mostly jQuery. However, it is important to note that editing the js in this file will not neccessarily effect the individual views. For student notes, tests, and events, the js that effects them indivually is written inline in their respective files since those files are generated after the user interacts with a button.

Navigating through the main js file is super easy! Look through the table of contents at the top and simply copy the line of the subject of your interest into "find," then go to the next instance.

~  Musical_Ladder_UX-UI/users/parent-views || student-views || teacher-views:
The student-views folder contains all of the html files needed for tests, notes, and events. All three views have their own individual index files, that are the same for the most part. This will not be necessary for the final build. They each also contain one extra files which serves as the view intially loaded to the index page.



While this project is written in html for a website, it is meant to be viewed as an app built using an MVC model.
With that being said, the index.html is meant to be used as the main template, using jquery to grab the data from the individual html "model" files and then inputing them into individually Id named divs to be seen as the view when their respective icons are clicked.
Due to this file structure, and the nature of the data generation, I've had to add the js and jquery functions into their respective html files. However, I have also copied those functions into the app.js file to have them all in one place.
I structured everything this way in order to make it easier to break everything apart and keep everything more modular for use in an app building framework.