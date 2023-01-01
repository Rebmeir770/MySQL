import {
  toJewishDate,
  toGregorianDate,
  formatJewishDateInHebrew,
  formatJewishDate,
  toHebrewJewishDate,
  JewishMonth
} from "jewish-date";
import '../styles/jewishdate.scss';



export  function JewishDate() {
  const date = new Date();
  const jewishDate = toJewishDate(date);
  //console.log(jewishDate); // { year: 5780, monthName: "Tevet", month: 4, day: 4 }

  const jewishDateInEnglish = formatJewishDate(jewishDate);
  //console.log(jewishDateInEnglish); // 4 Tevet 5780

  const jewishDateInHebrew = toHebrewJewishDate(jewishDate);
  //console.log(jewishDateInHebrew); // { day: "ד׳", monthName: "טבת", year: "התש״פ" }

  const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
  //console.log(jewishDateInHebrewStr); // ד׳ טבת התש״פ

  const date2 = toGregorianDate({
    year: 5780,
    monthName: JewishMonth.Tevet,
    day: 4
  });
  //console.log(date2); // Wed Jan 01 2020 00:00:00 GMT+0200 (Israel Standard Time)
  return (
    <div className="Appjw">
      <h6>{jewishDateInHebrewStr}</h6>

    </div>
  );
}

export default JewishDate;


