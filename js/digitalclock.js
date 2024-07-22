function Updateclock() {
    const Now = new Date();
    let Hours = Now.getHours();
    const Minutes = Now.getMinutes().toString().padStart(2, '0');
    const Seconds = Now.getSeconds().toString().padStart(2, '0');
    const AmPm = Hours >= 12 ? 'PM' : 'AM';

    Hours = Hours % 12 || 12; // Convert to 12-hour format and handle midnight (0 should be 12)
    Hours = Hours.toString().padStart(2, '0'); // Pad Hours with leading zero if needed

    const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const DateString = `${Days[Now.getDay()]} ${Months[Now.getMonth()]} ${Now.getDate()}, ${Now.getFullYear()}`;

    document.getElementById('date').innerText = DateString;
    document.getElementById('time').innerText = `${Hours} : ${Minutes} : ${Seconds} ${AmPm}`;
    const timeString = `${Hours} : ${Minutes} : ${Seconds} ${AmPm}`;
    document.getElementById('clock').innerText = timeString;

    setTimeout(Updateclock, 1000);
}

Updateclock();
