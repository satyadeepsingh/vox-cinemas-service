# Film Service
## _Films Notification using Websockets and Reactive_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## _Reactive Spring WebFlux API + Real-time React_

This is written as microservice API for managing films using the event sourcing pattern of microservice.

Prerequisites: 
- Java 8
- ReactJS
- ✨Maven
## Features

- Add a film service using POST reactive API
- Get a film by slug
- Get All the films
- Add notifications via web-sockets whenever a new film is added

## Tech

The example uses a number of tech as follows:

- [React.js] - HTML enhanced for web apps!
- [Java 11] - Backend
- [springboot reactive framework] - Reactive framework from spring 
- [npm] - run the frontend build
- [maven] - build tool for backend
- [EXT JS](https://www.sencha.com) - To power React JS
- [HTML and JS] - duh


## Installation

This service requires [Node.js](https://nodejs.org/) v10+  [Java ](https://www.oracle.com/ae/java/technologies/javase-jdk11-downloads.html)v11+, [ReactJS](https://reactjs.org) to run.

Install the dependencies and devDependencies and start the server.

```sh 
git clone https://github.com/satyadeepsingh/vox-cinemas-service.git
git checkout react-app
cd vox-cinemas-service
./mvnw spring-boot:run
```
The data migration will create 3 film entries for us to test.

For frontend environments...

```sh
cd react-app
npm run start
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.

| Plugin | Download link |
| ------ | ------ |
| Postman | [https://www.postman.com/downloads/][PlDb] |


## Testing


Open your favorite Terminal and run these commands.

First Tab:

```sh
curl -X POST \
  http://localhost:8080/films \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 0b38fcbf-c198-eac7-a4df-32cc89156220' \
  -d '{
  "name" : "X-men",
  "description" : "A mutants movie",
  "releaseDate" : "2010-05-07 22:10",
  "rating":5,
  "price":25.2,
  "country":"America",
  "genre":["THRILLER","ACTION","SUPERHERO"],
  "slugLine":"XMENMOVIE",
  "comments" : [
	  	{
	  		"user" : "satya",
	  		"comment" : "A must watch movie"
	  	}
  	] 
}'
```
Open http://localhost:8080/ws.html which is created to get notifications from the websockets. You should see a alert. 

Second Tab: See The movies

```sh
curl -X GET \
  http://localhost:8080/films \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 4a91e476-bdf5-5f74-ef39-af3d47a853eb'
```

(optional) Third: get a movie by slug

```sh
curl -X GET \
  http://localhost:8080/films/FallOfTheRamGarh \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 5211d69d-a809-07f7-a94e-31c21acb6617'
```

## Frontend

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## License

MIT
**Free Software, Hell Yeah!**
## Connect with me
   |linkedin|: [https://linkedin.com/in/satyadeep-singh-1b8b9242]
   |Twitter|: [https://twitter.com/Isatyadeepsingh]
  
