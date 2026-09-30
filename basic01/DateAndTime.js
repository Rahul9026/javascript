let myDate = new Date();
console.log(myDate); //2026-09-30T05:47:14.242Z
console.log(myDate.toString()); // Wed Sep 30 2026 11:17:14 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Wed Sep 30 2026
console.log(myDate.toTimeString()); // 11:17:14 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()); // 30/9/2026, 11:17:14 am 
console.log(myDate.toLocaleDateString()); // 30/9/2026
console.log(myDate.toLocaleTimeString()); // 11:17:14 am
const myDate1 = new Date('2026-09-30');
console.log(myDate1.getTime()); //1785600000000ms
let timestamp = Date.now();
console.log(timestamp); // Current timestamp in milliseconds since Unix epoch
const newDate = new Date(timestamp);
console.log(newDate.toLocaleString('default', {
    timeZone: 'America/New_York',
    weekday: 'long',
    })); // Convert to New York time