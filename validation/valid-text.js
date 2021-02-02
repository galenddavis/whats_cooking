//validates input from user - makes sure its not empty 
// return a boolean

const validText = str => {
  return typeof str === 'string' && str.trim().length > 0;
}

module.exports = validText