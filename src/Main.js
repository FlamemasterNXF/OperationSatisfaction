function increaseUni(i){
    data.numbers[0] = data.numbers[0].plus(i)
}
function increaseSecondary(x){
    data.numbers[1] = data.numbers[1].plus(x)
}
function increase3(x){
    data.numbers[2] = data.numbers[2].plus(x)
}
function increase4(x){
    data.numbers[3] = data.numbers[3].plus(x)
}
function increase5(x){
    data.numbers[4] = data.numbers[4].plus(x)
}
function increase6(x){
    data.numbers[5] = data.numbers[5].plus(x)
}
function increase7(x){
    data.numbers[6] = data.numbers[6].plus(x)
}
function increase8(x){
    data.numbers[7] = data.numbers[7].plus(x)
}
function increase9(x){
    data.numbers[8] = data.numbers[8].plus(x)
}
function increase10(x){
    data.numbers[9] = data.numbers[9].plus(x)
}
function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    increaseUni(new Decimal(0.1).times(diff))
    increaseSecondary(data.numbers[0].div(100).times(diff))
    increase3(data.numbers[1].div(100).times(diff))
    increase4(data.numbers[2].div(100).times(diff))
    increase5(data.numbers[3].div(100).times(diff))
    increase6(data.numbers[4].div(100).times(diff))
    increase7(data.numbers[5].div(100).times(diff))
    increase8(data.numbers[6].div(100).times(diff))
    increase9(data.numbers[7].div(100).times(diff))
    increase10(data.numbers[8].div(100).times(diff))
    updateHTML()
}
window.setInterval(function(){
    mainLoop()
}, 10);