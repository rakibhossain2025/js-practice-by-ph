const ticketPrice =800;
const age =30;
isStudent =true;
if(age<=10){
  console.log('jau baba tumar bara lagba nah')
}
else if(isStudent == true && age <=25){
  console.log('you got 50% discount :' ,ticketPrice-(ticketPrice*50/100))
}
else{
  console.log('Ticket price is : 800')
}