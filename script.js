
const APIKey = "0e50299080aaafa421693cd0f5fd5f89"
const city = "Armenia"
    
let btn = document.getElementById("btn_for_js");
let Line_for_js = document.getElementById("Line_for_js");
let inp = document.getElementById("inp_for_js");
let h1 = document.getElementById("h1")
let h2 = document.getElementById("h2")
let h3 = document.getElementById("h3")



btn.addEventListener ("click",()=>{
    const inp_value = inp.value
    Line_for_js.style.height = "500px ";
    Line_for_js.style.width = "700px";
    console.log(inp_value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp_value}&appid=${APIKey}&units=metric`)
    .then(response => response.json())
    .then((obj)=>{
        console.log(obj);

        if(obj.cod == 404){
            document.getElementById('image_404').style.display = "block";
            document.getElementById('cloud').style.display = "none";
            document.getElementById('C').style.display = "none";
            document.getElementById('Hum').style.display = "none";
            document.getElementById('wind').style.display = "none";
            document.getElementById('cloud').style.display = "none";
            h1.style.display = "none";
            h2.style.display = "none";
            h3.style.display = "none";
            
        }
        else if(obj.cod == 200){
            document.getElementById('image_404').style.display = "none";
            
            console.log(h1 , h2 , h3);
            document.getElementById('C').style.display = "block";
            document.getElementById('Hum').style.display = "block";
            document.getElementById('wind').style.display = "block";
            document.getElementById('cloud').style.display = "block";
            h1.style.display = "block";
            h2.style.display = "block";
            h3.style.display = "block";
            h1.innerHTML = obj.main.temp
            h2.innerHTML = obj.main.humidity
            h3.innerHTML = obj.wind.speed
        }
        if (obj.weather[0].main == 'Clouds') {
            document.getElementById('cloud').style.display = "block";}
           else if (data.weather[0].main == 'Clear') {
            document.getElementById('cloud').style.display = "none";
            document.getElementById('clear').style.display = "block";}
          
    })
    inp.addEventListener ("click", ()=>{
        Line_for_js.style.height = "100px ";
        Line_for_js.style.width = "600px";  

    }
    )
 })

   









