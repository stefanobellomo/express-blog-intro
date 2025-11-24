const express = require('express')
const app = express()
const PORT = 3000
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Server del mio blog')

})

app.get('/bacheca', (req, res) => {

    const posts = [
        {
            titolo: 'ciambellone',
            contenuto: 'ingredienti del ciambellone',
            img: '/img/ciambellone.jpeg',
            tags: ['dolce', 'colazione']
        },
        {
            titolo: 'cracker barbabietola',
            contenuto: 'ingredienti dei cracker alla barbabietola',
            img: '/img/cracker_barbabietola.jpeg',
            tags: ['salato', 'spuntino']
        },
        {
            titolo: 'pane fritto dolce',
            contenuto: 'ingredienti del pane fritto dolce',
            img: '/img/pane_fritto_dolce.jpeg',
            tags: ['dolce', 'spuntino']
        },
        {
            titolo: 'pasta barbabietola',
            contenuto: 'ingredienti della pasta alla barbabietola',
            img: '/img/pasta_barbabietola.jpeg',
            tags: ['salato', 'pranzo']
        },
        {
            titolo: 'torta paesana',
            contenuto: 'ingredienti della torta paesana',
            img: '/img/torta_paesana.jpeg',
            tags: ['dolce', 'dessert']
        }
    ]

    res.json(posts)
})