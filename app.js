const express = require('express')
const app = express()
const cp = require('child_process')
const bodyParser = require('body-parser')


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

// lib usando o core
const helmet = require('helmet')
app.use(helmet())
app.use(bodyParser.json())

// usando o core manualmente
// const badExample = require('./bad-example-core')
app.get('/bad-example', function (req, res) {
  res.send(badExample())
})

//?name[]=max+furtado ou ?name=max+furtado&name=bruce
const badExamplePollution = require('./bad-example-pollution')
app.get('/bad-example-pollution', (req, res) => { //variações :name? :name
  const result = badExamplePollution(req) 
  res.json(result)
})

const badExamplePollutionJson = require('./bad-example-pollution-json')
app.post('/bad-example-pollution-json', (req, res) => {
  const result = badExamplePollutionJson(req) 
  res.json(result)
})
 
app.listen(3000)
console.log('Listened PORT 3000')