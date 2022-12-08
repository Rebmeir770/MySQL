import {
    toJewishDate, toGregorianDate, formatJewishDateInHebrew, toHebrewJewishDate, JewishMonth, formatJewishDate 
} from "jewish-date";
import React from 'react'


export const JewishDate = (year:number, day:string, monthName:string, month:string) => {
  return (
    <div>
        const date = new Date("2020-01-01");
        const jewishDate = toJewishDate(date);
        console.log(jewishDate); // (${year} year: 5780, ${monthName} monthName: "Tevet", ${month} month: 4, day: 4);
  
        const jewishDateInEnglish = formatJewishDate(jewishDate);
        console.log(jewishDateInEnglish); // 4 Tevet 5780
  
       const jewishDateInHebrew = toHebrewJewishDate(jewishDate);
       console.log(jewishDateInHebrew); // (${day} day: "ד׳", ${monthName} monthName: "טבת", ${year} year: "התש״פ");
  
        const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
        console.log(jewishDateInHebrewStr); // ד׳ טבת התש״פ
  
        const date2 = toGregorianDate(${year} year: 5780, ${monthName} monthName: JewishMonth.Tevet, day: 4 );
        console.log(date2); // Wed Jan 01 2020 00:00:00 GMT+0200 (Israel Standard Time)
    </div>
  )
}

export default JewishDate