 async function getweather(city){
       var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d2620260bc65f1da55df07eafb0b41b`)
       var data = await res.json();
       console.log(data)
       let temp = document.querySelector(".temp")
       let humidityvalue = document.querySelector(".humidity-value")
      let windvalue = document.querySelector(".wind-value")
      let cityval = document.querySelector(".city")
       windvalue.innerHTML = data.wind.speed;
       temp.innerHTML = data.main.temp;
       humidityvalue.innerHTML = data.main.humidity;
       cityval.innerHTML = data.name;

 }

 getweather();
 let input = document.querySelector(".input")
 let btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
    getweather(input.value);
    console.log(input.value);
    
})


 



