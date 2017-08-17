import axios from 'axios'

const URL_BASE = 'http://localhost/erudio/erudio-server/web/app_dev.php/api'
const JWT_TOKEN = 'eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FWQUxJQUNBTyIsIlJPTEVfRElBUklPX05PVEFTIiwiUk9MRV9ESUFSSU9fUFJFU0VOQ0EiLCJST0xFX0hPTUVfUFJPRkVTU09SIiwiUk9MRV9CT0xFVElNX0VTQ09MQVIiLCJST0xFX0RJQVJJT19GUkVRVUVOQ0lBIiwiUk9MRV9FU1BFTEhPX05PVEEiXSwidXNlcm5hbWUiOiIwNzgwMDI4NzkxMiIsImlhdCI6MTUwMjMwNTg2M30.jkvb6ejDhKrNDI498AzhXNKFOswdkjlVaHZ2dFEEvmx1r6_KaYg8P5rBROYzFRvTGkVuDh1kscI6TUFCDXWQXiwSoqhF9bVzVwsOOWn3fMjIyB2GtQrRI1eGVQaeGTjJ070vWeshTNX7Bt3QuZCn6t1qTTwwSAfWnaoXKirRHfqOzbF-n5l9V6NI-PJNoMPYxJ7QOSyAD1LHCIQKDsZqkupCX0vUpg-iXprY869ImWjNZjNj_LOnudoPVevlblo2SoTCyRP1E-UJ6KgVddr5eCBOlcBrnw2ACYtqujyRQhGh_477vsrccMA_57RMGbURIQoTXc0DgVRfllmDL11unheXHRdtpmAtWnauNrSVY3xPvB47d-B0ix2hwLi2n56pzZMJ-YLj76GPhiwwlRwkYPpv12tQpq86kz0oO_0hol24dXZ3CpXejGh8Wm26nNSouUKrrO-ZTSz8jjKtHRBPPEN6Myce8hLeH8-ZfpbupKZJ8DR0DUUhHfTgCqO4YDfLGeaecFMtgAGvYc4ar6JadL4kkMyvlwrGuE0vDHvP593zZt_QlHM7G6AudBjAZ1-eJtVaXASA1I8BIQ4TqQMl5M65WCJyYwVJA4LNthAi2beuBfHk6YdfOImTL-9qt3Ao2RlC_jYtiYNeYaYIKNbHr1friq6u67XFF2F5sbp5Bv0'

const servidor = axios.create({
    baseURL: URL_BASE,
    timeout: 5000,
    headers: {
        'JWT-Authorization': `Bearer ${JWT_TOKEN}`
    }
});

const listar = (recurso, params = {}) => {
    return servidor.get(`${URL_BASE}/${recurso}`, {params})
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error))
}

const pegar = (recurso, id) => {
    return servidor.get(`${URL_BASE}/${recurso}/${id}`)
        .then(response => Promise.resolve(response.data))
        .catch(error => Promise.reject(error))
}

export default {
    listar, pegar
}