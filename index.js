const app = require('express')()
const restaurants = require('./constants/restaurants.js')
const PORT = 2000

app.get('/api/restaurants', getRestaurants)

function getRestaurants(req,res) {
    res.status(200)
    res.json({
        data: restaurants
    })
}

app.listen(PORT, console.log(`listening on port: ${PORT}`))