function updateHTML(){
    let numberIDs = ["1","2","3","4","5","6","7","8","9","10",]
    let numberNames = ["UNIVERSAL NUMBER", "Secondary Number", "Tertiary Number", "Dark Number", "Shadow Number", "Deep Number", "Lost Number", "Eternal Number", "gwa Number", "Apex Number"]
    for (let i=0; i<numberIDs.length;i++){
        document.getElementById(`number${numberIDs[i]}`).innerHTML =
            i >= 1 ? `[${numberNames[i]}]: ${format(data.numbers[i])} +${format(data.numbers[i-1].div(100))}/s` : `[${numberNames[i]}]: ${format(data.numbers[i])} +${format(uniGain)}/s`

    }
    document.getElementById("multi").innerHTML = `Apexian Strength: You gain ${format(apexMulti)}x more [UNIVERSAL]/s due to your amount of [Apex]!`
    document.getElementById("multi2").innerHTML = `UNIVERSAL Strength: Apexian Strength is multiplied by ${format(uniMulti)}x due to your [UNIVERSAL] gain!`
    document.getElementById("multi3").innerHTML = `gwa's Blessing: [UNIVERSAL] gain is raised to ^${format(gwaPow)} AFTER Apexian Strength due to your [gwa]! (requires 100,000 gwa)`
}