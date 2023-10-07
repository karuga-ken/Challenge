//Calculates the net salary of individuals in different earning brackets
function netSalary (grossSalary){
    if(grossSalary <= 24000){
        let PAYEE = 0.1; //PAYEE rates change in different earning brackets
        let NHIF = 0.0275;
        let NSSF = 0.06;
        console.log(grossSalary - (grossSalary * PAYEE) + (grossSalary * NHIF) +  (grossSalary * NSSF));//calculates net salary (gross salary minus tax deductions)
    }else if(grossSalary <= 32333){
        let PAYEE = 0.25; //PAYEE rates change in different earning brackets
        let NHIF = 0.0275;
        let NSSF = 0.06;
        console.log(grossSalary - (grossSalary * PAYEE) + (grossSalary * NHIF) +  (grossSalary * NSSF));//calculates net salary (gross salary minus tax deductions)
    }else if(grossSalary <= 500000){
        let PAYEE = 0.3;
        let NHIF = 0.0275;
        let NSSF = 0.06;
        console.log(grossSalary - (grossSalary * PAYEE) + (grossSalary * NHIF) +  (grossSalary * NSSF));//calculates net salary (gross salary minus tax deductions)
    }else if(grossSalary <= 800000){
        let PAYEE = 0.325;
        let NHIF = 0.0275;
        let NSSF = 0.06;
        console.log(grossSalary - (grossSalary * PAYEE) + (grossSalary * NHIF) +  (grossSalary * NSSF));//calculates net salary (gross salary minus tax deductions)
    }else{
        let PAYEE = 0.35;
        let NHIF = 0.0275;
        let NSSF = 0.06;
        console.log(grossSalary - (grossSalary * PAYEE) + (grossSalary * NHIF) +  (grossSalary * NSSF));//calculates net salary (gross salary minus tax deductions)
    }
}
netSalary(80000);