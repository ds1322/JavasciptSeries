//Dates

let myDate = new Date()

//console.log(myDate.toString());
//onsole.log(myDate.toISOString());
 //console.log(myDate.toISOString());
 //console.log(myDate.toLocaleString());
 //console.log(myDate.toTimeString());
 //console.log(myDate.toDateString());

 //console.log(typeof myDate);

 //let myCreatedDate = new Date(2024,2,24)
//  let myCreatedDate = new Date(2024,0,24,5,3)
 //let myCreatedDate = new Date("2024-01-24")
 let myCreatedDate = new Date("01-24-2024")
 

 //console.log(myCreatedDate);

 //console.log(myCreatedDate.toLocaleString());

 let myTimeStamp = Date.now()

//  console.log(myTimeStamp);

//  console.log(myCreatedDate.getTime());

 //console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()

 console.log(newDate);

 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());

 //`${newDate.getDay()} and time is ` => String Interpolation

 console.log(newDate.toLocaleString('default' ,{
   
    
    weekday:"long"

}));

