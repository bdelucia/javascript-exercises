// O(mn) because includes() is O(n)
// const removeFromArray = function(array, ...numToDelete) {
//   return array.filter(element => !numToDelete.includes(element))
// };

// O(m+n) because has() is O(1)
// Hash tables are friggin sweeeeeeet
const removeFromArray = function(array, ...numsToDelete) {
  const removeHash = new Set(numsToDelete)
  return array.filter(element => !removeHash.has(element))
};

// Do not edit below this line
module.exports = removeFromArray;
