const weight = 68;
const height = 5.4;
const meterHeight = height*0.3048
const BMI = weight / meterHeight ** 2;
if(BMI<18.5){
  console.log('you are underweight')
}
else if(BMI>=18.5 && BMI<=24.9){
  console.log('you are normal man')
}
else if(BMI>=25 && BMI<=29.9){
  console.log('you are overweight')
}
else{
  console.log('you are obese')
}