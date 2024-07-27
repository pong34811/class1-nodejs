function google(number) {
    // ตรวจสอบเงื่อนไขที่หารได้ทั้ง 3 และ 5 ก่อน
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("google");
    } 
    if (number % 3 === 0) {
        console.log("goo");
    }  
    if (number % 5 === 0) {
        console.log("gle");
    } 
    if (number % 3 !== 0 && number % 5 !== 0) {
        console.log(number);
    }
}

// ทดสอบฟังก์ชัน

google(2);  // ควรแสดง "gogle"
