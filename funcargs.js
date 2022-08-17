function func1(a, b, c) {                // keyword  function name
    console.log(arguments[0]);
    // expected output: 1
  
    console.log(arguments[1]);            //[0,1,2] are the positions
    // expected output: 2
  
    console.log(arguments[2]);
    // expected output: 3
  }
  
  console.log(func1(1, 2, 3));          // arguments 