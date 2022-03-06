function getDayInfo(datestring) {
    var tmp1 = datestring.substr(0,3);
    var tmp2 = datestring.substr(3,3);
    var tmp3 = datestring.substr(6,4);
    var date = new Date(tmp2+tmp1+tmp3);
    var year = date.getFullYear();
    var first = new Date(date.getFullYear(),date.getMonth(),1);
    var numberOfDays = Math.floor((date - first) / (24 * 60 * 60 * 1000));
    var week = Math.ceil(( 2 + numberOfDays) / 7 );
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var dayName = days[date.getDay()];
    var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var monthName = months[date.getMonth()];
    console.log(monthName);
    return dayName+', '+week+' неделя '+monthName+' '+year+' года';
    }
    