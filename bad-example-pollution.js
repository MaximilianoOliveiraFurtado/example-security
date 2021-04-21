module.exports = (req) => {
  const { name } = req.query
  console.log('name:', name)

  // const parts = req.query.name.split (' ')
  // const last = parts.pop ()
  // const first = parts.shift ()
  // const nameHandled = `${last}, ${first}`
  // console.log('name tratado:', last, first)


  //correção
  if (Array.isArray (req.query.name)) {
    return 'is array'
  } else {
    const parts = req.query.name.split (' ')
    const last = parts.pop ()
    const first = parts.shift ()
    const nameHandled = `${last}, ${first}`
    return { fullName: nameHandled }
  }

}

  