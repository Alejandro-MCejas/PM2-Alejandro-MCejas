const app = require("./src/server")
const conDB = require("./src/config/conDB")
const updateMongoWhiteList = require("./src/utils/updateMongoWhiteList")

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        await updateMongoWhiteList()
        await conDB()
        app.listen(PORT, () => {
            console.log("Se está escuchando en el puerto 3000");
        })
    } catch (error) {
        console.error('Error al inciar el servidor', error)
    }
}

startServer()



