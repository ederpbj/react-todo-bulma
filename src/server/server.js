
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Conectando ao mongo
const mongoose = require('mongoose');
const config = require('./config/keys.config');

//Identificar e utilizar as rotas
const TaskRoutes = require('./routes/Task');

const cors = require('cors');

//Conectar ao mongo
mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error on database connection', err));
mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());
app.use(cors());

//Definindo rota api/tasks, para exibir todas as tasks
app.use('/api/tasks', TaskRoutes);

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});