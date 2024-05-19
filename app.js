function BMI(valueW,valueH) 
{   
    let h = (valueH/100)**2

    let result = valueW/h
    return result;
}

function result(BMI) 
{
     if (BMI >= 29.0){
        return "อยู่ในเกณฑ์ : อ้วน (Obese)";
     }
     else if (BMI >=24.0 & BMI < 29.0){
        return  "อยู่ในเกณฑ์ : ท้วม (Overweight)";
     }
     else if (BMI >=18.6 & BMI < 23.9){
        return  "อยู่ในเกณฑ์ : ปกติ (Normal weight)";
     }
     else if (BMI <18.7){
        return  "อยู่ในเกณฑ์ : ผอม (Underweight)";
     }
     else{
         alert("ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูล")
        return "ข้อมูลไม่ถูกต้อง โปรดตรวจสอบข้อมูล"
     }   
}

function onC(valueW,valueH) {
    document.getElementById('resultBMI').value=BMI(valueW,valueH)
    document.getElementById('result').value=result(BMI(valueW,valueH))
}