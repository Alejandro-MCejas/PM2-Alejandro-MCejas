const app = require("./src/server")
const conDB = require("./src/config/conDB")
const keepServerAwake = require("./src/utils/keepAlive")

const PORT = process.env.PORT || 3000

async function startServer() {
    try {
        await conDB()
        app.listen(PORT, () => {
            console.log("Se está escuchando en el puerto 3000");
            keepServerAwake()
        })
    } catch (error) {
        console.error('Error al inciar el servidor', error)
    }
}

startServer()



