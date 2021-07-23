//index.js
import express from 'express';
const graphqlHTTP = require('express-graphql').graphqlHTTP;
import mongoose from 'mongoose';
import schema from './schema';
const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Graph Ql');
app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to GraphQL'
    })
});

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    }),
  );
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});