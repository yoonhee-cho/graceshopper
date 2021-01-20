## HYKM Bookstore

_Your Hub for Oxford International Primary School Textbooks_

HYKM Bookstore is a mock e-commerce website to sell textbooks. Whether you're a child, a parent, or you just wanna be a kid again, this is your place to buy textbooks! Users can browse textbooks, add books to their cart, update their cart, and navigate to a checkout page.

<img width="1534" alt="Screen Shot 2021-01-19 at 8 37 28 PM" src="https://user-images.githubusercontent.com/42276116/105115201-6588f200-5a96-11eb-93ca-aad5bc1c49b3.png">
<img width="1537" alt="Screen Shot 2021-01-19 at 8 37 47 PM" src="https://user-images.githubusercontent.com/42276116/105115208-66ba1f00-5a96-11eb-8e31-5bc2677ccf57.png">

## Tech Stack

Frontend: React, Redux

Backend: Node.js, Express, Postgres, Sequelize, Passport.js

Testing: Mocha, Chai

## Setup

```
git clone https://github.com/yoonhee-cho/graceshopper.git
//make sure you have psql command line installed createdb graceshopper

npm install
npm run seed
npm run start-dev
```
Google OAuth setup:
- Obtain an OAuth Client Id from Google
- Create a secrets.js file in the root directory and add your Google info:

```
process.env.GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"
process.env.GOOGLE_CLIENT_SECRET = "YOUR_GOOGLE_CLIENT_SECRET"
process.env.GOOGLE_CALLBACK = "YOUR_GOOGLE_CALLBACK"
```

## Created by :

H edra Rowan : https://github.com/hedrarowan
Y oon Hee Cho : https://github.com/yoonhee-cho
K athryn Lam : https://github.com/katwingki
M elody Chen : https://github.com/ChMelody

