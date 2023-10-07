<!-- Challenge 1: Student Grade Generator (Toy Problem) -->
The parameter score represents the user input
The programs proceeds to award grades based on the user input as long as the user enters a valid score the program
will run and award grades appropriately
 <!-- if (score > 100 || score <= -0){
      console.log("Enter Valid Score");
    } -->
The snippet above ensures the correct input is fed into the program, scores between (0-100)

<!-- Challenge 2: Speed Detector (Toy Problem) -->
The parameter record represents the recorded speed.
The program tests the speed within the limit(70) and deducts points, every 5kms above the limit is 1 point
if the speed exceeds (70) but the points are below 12 the license is valid: 
<!-- ((record - 70)/5)  -->
the operation above calculates and awards the points 
Otherwise if the speed is calculated and the resulting points are above 12 points the license is suspended.

<!-- Challenge 3: Net Salary Calculator (Toy Problem) -->
The program takes in the gross salary via the function below 
 <!-- function netSalary (grossSalary) --> It then calculates the tax deductions based on each earning brackets using the if else if statement, a code snippet is provided below 
  <!-- if(grossSalary <= 24000){
        let PAYE = 0.1;
        let NHIF = 0.0275;
        let NSSF = 0.06;
        console.log(grossSalary - (grossSalary * PAYE) + (grossSalary * NHIF) +  (grossSalary * NSSF));
  } -->
 