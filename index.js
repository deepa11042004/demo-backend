const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'nexus-api',
  })
})

app.get('/api/stats', (req, res) => {
  res.json({
    teams: 12483,
    uptime: 99.97,
    rating: 4.9,
    setupMinutes: 3,
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`nexus-api listening on :${PORT}`))
