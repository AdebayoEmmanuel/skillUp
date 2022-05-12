//expernal dependecy
const express = require('express');
//define app to use express
const app = express();
//define app defqault port
const port = 3000; 

//parse json using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let movies = [
    {
    id : '1',
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseDate: '2010-07-16',
    },
    {
        id : '2',
        title: 'The Irishman',
        director: 'Martin Scorsese',
        releaseDate: '2019-09-27',
    },
];

//get movie list in JSON format
app.get('/movie', (req, res) => {
    res.json({movies})
})

//set the server to listen at port
app.listen(port, () => console.log('listening on port %s', port));

//add movie list
app.post('/movie', (req, res) => {
    const movie = req.body;

    console.log(movie);
    movies.push(movie);
    res.send('Movie added successfully');
})

//search for a movie in the list
app.get('/movie/:id', (req, res) =>{
    const id = req.params.id;

    for (let movie of movies)
    {
        if (movie.id === id)
        {
            res.json(movie);
            return;
        }
    }
    res.status(404).send('Movie not found');
});

//delete a movie from the list
app.delete('/movie/:id', (req, res) =>{
    const id = req.params.id;

    movies = movies.filter(movie => {
        if (movie.id !== id)
        {
            return true;
        }
        return false;
    });
    res.send("Movie is deleted");
});