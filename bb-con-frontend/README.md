# BB-Con-backend

# Short introdution:
This is the frontend for BB-Con project. It is built with react and styled with styled-components. 

# Setup and installation
1. Clone this repo with git.
2. Install [Nodejs](https://nodejs.org/en/).
3. In the terminal write "npm install".
4. In the terminal write "npm start" to run the front end. 
5. login with "username: Jin" "password: Jin" or create your own account by click Sign up.
6. Enjoy

# npm package installation
The project has installed the following packages:
1. react-icons
2. react-router-dom
3. styled-components
4. react-redux
5. redux-persist
6. uuidv4
7. cors

# project structure
1. Components folder: for all the components, redux reducer and protected routes.
2. Styles folder: for all the component style, fonts and pictures. (style for App.js is in App.css)
3. _test_ folder: for the tests

# diskussion kring teknisk val 
Jag har valt react för att jag tycker det är mycket flexibelt att manipulera DOM och det finns gott om npm packet som ger olika lösningar. Däremot finns det också begränsningar. Man behöver vara noggrann att välja säkra npm paket samt har koll på när det är dags att uppdatera paketen. Det är också begränsad att skicka data mellan olika komponenter som props om man bygger ett större projekt. Jag har använt redux för detta projekt för att lösa vissa state transport problem. 

Jag har valt mongodb och mongoose for min databas for att jag tycker mongodb är också flexibel att använda. Enligt min tidigare erfarenhet behövde jag ibland justera databasens struktur då kunde jag enkelt andra i det mongoose model.