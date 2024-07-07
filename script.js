const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
  const APIkey = "7d2620260bc65f1da55df07eafb0b41b";
  const city = document.querySelector(".search-box input").value;

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}`
  ).then(response => response.json())
   
    .then((json) => {
        if(json.cod == '404') {
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        container.style.height = '555px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error404.classList.remove('active');

      const img = document.querySelector(".weather img");
      const temp = document.querySelector(".weather .temp");
      const description = document.querySelector(".weather .description");
      const humidity = document.querySelector(".weather-details .humidity span");
      const wind = document.querySelector(".weather-details .wind span");

      console.log(json.weather[0].main); // Log the weather condition

      switch (json.weather[0].main) {
        case "Clear":
          img.src = "images/clear.webp";
          break;
        case "Rain":
          img.src = "images/rainy1.png";
          break;
        case "Snow":
          img.src = "images/snow.jpg";
          break;
        case "Clouds":
          img.src = "images/cloud.png";
          break;
        case "Mist":
          img.src = "images/mist.jpg";
          break;
        case "Haze":
          img.src = "images/haze1.png";
          break;
        default:
          img.src = "images/cloud.png";
      }

      temp.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
      description.innerHTML = json.weather[0].description;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${json.wind.speed}Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
    })
    .catch((error) => {
      alert(error.message);
    });
});
