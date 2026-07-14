const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/', (req, res) => {
  res.json({
    service: 'nexus-api',
    version: '1.0.0',
    endpoints: ['/health', '/stats'],
  })
})

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'nexus-api',
  })
})
//tes
app.get('/stats', (req, res) => {
  res.json({
    teams: 122483,
    uptime: 99.97,
    rating: 4.9,
    setupMinutes: 10,
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`nexus-api listening on :${PORT}`))
