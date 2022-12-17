# Training Dashboard

Backend for this project is very simple, because I've spent more time to learn Redux Toolkit on the frontend. Maybe some day I'll remake the backend 🥲

## Backend

### Server setup

You need installed MongoDB locally, because backend uses `mongodb://0.0.0.0:27017/dashboard`. Or just change it to your URL in the `/server/.env` file. Just look through this file and you will understand what's needed.

### Running

`npm run dev || yarn dev` - runs the project via nodemon <br>
`npm run start` - simple project running (with no reload on save)

## Frontend

### Client setup

In `/client/.env.local` you have `REACT_APP_BASE_URL` variable. Change it to address, on which your server is running (e.g http://localhost:5001/)

### Running

`npm run start` - simple React project running
