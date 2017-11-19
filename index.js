function yellMyBreakfast(breakfast){
    var answer = breakfast.toUpperCase()
    return answer
}

function underYourBreath(string){
    var answer = string.toLowerCase()
    return answer
}

function yellingOrWhispering(phrase){
    console.log(phrase.toUpperCase())
    if (phrase === phrase.toLowerCase()){
        return "whisper"
    } else if(phrase === phrase.toUpperCase()){
        return "yelling"
    } else {
        return "I got you fam. Have a rice krispie."
    }
}