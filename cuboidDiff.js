function findDifference(a, b) {
  let a1 = a[0] * a[1] * a[2]
  console.log(a1)
  let b1 = b[0] * b[1] * b[2]
  console.log(b1)
 if (a1 > b1){
   return a1 - b1
 }else{
   return b1 - a1
 }
}
