  //random password function
  function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }  


// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = "0123456789"
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = [...collection, ...lowerCaseLetters]
  }

  if (options.uppercase === 'on') {
    collection = [...collection, ...upperCaseLetters]
  }

  if (options.numbers === 'on') {
    collection = [...collection, ...numbers]
  }
  
  if (options.symbols === 'on') {
    collection = [...collection, ...symbols]
  }

  // remove things user don't want
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(character =>
      !options.excludeCharacters.includes(character)
    )
  }

  // return error notice if collection is empty
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }
  
  // start generate password
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  // return the generated password
  return password
}

// export generatePassword function for other files to use
module.exports = generatePassword