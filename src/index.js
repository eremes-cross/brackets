module.exports = function check(str, bracketsConfig) {

  let pairs = bracketsConfig.map(arr => arr.join('')); 
  
  while (pairs.length) {
    let i = 0;

    for (let item of pairs) {
      if (str.indexOf(item) > -1) {
        str = str.replace(item, '');
      } else {i++}
    }

    if (i === pairs.length) pairs.length = 0;  
  }

  return (!str) ? true : false;

} 