# Countries Project Front-End

## About The App
Rest APIs created by the back-end in the countries-be repository in my GitHub profile were used in the project.
- Countries pulled using API.
- It is possible to search by Country ID or Country name. (Search as you type)
- There are 2 options as ListView or GridView.
- The list can be sorted in descending or ascending order according to country phone codes.
- Multiple filtering can be done according to Continent, Currency and PhoneCode properties.
- Clicking on the list elements opens the detail page and displays all the country's information. With the Delete button on this page, the record of the relevant country can be deleted in the database.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine. Install dependencies with npm install and start the application on web this command. 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Technologies
I used 
- HTML
- CSS
- JavaScript
- ReactJS
- Docker.

## Status
Countries Project is still in progress.

## Docker Integration - Running the application in Docker : <br/>
 The Docker containerization platform is a technology used to accelerate the development and deployment of applications. Thanks to Docker, it becomes possible to run and manage applications seamlessly in different environments.<br/>
 It should have Docker. Firstly, we created a Dockerfile. You can find the codes below for this.<br/>
- Pull the base image with Node.js<br/>
FROM node:14-alpine
- Set the working directory<br/>
WORKDIR /app
- Copy package.json and package-lock.json<br/>
COPY package*.json ./
- Install dependencies<br/>
RUN npm install
- Copy the rest of your app's source code<br/>
COPY . .
- Build project<br/>
RUN npm run build
- Expose port on the Docker container<br/>
EXPOSE 3000
- Start the app<br/>
CMD ["npm", "start"]<br/><br/>
I created docker-compose because I will add different containers later.<br/>
The ports for the React project are '3000:3000'.
Both internal and external ports were set to 3000.<br/>
After doing these. It will be enough to say docker-compose up in our application. In this way, our application will be dockerized and a docker image will be created and the image will be raised.

<br/>
You can run the project on the http://localhost:3000 connection after you set the url to request in the CountryContext component in the context directory (I wrote the url of my back-end project in Docker 'http://localhost:4141/countries') and the endpoints. ..<br/>

## Project Screen Shots
List View:<br/>
![listView](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/fd924423-3903-4df6-8dc3-1e5072e20ea5)<br/>
Grid View:<br/>
![gridView](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/291659e4-ea15-47ac-b0af-16e3b8aa7cb6)<br/>
Descending Sorting:<br/>![dscSorting](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/cbd33ff4-bdd5-4967-917d-36046686add3)<br/>
Searching 'TUR' in countries:<br/>![searchTur](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/1b193a1b-8102-4a12-905f-496fb52dd95d)<br/>
Filter country:![image](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/0221bded-3bd6-4e0d-a13d-a969da4ade60)<br/>
Detail Page: ![detailsPage](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/d96f297b-ab08-485d-9b7b-7e223584e025)
<br/>
Delete Confirm Modal: ![confirmDelete](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/d9403b76-bdec-40c6-9e8a-cd9236ac6438)<br/>
Country not found page:<br/>![country_not_found_go_back](https://github.com/humeyrakoseoglu/countries-fe/assets/71442681/1ba7fd72-d6f4-4597-af3b-47d1b065bbc8)

### Dependencies
- React Icons <br/>
npm install react-icons --save<br/>
- react-router-dom <br/>
npm i react-router-dom<br/>
- react-modal <br/>
npm install --save react-modal<br/>

### Packages
- "@testing-library/jest-dom": "^5.16.5",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-icons": "^4.8.0",
- "react-modal": "^3.16.1",
- "react-router-dom": "^6.11.2"
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4"
