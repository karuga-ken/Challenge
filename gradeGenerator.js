//Awards grades based on score

function examResults (score){ 
    if (score > 100 || score <= -0){ //sets input to be between 0-100 otherwise prompting the user to enter the set limit.
      console.log("Enter Valid Score");
    }else if (score >= 79){
      let score = 'A'
      console.log(score);
    }else if( score >= 60){
      let score = 'B'
      console.log(score);
    }else if( score >= 49){
      let score = 'C'
      console.log(score);
    }else if(score >= 40){
      let score = 'D'
      console.log(score);
    }else{                  //awards a score below 40
      let score = 'E' 
      console.log(score)
    }
  }
  examResults(0); 