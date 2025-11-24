const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`ciao cane`);
})

app.get('/', (req, res) => {

})