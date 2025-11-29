   function updateClock() {
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");
    const day = document.getElementById("day");

    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Add leading zeros
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Display time
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

    // Display: Day name + date + month + year (auto changes on Jan 1)
    const dayName = now.toLocaleDateString("en-US", { weekday: "long" });
    const date = now.getDate();
    const month = now.toLocaleDateString("en-US", { month: "long" });
    const year = now.getFullYear(); // auto changes to 2026 on Jan 1

    day.innerHTML = `${dayName}, ${date} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
