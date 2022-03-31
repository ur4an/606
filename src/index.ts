import express from 'express'
import path from 'path'


const app = express()


app.get('/registration', (req, res) => {
    res.sendFile('index.html', {root: './pages'} )
})

app.get('/home', (req, res) => {
    res.sendFile('index1.html', {root: './pages'} )
})

app.get('/signIn', (req, res) => {
    res.sendFile('index2.html', {root: './pages'} )
})


app.listen(6969, () => {
    console.log('Started.');    
})