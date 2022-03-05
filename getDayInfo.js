function getDayInfo(datestring) {
    let now = new Date("01.01.2022"); //условие в том, что дата подается в таком формате, одной строкой через точки (день/мес/год)
    alert(date);
    now.getFullYear(); //должно получить год 4-цифры
    now.getMonth(); //вовзращает месяц от 0 до 11, где 0 январь
    now.getDay(); //возвращает день недели - вс-пн || данные 3 уже есть в методах, стандартный номер недели возвращает 0-52 за весь год, а нужно конкретно для мес
    Date.prototype.getWeekOfMonth = function () {
        var date = new Date(this.getTime());
        date.setHours(0, 0, 0, 0);
        // Thursday in current week decides the year.
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        // January 4 is always in week 1.
        var week1 = new Date(date.getFullYear(), date.getMonth(), 4);
        // Adjust to Thursday in week 1 and count number of weeks from date to week1.
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7); //на форуме здесь как раз про нахождение номера в месяце, но хз как проверить
    }



}