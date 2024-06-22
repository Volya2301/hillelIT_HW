let checkProbabilityTheory = function (count){
    let genNumbers = [];
    let numb = 1
    while (numb <= count){
        let randomNum = Math.floor(Math.random() * 1001) + 100
        genNumbers.push(randomNum)
        numb++
    }
    let odd = [];
    let even = [];
    for (let element of genNumbers){
        if (element % 2 == 0){
            even.push(element)
        } else if (element % 2 == 1)
            odd.push(element)
    }
    let percentageOddValue;
    let percentageEvenValue;
    percentageOddValue = (odd.length/genNumbers.length)*100
    percentageEvenValue = (even.length/genNumbers.length)*100
    console.log(`Total numbers generated: ${genNumbers.length}.`)
    console.log(`Odd numbers are: ${odd}.`)
    console.log(`Even numbers are: ${even}. `)
    console.log(`There are ${odd.length} odd numbers in the array. `)
    console.log(`There are ${even.length} even numbers in the array.` )
    console.log(`Percentage of odd numbers is ${Math.floor(percentageOddValue)}%.`);
    console.log(`Percentage of even numbers is ${Math.floor(percentageEvenValue)}%.`)
 
}
checkProbabilityTheory(45)
