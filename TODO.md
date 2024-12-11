# TO DO list! Woo!

### Backend

- [ ] rename all instances of Register to Signup (I gotta decide)
- [x] Authentication stuff
  - [x] new base route in server.js
  - [x] new routes in /router/auth.js, to be renamed authRouter.js
  - [x] new file: /controllers/auth.js
    - [x] take a token from the frontend and pass it into the backend to make sure that a given user exists
- [ ] User leaderboard stuff
  - [ ] Add to user schema
  - [ ] Make a new route to update the user stats
  - [ ] New route to retrieve the leaderboard data

### Frontend

- [x] Authentication logic in App.jsx
  - [x] At the top of the file (code that executes once or is in a useEffect loop thing)
  - [x] In the return statement
- [ ] Styling
  - [ ] Update stuff to use MUI
- [ ] Add one of the games
  - [ ] Tic tac toe or RPS, probably
- [ ]
