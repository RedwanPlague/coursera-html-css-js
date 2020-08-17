const fs = require('fs')
const districts = JSON.parse(fs.readFileSync('/home/redwan/Documents/e-commerce_project/Aajar-project/public/address/final.json'))

// for (const district of districts) {
//   console.log(district.name)
//   for (const upazilla of district.upazillas) {
//     console.log('    ' + upazilla.name)
//     for (const union of upazilla.unions) {
//       console.log('        ' + union.name)
//     }
//   }
// }

const bogura = districts.filter(district => district.name === 'Bogura')[0]

console.log(bogura.name)
for (const upazilla of bogura.upazillas) {
  console.log('    ' + upazilla.name)
  for (const union of upazilla.unions) {
    console.log('        ' + union.name)
  }
}
