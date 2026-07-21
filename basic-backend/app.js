require("dotenv").config({ quiet: true });

const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello Urvil")
})

const githubData = {
  "login": "DarshanAjudiya7",
  "id": 185569366,
  "node_id": "U_kgDOCw-QVg",
  "avatar_url": "https://avatars.githubusercontent.com/u/185569366?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DarshanAjudiya7",
  "html_url": "https://github.com/DarshanAjudiya7",
  "followers_url": "https://api.github.com/users/DarshanAjudiya7/followers",
  "following_url": "https://api.github.com/users/DarshanAjudiya7/following{/other_user}",
  "gists_url": "https://api.github.com/users/DarshanAjudiya7/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DarshanAjudiya7/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DarshanAjudiya7/subscriptions",
  "organizations_url": "https://api.github.com/users/DarshanAjudiya7/orgs",
  "repos_url": "https://api.github.com/users/DarshanAjudiya7/repos",
  "events_url": "https://api.github.com/users/DarshanAjudiya7/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DarshanAjudiya7/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Darshan Ajudiya",
  "company": null,
  "blog": "https://porfolio-mu-orpin.vercel.app/",
  "location": "Rajkot , Gujarat , India.",
  "email": null,
  "hireable": null,
  "bio": "I am student, currently pursuing degree in computer engineering at BVM. 🎓🎓",
  "twitter_username": "AjudiyaDarshan7",
  "public_repos": 70,
  "public_gists": 0,
  "followers": 20,
  "following": 29,
  "created_at": "2024-10-19T01:34:46Z",
  "updated_at": "2026-07-12T03:14:20Z"
}

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/chai', (req, res) => {
    res.send("servechai")
})

app.get('/login', (req, res) => {
    res.send(`<h1>You are successfully logged in...</h1>`)
})

app.get('/urvil', (req, res) => {
    res.send(`<h1>Dear Urvil, how are you??</h1>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})