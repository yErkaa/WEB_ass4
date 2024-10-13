function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // Format: "MM/DD/YYYY, HH:MM:SS AM/PM"
    document.getElementById('dateTime').textContent = `Current Date and Time: ${dateTimeString}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
