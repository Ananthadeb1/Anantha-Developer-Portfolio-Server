const express = require('express')
const app = express()
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const projects = require('./Data/data.json')
app.get('/',(req,res)=>{
    res.send('project is running');
})
app.get('/projects',  async(req,res) => { 
    const result = await projects;
    res.send(result);
})
app.get('/project/:id', async (req, res) => {
    const id = req.params.id;
    const project = await projects.find(p => p.id == id);
    res.send(project);
});
app.listen(port,()=>{
    console.log(`projects app listen on port:${port}`)
})