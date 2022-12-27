"use strict";
exports.__esModule = true;
exports.JewishDate = void 0;
var jewish_date_1 = require("jewish-date");
function JewishDate() {
    var date = new Date();
    var jewishDate = jewish_date_1.toJewishDate(date);
    console.log(jewishDate); // { year: 5780, monthName: "Tevet", month: 4, day: 4 }
    var jewishDateInEnglish = jewish_date_1.formatJewishDate(jewishDate);
    console.log(jewishDateInEnglish); // 4 Tevet 5780
    var jewishDateInHebrew = jewish_date_1.toHebrewJewishDate(jewishDate);
    console.log(jewishDateInHebrew); // { day: "ד׳", monthName: "טבת", year: "התש״פ" }
    var jewishDateInHebrewStr = jewish_date_1.formatJewishDateInHebrew(jewishDate);
    console.log(jewishDateInHebrewStr); // ד׳ טבת התש״פ
    var date2 = jewish_date_1.toGregorianDate({
        year: 5780,
        monthName: jewish_date_1.JewishMonth.Tevet,
        day: 4
    });
    console.log(date2); // Wed Jan 01 2020 00:00:00 GMT+0200 (Israel Standard Time)
    return (React.createElement("div", { className: "App" },
        React.createElement("h6", null, jewishDateInHebrewStr)));
}
exports.JewishDate = JewishDate;
exports["default"] = JewishDate;
