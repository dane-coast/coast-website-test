exports.localDateTime = (ts) => {
    if (typeof (ts) === 'string') {
        ts = parseInt(ts)
    }
    console.log(ts)
    const newDate = new Date(ts)
    const date = newDate.toLocaleDateString();
    const time = newDate.toLocaleTimeString();
    const dateString = newDate.toDateString();
    const dateTimeString = newDate.toString();
    const shortDTString = dateString + " " + time;
    console.log(date, time, shortDTString)

    return { date, time, dateString, dateTimeString, shortDTString }
}

