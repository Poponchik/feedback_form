import Pool from 'pg'

const pool = new Pool({
    user: 'postgress',
    password: '1111',
    host: 'localhost',
    port: 5432,
    database: ""
})

module.exports = pool