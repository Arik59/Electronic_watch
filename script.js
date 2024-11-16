function updateCLock(time) {
    const now = new Date();
    const hours = String(now.getUTCHours() + time).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

    const timeList = document.getElementById("timeList");
    timeZone = parseInt(timeList.value, 10);
    setInterval(updateCLock(timeZone), 1000);
}

let timeZone = 0;

timeList.addEventListener('change', updateCLock(timeZone))



// const timeDifference = new Date().getTimezoneOffset() / 60;
// const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const timeZone2 = new Date().DateTimeFormat().resolvedOptions().timeZone;
// document.getElementById('clock2').textContent = timeZone;