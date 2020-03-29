const express = require ('express'); 
const cors = requie ('cors');
const routes = require ('./routes');

const app = express ();

app.use(cors());
//origin: http://meuapp.com
app.use(express.json());
app.use(routes);

app.listen(3333);