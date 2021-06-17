require('mongoose')
const User = require('./models/user')
const Recipe = require('./models/recipe')

const createuser = async (data) => {
    try {
        const user = new User(data)
        await user.save()
    } catch (error){
    }
}

const createRecipe = async (data) => {
    try {
        const recipe = new Recipe(data)
        await recipe.save()
    } catch (error){
    }
}

const generateTitle = (title) => {
    return title
}


const findUsers = async () => {
    try {
        const users = await User.find({})
        for(var i=0;i<users.length;i++){
            console.log(users[i].name)
        }
        
        return users[0].name
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createuser,
    createRecipe,
    generateTitle,
    findUsers
}