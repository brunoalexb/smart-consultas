const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); 
const conn = require('./db/conn')
const clientRoutes = require('./routes/clientRoutes');
const userRoutes = require('./routes/authRoutes');
const app = express();

app.use(cors());

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json());

// Importa rotas de clientes
app.use('/api', userRoutes)
app.use('/api', clientRoutes);

 
 app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'smart-consultasfront', 'src', 'main.jsx'));
  });

// Porta
conn
    .sync({force:true})
    //.sync()
    .then(() =>{
    app.listen(8080)
}).catch((err) => console.log(err))
