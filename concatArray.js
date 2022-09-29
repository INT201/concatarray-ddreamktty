const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  /*- กรณี array1 และ array2 ทั้งคู่มีค่า null หรือ undefined ให้คืนค่ากลับเป็น undefined
- กรณี array1 และ array2 ทั้งคู่เป็น empty array ทั้งคู่ ให้ return empty array
- กรณี array1 หรือ array2 อันใดอันหนึ่ง มีค่าเป็น empty array หรือ มีค่าเป็น null หรือ undefined ให้ return element ของ array ที่มีรายการแทน
*/
  if ((array1 === null || array1 === undefined) && (array2 === null || array2 === undefined)) {
    return undefined
  }
  else if((array1.length === 0 )&& (array2.length === 0)){
    return []
  }
  else if((array2.length === 0 )|| (array2 === null) || (array2 === undefined)){
    return array1
  }
  else if(array1.length === 0 && array1 === null || array1 === undefined){
    return array2
  }
  else {
    let x = array1.concat(array2)
    return x
  }
}
module.exports = concatArray
