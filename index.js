function findMatching(drivers, driver){
    return drivers.filter((newDriver) => 
    newDriver.toLowerCase().includes(driver.toLowerCase()))
}

// let newFuzzyDriver = []

// function fuzzyMatch(drivers, driver) {
//     if (newFuzzyDriver.includes(driver)){
//         return drivers.filter(newFuzzyDriver)
//     } else {
//         return newFuzzyDriver
//     }
// }

// function fuzzyMatch(drivers, letters) {
//     return drivers.filter((sameLettersDriver) => 
//     (sameLettersDriver.charAt(0)).includes(letters))
// }

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => letters.charAt(0) === driver.charAt(0))
}

function matchName(drivers, name){
    return drivers.filter(driver => name === driver.name)
}