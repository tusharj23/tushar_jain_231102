async function getLink(city_name) {
     let data = await fetch(`http://api.weatherapi.com/v1/current.json?key=dc12572d979446ee834153555240404&q=${city_name}&aqi=no`);
     console.log(await fetch(`http://api.weatherapi.com/v1/current.json?key=dc12572d979446ee834153555240404&q=${city_name}&aqi=no`)); 
    console.log(data)
    return await data.json();
}

const input_field = document.querySelector("#city_name");
const submit_button = document.querySelector("#button");
const cn = document.querySelector("#cn")
const cl = document.querySelector("#cl")
const ct = document.querySelector("#ct")
const fl = document.querySelector("#fl")

submit_button.addEventListener('click', async () => {
    let data = await getLink(input_field.value);
    cn.innerText = input_field.value;
    cl.innerText = data.location.country;
    ct.innerText = data.current.temp_c;
    fl.innerText = data.current.feelslike_c;
    // const card = document.querySelector('.card');
    // card.style.backgroundImage = `https://images.freeimages.com/images/large-previews/294/partly-cloudy-1173077.jpg(${getBackgroundImage(data.current.temp_c)})`;
});
// function getBackgroundImage(temperature) {
//     if (temperature < 10) {
//         return 'https://getwallpapers.com/wallpaper/full/6/a/9/1173035-cold-weather-wallpaper-1920x1200-1080p.jpg';
//     } else if (temperature >= 10 && temperature < 23) {
//         return 'https://th.bing.com/th/id/R.bf6357bb82a8b08c63250efb8bf6a512?rik=3P0PDfT2FGMoFg&riu=http%3a%2f%2fcdn2.insidermonkey.com%2fblog%2fwp-content%2fuploads%2f2015%2f11%2f04172941%2fcountryside-901965_1920-750x500.jpg&ehk=I8Y1esZ%2bD8wKF504Irwt4k9lkTrQHQfcXm2n4%2bgD8BM%3d&risl=&pid=ImgRaw&r=0';
//     } else {
//         return 'https://th.bing.com/th/id/OIP.MzV_yIH7HHe-DGEWRsdOqwHaFj?rs=1&pid=ImgDetMain';
//     }
// }
