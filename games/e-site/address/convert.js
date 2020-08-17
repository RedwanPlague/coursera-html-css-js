const fs = require('fs')

const districtString = fs.readFileSync('/home/redwan/Documents/e-commerce_project/Aajar-project/public/address/districts.json')

const districts = JSON.parse(districtString)[2].data
  .sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }
    return 0
  })
  .map(district => {
    return {
      value: district.name,
      text: `${district.name}(${district.bn_name})`
    }
  })

fs.writeFileSync('/home/redwan/Documents/e-commerce_project/Aajar-project/public/address/final.json', JSON.stringify(districts, null, 2))
