const app = require('express')()
const data = require('./constants/restaurants.js')
const PORT = 2000

const {restaurants} = data
let userId = 0
const modData = restaurants.map(value => {
    const {restaurant} = value
    var {id, name, thumb} = restaurant
    if (!thumb)
    {
        thumb = "https://demofree.sirv.com/nope-not-here.jpg"
    }
    userId++
    return {userId, id, name, img: thumb}
})

// console.log(modData)
app.get('/api/restaurants', getRestaurants)
function getRestaurants(req,res) {
    res.status(200)
    res.json(modData)
}

app.listen(PORT, console.log(`listening on port: ${PORT}`))