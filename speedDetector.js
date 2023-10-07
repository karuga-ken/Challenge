function speed(record) {
    if (record < 70) { 
      console.log("okay") //output after speed is within limit 
    } else if (record > 70) {//speed exceeds limit
      console.log((record - 70) / 5)//output of points after exceeding limit
    } else { 
      console.log('license suspended') // output after maximizing speed limit points (12)
    }
  }
  speed(30);