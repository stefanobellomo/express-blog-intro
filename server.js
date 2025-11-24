const express = require('express')
const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`ciao cane`);
})

app.get('/', (req, res) => {
    res.send('Server del mio blog')
    const posts = [
        {
            titolo: '',
            contenuto: '',
            img: '',
            tags: ['']
        },
        {
            titolo: '',
            contenuto: '',
            img: '',
            tags: ['']
        },
        {
            titolo: '',
            contenuto: '',
            img: '',
            tags: ['']
        },
        {
            titolo: '',
            contenuto: '',
            img: '',
            tags: ['']
        },
        {
            titolo: '',
            contenuto: '',
            img: '',
            tags: ['']
        }
    ]
})

app.get('/bacheca', (req, res) => {

})