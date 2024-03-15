// Q1

function q1(inputstr) {
    let strArray = inputstr.split('');
    
    let result = '';
    let counter = 0;
   
    for (let i = 0; i < strArray.length; i++) {
      counter = 0;
      for (let j = 0; j < strArray.length; j++) {
        if (strArray[i] === strArray[j]) {
          counter += 1;
        }
      }
   
      if (counter < 2) {
        result = strArray[i];
        break;
      }
    }
    
    return result;
}

// Q2

function q2(N) {
    for (let i = 0; i < N; i++) {
      let numLine = '';
        for (let j = 0; j < N; j++) {
            let x;
            let a;
            x = Math.min(Math.min(i, j), Math.min(N - 1 - i, N - 1 - j));
            
            if (i <= j) {
                a = (N - 2*x) * (N - 2*x) - (i - x) - (j - x);
        
            } else {
                a = (N - 2*x - 2) * (N - 2*x - 2) + (i - x) + (j - x)
            }
            numLine=numLine+a + ' '
        }
        console.log(numLine,'\n');
        numLine = ''
    }
}

// Q3
// took help from google
function q3(arr) {
    let result = 0;
    for (let i of arr) {
        result = result ^ i;
    }
    let k = Math.log2(result & -result);
    let x = 0, y = 0;
    for (let i of arr) {
        if (i & (1 << k)) {
            x = x ^ i;
        }
        else {
            y = y ^ i;
        }
    }
    return [x, y];
}