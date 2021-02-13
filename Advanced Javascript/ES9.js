// flat method

const array = [1, [2, 3], [4,5]]

array.flat()

const array2 = [1, [2, [3]], [4,5]]

array2.flat(2)

const entries = ['bob', 'sally', , , , , , 'cindy']
entries.flat()

const rollcallEntries = entries.flatMap(entry => 'I am ' + entry)
rollcallEntries

const userEmail = '         eddy@gmail.com'
const userEmail2 = 'johnny@gmail.com         '

console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())
