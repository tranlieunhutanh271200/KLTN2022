const API = {
    LOGIN: '/',
    FORGOT: '/forgot-password',   
}
Object.keys(API).map((prop) => 
    API[prop] = `/v1/${API[prop]}`
)