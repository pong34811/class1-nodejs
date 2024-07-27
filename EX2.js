// let google = number => 
//     {
//         // ตรวจสอบเงื่อนไขที่หารได้ทั้ง 3 และ 5 ก่อน
//         if (number % 3 === 0 && number % 5 === 0) {
//             console.log("google");
//         } 
//         if (number % 3 === 0) {
//             console.log("goo");
//         }  
//         if (number % 5 === 0) {
//             console.log("gle");
//         } 
//         if (number % 3 !== 0 && number % 5 !== 0) {
//             console.log(number);
//         }
//     }    
// google(15);


const google = number =>
    number % 3 === 0 && number % 5 === 0 ? "Google" : 

    number % 3 === 0 ? "Goo" :
    
    number % 5 === 0 ? "Gle" :
    
    number;
    
console.log(google(15));