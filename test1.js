const name = "Ashley"
const probabilityOfRain = 0.2
const temperatureInc = 26

const message = `Hello, ${name}, with a rain chance of ${probabilityOfRain * 100}% and a temperature of ${temperatureInc}C we recommend that you ` + (probabilityOfRain >0.3? "take an umbrella" : "enjoy this rain-free day") + `${temperatureInc >= 26? ' and watch out for a heatstroke' : 'and bask in this fine weather' } `

console.log(message)