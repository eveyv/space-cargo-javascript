let fuelCanisterPile = [2, 5, 9, 2, 3, 4, 6, 8, 8, 2, 1, 0]

let hyperDrivePile = ["rusty hyperdrive", "millennium hyperdrive", "hyperdrive XL", "rusty hyperdrive", "rusty hyperdrive XL"]

let oldToolBinsPile = [
 {
   label: "Tool Bin 1",
   items: []
 },
 {
   label: "Tool Bin 2",
   items: ["flux capicitor wrench", "hydrospanner", "android eye scanner", "skeleton key-card"]
 },
 {
   label: "Tool Bin 3",
   items: []
 },
 {
   label: "Tool Bin 4",
   items: ["transponder", "body scanner"]
 },
 {
   label: "Tool Bin 5",
   items: ["multi-pass", "sonic screwdriver", "teleporter gun"]
 }
]

let robotsPile = [
  {
    robotType: "Protocol Droid",
    yearsOld: 41,
    fuel: 0
  },
  {
    robotType: "Astromech Droid",
    yearsOld: 3,
    fuel: 2
  },
  {
    robotType: "Maintenance Droid",
    yearsOld: 10,
    fuel: 1
  },
  {
    robotType: "Bending Robot",
    yearsOld: 19,
    fuel: 0
  }
]

let orePile = [
  {
    status: "glowing",
    weight: 20.5
  },
  {
    status: "stable",
    weight: 15.5
  },
  {
    status: "stable",
    weight: 4.5
  },
  {
    status: "glowing",
    weight: 0.5
  }
]


let cargoHold = {

  toggleCleanedStatus() {
    if(this.cleaned === false) {
      return cargoHold.cleaned = true
    } else if (this.cleaned === true) {
      return cargoHold.cleaned = false
    }
  },
  cleaned: false,
  daysSinceLastIncident: 0,

  addDayForIncidentReport() {
    this.daysSinceLastIncident ++
  },

  fuel: 0,
  hyperdrive: null,
  recyclables: [],

  filterOutRecyclables() {
    this.recyclables = recyclablesPile.filter(element => element === "paper"|| element === "glass" || element === "plastic" || element === "metal can")
  },

  retrieveWorkingHyperdrive(hyperdrives) {
    return hyperDrivePile.find(function(element) {
      return !element.includes("rusty")
   })
  },

  consolidateFuel() {
    return totalFuel = fuelCanisterPile.reduce((totalSupply, individualSupply) => totalSupply + individualSupply)
  },

  toolBin: {
    label: "Primary Tool Bin",
    tools: []
  },

  consolidateTools(array) {
    let nestedItems = oldToolBinsPile.map(function(tool) {return tool.items})
    this.toolBin.tools = [].concat.apply([], nestedItems)
  },

  robotsForSale: [],

  filterRobots() {
    this.robotsForSale = robotsPile.filter(robot => robot.yearsOld <= 15)
  },

  dilithiumOreWeight: 0,
  trash: [],

  consolidateOre(){
    let stableItems = []
    let unstableItems = []
    orePile.forEach((ore) =>{
      if(ore.status === "stable"){
        stableItems.push(ore)
        this.dilithiumOreWeight = stableItems.reduce(function(totalWeight, oreWeight){return totalWeight.weight + oreWeight.weight})
      } else if(ore.status === "glowing")
      unstableItems.push(ore)
      this.trash = unstableItems
      })
},

fuelUpRobots(array) {
  array.forEach((robot) => {
    if (robot.fuel < 5) {
      robot.fuel = 5
      totalFuel -= 5
      }
    })
  }
};



let recyclablesPile = ["paper", "space banana peel", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]

cargoHold.consolidateTools()
cargoHold.consolidateFuel()
cargoHold.toggleCleanedStatus()
cargoHold.addDayForIncidentReport()
cargoHold.consolidateTools(oldToolBinsPile)
cargoHold.retrieveWorkingHyperdrive(hyperDrivePile)
cargoHold.filterOutRecyclables(recyclablesPile)
cargoHold.filterRobots(robotsPile)
cargoHold.consolidateOre(orePile)
cargoHold.fuelUpRobots(cargoHold.robotsForSale)
console.log(cargoHold.recyclables)
console.log(cargoHold.retrieveWorkingHyperdrive())
console.log(cargoHold.toolBin.tools)
console.log(cargoHold.robotsForSale)
console.log(cargoHold.trash)
console.log(cargoHold.dilithiumOreWeight)
console.log(cargoHold.robotsForSale)
console.log(totalFuel)
