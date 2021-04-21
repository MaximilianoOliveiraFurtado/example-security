const Ajv = require("ajv")

const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    id: {type: 'integer'},
    name: {type: 'string'}
  },
  required: ['id', 'name'],
  additionalProperties: false,
}
const validate = ajv.compile(schema)

module.exports = (req) => {
  const body = req.body


  // CORREÇÃO
  // const valid = validate(body)
  // if (!valid) {
  //   console.log(validate.errors)
  //   return 'sai daqui'
  // } 
 

 console.log(body.hasOwnProperty('data')) // usando uma função que é possovel que a api esteja usando

 console.log(body.id + body.name) // outro exemplo com toString, mesmo quando vc não está usando explicitamente alguma propriedade de objeto
 
  console.log('data:', body)

  // const parts = req.query.name.split (' ')
  // const last = parts.pop ()
  // const first = parts.shift ()
  // const nameHandled = `${last}, ${first}`
  // console.log('name tratado:', last, first)


  //correção
  // if (Array.isArray (req.query.name)) {
  //   return 'is array'
  // } else {
  //   const parts = req.query.name.split (' ')
  //   const last = parts.pop ()
  //   const first = parts.shift ()
  //   const nameHandled = `${last}, ${first}`
  //   return { fullName: nameHandled }
  // }

}

  