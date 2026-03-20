function getCurrentTime(){
    const now = dayjs();
    const currentHour = now['$H']
    const currentMinute = now['$m']
    const currentSecond = now['$s']
    const currentTime = (`${currentHour}:${currentMinute}:${currentSecond}`)
    console.log(currentTime)
    console.log(now)
    document.getElementById('output').innerText = `The current time is ${currentTime}`
}