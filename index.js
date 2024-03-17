const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.get("/",(req,res)=>{
    res.render("index.ejs")
});
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.post('/submit', (req, res) => {
    const formData = req.body;
  console.log(formData)
    // Insert form data into the database
    // connection.query('INSERT INTO your_table_name SET ?', formData, (error, results, fields) => {
    //   if (error) {
    //     console.error('Error inserting data:', error);
    //     res.status(500).send('Error inserting data');
    //     return;
    //   }
  
    //   console.log('Data inserted successfully');
    //   res.status(200).send('Data inserted successfully');
    // });
  });
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});