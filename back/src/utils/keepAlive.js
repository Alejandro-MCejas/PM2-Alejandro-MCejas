const axios = require('axios')
require('dotenv').config()


const keepServerAwake = () => {
    const url = process.env.SERVER_URL
    if(!url) {
        console.error('Server url no está definido')
        return
    }

    setInterval(async () => {
        try {
            await axios.get(url)
            console.log('Servidor activo')
        } catch (error) {
            console.error('Error al mantener el servidor activo', error.message)
        }
    }, 14 * 60 * 1000)
}

module.exports = keepServerAwake