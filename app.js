function getNamazTimings() {
  const iCity = document.querySelector("#iCity").value;

  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity?city=${iCity}&country=""&method=1`
    )
    .then(function (response) {
      const data = response.data;
      console.log(data);
      document.querySelector(
        "#day"
      ).innerText = `Day : ${data.data.date.gregorian.weekday.en}`;
      document.querySelector(
        "#namaz1"
      ).innerText = `Fajr : ${data.data.timings.Fajr}`;
      document.querySelector(
        "#namaz2"
      ).innerText = `Dhuhr :  ${data.data.timings.Dhuhr}`;
      document.querySelector(
        "#namaz3"
      ).innerText = `Asr : ${data.data.timings.Asr}`;
      document.querySelector(
        "#namaz4"
      ).innerText = `Maghrib: ${data.data.timings.Maghrib}`;
      document.querySelector(
        "#namaz5"
      ).innerText = `Isha : ${data.data.timings.Isha}`;
    });
}
