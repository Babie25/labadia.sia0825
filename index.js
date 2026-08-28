// Package imports
const express = require('express');

// Server setup
const server = express()
const PORT = 1007
let HOSTNAME = '0.0.0.0'
server.listen(PORT, HOSTNAME, () => {
    console.log('Server is running: ${HOSTNAME}:${PORT}')
})
