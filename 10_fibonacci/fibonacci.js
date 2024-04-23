const fibonacci = function(number) {

    const fibArr = [1]; // initial array starting with 1

    if(number > 0){ // check if given number is greater than 1
        let i = 1;
        let start = 1;

        while(fibArr.length < number-1){
            fibArr[i]=start;
            // console.log(fibArr);

            let lastNum = Number(fibArr.slice(-1));
            fibArr.pop();
            let secondLastNum = Number(fibArr.slice(-1));
            
            start = lastNum+secondLastNum;
            fibArr.push(lastNum);
            // console.log(start, fibArr);
            i++;
        }

        let fib1 = Number(fibArr.slice(-1));
        fibArr.pop();

        let fib2 = Number(fibArr.slice(-1));

        // console.log(fib1+fib2);
        return fib1+fib2;
    } else {
        return 0;
    }


};

// Do not edit below this line
module.exports = fibonacci;
