## Furniss - Front-end

</br>

This repository contains only the front-end side, back-end can be found [here](https://github.com/juansp92/thesisProjectBackend)

### About Furniss 🛋

</br>
Furniss is a marketplace where registered users can buy and sell upcycled and preloved furniture. </br>
Users can create an account, publish new products to their gallery, check their reviews and ratings, check the most popular items, search, filter and sort products, process payments and access their sales and purchase history. </br>

### Getting started 🚀

</br>

**What you need:**

- Code editor (ex. Visual Studio Code)
- Web browser (ex. Chrome)

#### Back-end

Make sure you have installed NodeJS and Postgres, with Postgres open in your machine's terminal.
To start creating the de database and populate it with mock data run the next commands on your project terminal:

```bash
npm i
npm run createDB_and_mockData
npm start
```

Now the server will run locally [here](http://localhost:3001) (or at port 3001)

If you want to remove the database just run:

```bash
npm run removeDB
```

#### Front-end

To launch the app, open the **client** folder in your code editor, and type the following commands in the project terminal:

```bash
npm i
npm start
```

Now the client will run locally [here](http://localhost:3000) (or at port 3000)

And you are all set! 🎉

### Tech stack 👩‍💻

</br>

HabitUp has been created using:

#### Front-end:

- React
- Redux
- TypeScript

#### Back-end:

- Express
- Node.js
- Jest
- PostgresQL
- Sequelize

### Dependencies 💻

</br>

- [NodeJs](https://nodejs.org/en/) (v10 or above)
- [Postgresql](https://www.postgresql.org/)
- [Stripe](https://stripe.com/en-gb) account
- [Cloudinary](https://cloudinary.com/) account

### Testing 🧪

</br>

This project uses the [Jest](https://jestjs.io/) library for unit test cases, to run the unit tests please do the following:

```bash
npm test
```

To add a unit test simply create a file with the file to be tested followed by `.test` within the `/test` directory. For example:

```bash
./myFile.js -> test/myFile.test.js
```

### Contributors 🍍

</br>
- [Amina Antoniazzi](https://github.com/amantoniazzi)
- [Aneesa Zafri](https://github.com/neesafarza)
- [Juan Ignacio Sánchez Plastic](https://github.com/juan-ignacio-sanchez-plastic)
- [Sara Samain](https://github.com/sarasamain)

</br>

🌳
