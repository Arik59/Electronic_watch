const clockElement = document.getElementById("clock")
const timeList = document.getElementById("timeList");
const localTime = document.getElementById("localTime");

function updateCLock() {
    const now = new Date();

    const timeZone = parseInt(timeList.value, 10);

    const hours = String(now.getUTCHours() + timeZone).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    localTime.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}

setInterval(updateCLock, 1000);
timeList.addEventListener('change', updateCLock)



// const timeDifference = new Date().getTimezoneOffset() / 60;
// const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// const timeZone2 = new Date().DateTimeFormat().resolvedOptions().timeZone;
// document.getElementById('clock2').textContent = timeZone;