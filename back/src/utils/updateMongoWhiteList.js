const axios = require('axios')
const createAxiosDigestAuth  = require('@mhoc/axios-digest-auth')
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

        const digestAuth = createAxiosDigestAuth({
            username: process.env.MONGO_PUBLIC_KEY,
            password: process.env.MONGO_PRIVATE_KEY
        })

        const response = await digestAuth.request({
            method: 'POST',
            url: baseUrl,
            headers: { 'Content-Type': 'application/json' },
            data: body
        })

        console.log('ip añadida exitosamente a la whiteList')

    } catch (error) {
        console.error('Error al añadir la ip a la whiteList: ', error.response ? error.response.data : error.message);
        throw error
    }
}

module.exports = updateMongoWhiteList;