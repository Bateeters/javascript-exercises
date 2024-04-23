const fibonacci = function(number) {

    const fibArr = [1]; // initial array starting with 1
    let input = Number(number); // change user input to a number

    if(input > 0){ // check if given number is greater than 1
        let i = 1;
        let start = 1;

        while(fibArr.length < input-1){
            fibArr[i]=start; // add the next number to the fibArr

            let lastNum = Number(fibArr.slice(-1)); // get the last number of fibArr
            fibArr.pop(); // remove last number of fibArr
            let secondLastNum = Number(fibArr.slice(-1)); // get the second last number of fibArr
            
            start = lastNum+secondLastNum; // add the last 2 numbers together for next loop
            fibArr.push(lastNum); // add the removed last number back to end of fibArr
            i++;
        }

        let fib1 = Number(fibArr.slice(-1)); // Get last number in array
        fibArr.pop(); // remove last number in array

        let fib2 = Number(fibArr.slice(-1)); // Get the NEW last number in array
        return fib1+fib2; // add and return the sum of the last two numbers
    } else if (input<0){
        return "OOPS";
    } else {
        return 0;
    }


};

// Do not edit below this line
module.exports = fibonacci;
