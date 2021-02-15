// flat + flatmap methods

const array = [1, [2, 3], [4,5]]

array.flat()

const array2 = [1, [2, [3]], [4,5]]

array2.flat(2)

const entries = ['bob', 'sally', , , , , , 'cindy']
entries.flat()

const rollcallEntries = entries.flatMap(entry => 'I am ' + entry)
rollcallEntries

// trim methods

const userEmail = '         eddy@gmail.com'
const userEmail2 = 'johnny@gmail.com         '

console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

// fromEntries

userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hanselOrg', 28]]

Object.fromEntries(userProfiles)


// try, catch, block

try {

  bob + 'hi'

} catch {

  console.log('you messed up')
}
