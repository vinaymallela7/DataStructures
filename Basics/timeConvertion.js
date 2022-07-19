function convertTime(time){
    let timeArr = time.split(':');
    let [ hours, min, sec ] = timeArr;
    hours = hours - '00';
    let meridian = 'PM';
    if(hours < 12 ){
        meridian = 'AM';
    }
    if(hours == 24){
        timeArr[0] = '00';
        console.log(timeArr.join(':')+"AM");
        return;
    }
    if(hours == 12){
        console.log(timeArr.join(':')+meridian);
        return;
    }

    hours %= 12;
    timeArr[0] = hours;
    console.log(timeArr.join(':')+meridian);
}

convertTime('24:23:25');