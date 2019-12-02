const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors({origin: 'http://68.66.207.7:4200'}));
app.use(express.json());

// Routes
app.use('/api/employees', require('./routes/employee.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/personas', require('./routes/persona.routes'));


app.get('*',function(req,res,next){
    res.sendFile(path.resolve('cliente/index.html'))
  });

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});