

const { localDateTime } = require('./localDateTime')


test = () => {
    let dt = localDateTime(1620746554955)
    console.log(dt)
    return dt
}

test();