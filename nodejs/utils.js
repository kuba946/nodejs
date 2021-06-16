require('./db/mongoose')
const User = require('./db/models/user')
const Recipe = require('./db/models/recipe')

const createuser = async (data) => {
    try {
        const user = new User(data)
        await user.save()

        //console.log(user)
    } catch (error){
        //console.log(error)
    }
}

const createrecipe = async (data) => {
    try {
        const recipe = new Recipe(data)
        await recipe.save()

        //console.log(user)
    } catch (error){
        //console.log(error)
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
    createrecipe,
    generateTitle,
    findUsers
}