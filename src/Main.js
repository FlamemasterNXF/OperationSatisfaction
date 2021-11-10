let uniGain = new Decimal(0.1)
let apexMulti = new Decimal(1)
let uniMulti = new Decimal(1)
let gwaPow = new Decimal(1)
function increaseUni(i){
    data.numbers[0] = data.numbers[0].plus(i)
}
function calculateStuff(){
    gwaPow = data.numbers[8].gte(1e5) ? data.numbers[8].div(1e5).sqrt().log10().plus(1) : new Decimal(1)
    uniMulti = apexMulti.gte(2) ? uniGain.sqrt().sqrt().plus(1) : new Decimal(1)
    apexMulti = data.numbers[9].gte(0.0001) ? data.numbers[9].sqrt().times(uniMulti).plus(1) : new Decimal(1)
    uniGain = new Decimal(0.1).times(apexMulti).pow(gwaPow)
}
function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    calculateStuff()
    increaseUni(uniGain.times(diff))
    for (let i=1;i<data.numbers.length;i++){
        data.numbers[i] = data.numbers[i].plus(data.numbers[i-1].div(100).times(diff))
    }
    updateHTML()
}
window.setInterval(function(){
    mainLoop()
}, 10);