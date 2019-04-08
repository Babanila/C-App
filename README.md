# C-APP

### Overview of C-APP

The C-APP can be used as a client application and also as server application.
It can be used as a backend api with `backend-node-api` and can also be as an web-app with `frontend-react-app`.

### Components

The C-APP have two components which are:

- frontend-react-app
- backend-node-api

### Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Usage](#usage)

### Features

- Search github repositories
- Bookmark repositories by ID
- Get all bookmarked repositories

### Requirements

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). MacOS and Linux machines typically have this already installed.

- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. Make sure to get the latest active LTS version.

- Download the C-APP from this [link](https://github.com/Babanila/C-App) or use `git clone git@github.com:Babanila/C-App.git`.

### How to start backend-node-api

- Go to your computer terminal (`command-line interface`).
- Locate the downloaded C-APP folder.
- Change the directory to the C-APP folder(e.g `cd C-APP`).
- Change to the backend-node-api folder(e.g `cd backend-node-api`).
- Run `npm install`.
- To start the server, run `node backendApp.js` on your terminal.

### How to start frontend-react-app

`Note: Start the backend server before starting the frontend-react-app (See above for details)`

- Open another computer terminal (`command-line interface`).
- Locate the downloaded C-APP folder.
- Change the directory to the C-APP folder(e.g `cd C-APP`).
- Change to the frontend-react-app folder(e.g `cd frontend-react-app`).
- Run `npm start`.

### frontend-react-app Usage

To run frontend-react-app, you need

- A web browser (`e.g. Google Chrome, Mozila, Firefox e.t.c`).
- A running server ( e.g start server with `node backendApp.js`).

To use the app , follow the steps below.

### STEPS

- Enter the localhost address using port 3000 (`e.g http://localhost:3000`)
- Click on the drop-down list to select the search endpoint.
- Type your search parameter into the textbox.
- Click submit button.

```
Note:
- To get all the Saved Repositories, there is no need for search parameter, only the endpoint need to be selected.

- Refresh the page when search a particular endpoint with multiple search parameters or re-select the endpoint to avoid low response.

- Kindly follow the sreen instructions (Hint) for usage.
```

### Backend API Usage

To run each endpoint, you need

- A web browser
- A running server ( e.g start server with `node backendApp.js`).

- Search parameter endpoint

  - Enter a localhost address using port 5000 (e.g http://localhost:5000/repository/query)
  - query represent your search parameter.
  - Example: `http://localhost:5000/repository/baba`
  - In the example above `query = baba`

- Get Bookmark by ID endpoint

  - Enter a localhost address using port 5000 (e.g http://localhost:5000/repository_id/id)
  - id represent your search parameter.
  - Example: `http://localhost:5000/repository_id/43004479`
  - In the example above `repository_id = 43004479`

- Get all saved Bookmarks endpoint

  - Enter a localhost address using port 5000 (e.g http://localhost:5000/save-repos)
  - Example: `http://localhost:5000/save-repos`
  - Note: `saved-repos` is the database where all saved bookmark are stored.

### To run unit tests

- From the root folder, run `npm test` or `yarn test`
