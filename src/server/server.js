
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Identificar e utilizar as rotas
const TaskRoutes = require('./routes/Task');
//Definindo rota api/tasks, para exibir todas as tasks
app.use('/api/tasks', TaskRoutes);

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});