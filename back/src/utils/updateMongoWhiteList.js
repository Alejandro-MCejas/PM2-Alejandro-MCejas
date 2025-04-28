const axios = require('axios')
const DigestFetch = require('digest-fetch')
require('dotenv').config()

async function updateMongoWhiteList() {
    try {
        const ipRes = await axios.get('https://api.ipify.org?format=json')
        const myIP = ipRes.data.ip

        const baseUrl = `https://cloud.mongodb.com/api/atlas/v1.0/groups/${process.env.MONGO_PROJECT_ID}/accessList`

        const body = [{
            ipAddress: myIP,
            comment: "ip automática del deploy (render)"
        }]

        const client = new DigestFetch(
            process.env.MONGO_PUBLIC_KEY,
            process.env.MONGO_PRIVATE_KEY
        )

        const response = await client.fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            const errorData = await response.text()
            throw new Error(`Error en mongo api: ${errorData}`)
        }

        const data = await response.json()

        console.log('ip añadida exitosamente a la whiteList')

    } catch (error) {
        console.error('Error al añadir la ip a la whiteList: ', error.message);
        throw error
    }
}

module.exports = updateMongoWhiteList;