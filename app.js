const express = require('express')
const app = express()
const cp = require('child_process')


require.cache['child_process'] = {}
Object.defineProperty(require.cache['child_process'], 'exports', {
  get: () => {

    // monitorando
    console.log('child_process está sendo usado')
    return cp
   
    
    // ou bloqueio
    //throw Error(`The child_process module is restricted`)
  }
})

// lib usando
const helmet = require('helmet')
app.use(helmet())

// usando manualmente
// const badExample = require('./bad-example')

app.get('/', function (req, res) {
  res.send(badExample())
})
 
app.listen(3000)
console.log('Listened PORT 3000')