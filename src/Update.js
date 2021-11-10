function updateHTML(){
    let numberIDs = ["1","2","3","4","5","6","7","8","9","10",]
    let numberNames = ["UNIVERSAL NUMBER", "Secondary Number", "Tertiary Number", "Dark Number", "Shadow Number", "Deep Number", "Lost Number", "Eternal Number", "gwa Number", "Apex Number"]
    for (let i=0; i<numberIDs.length;i++){
        document.getElementById(`number${numberIDs[i]}`).innerHTML =
            i >= 1 ? `[${numberNames[i]}]: ${format(data.numbers[i])} +${format(data.numbers[i-1].div(10))}/s` : `[${numberNames[i]}]: ${format(data.numbers[i])}`
    }
}