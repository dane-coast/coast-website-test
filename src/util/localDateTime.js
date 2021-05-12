exports.localDateTime = (ts) => {
    if (typeof(ts) === 'string') {
        ts = parseInt(ts)
    }
    const newDate = new Date(ts)
    const date = newDate.toLocaleDateString();
    const time = newDate.toLocaleTimeString();
    const dateString = newDate.toDateString();
    const dateTimeString = newDate.toString();
    const shortDTString = dateString + " " + time;

    return {date, time, dateString, dateTimeString, shortDTString}
}

