function increaseUni(i){
    data.numbers[0] = data.numbers[0].plus(i)
}
function mainLoop(){
    let diff = (Date.now()-data.time)/1000
    data.time = Date.now()
    increaseUni(new Decimal(0.1).times(diff))
    for (let i=1;i<data.numbers.length;i++){
        data.numbers[i] = data.numbers[i].plus(data.numbers[i-1].div(10).times(diff))
    }
    updateHTML()
}
window.setInterval(function(){
    mainLoop()
}, 10);