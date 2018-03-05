var city,weather,temp,min_temp,max_temp,wind_speed,humidity;

$(document).ready(function() {
	$("#submitWeather").click(function() {
		var xmlHttp = new XMLHttpRequest();
		var cityname = document.getElementById("cityname").value;
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=metric" +
		"&appid=3cde70023f333ed0c85fca223f5de840";
		xmlHttp.open("GET", url, true);
		xmlHttp.send();
		xmlHttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(this.responseText);
				//var dataObj = JSON.stringify(myArr);
				
				city = data.name;
				weather = data.weather[0].main;
				temp = Math.ceil(data.main.temp);
				min_temp = data.main.temp_min;
				max_temp = data.main.temp_max;
				wind_speed = data.wind.speed;
				humidity = data.main.humidity;
				
				var cardObj = "";
				
				cardObj += "<div class='forecast-content'>";
				cardObj+= "<div class='location'>" +data.name +","+ data.sys.country +"</div>";
				cardObj+= "<div class='degree'>";
				cardObj+= "<div class='num'>"+temp +"<sup>o</sup>C" + "</div>";
				cardObj+= "<div class='forecast-icon'>" +"<img src='http://openweathermap.org/img/w/10d.png'>" + "</div>";
				cardObj+= "<div>";
				cardObj+= "<span>"+weather+"</span>";
				cardObj+= "<span>"+"<img src='images/icon-wind.png'>" +wind_speed +"Km/h"+"</span>";
				cardObj+= "<span>"+"<img src='images/icon-umberella.png'>" +humidity +"%"+"</span>";
				cardObj+= "<span>"+"<img src='images/icon-compass.png'>" + "East"+"</span>";
				cardObj+= "</div>";
				cardObj+= "</div>";
				cardObj+= "</div>";
				
				document.getElementById("card").innerHTML = cardObj;
				
				var button = document.createElement("BUTTON");
				
				button.innerHTML = "Add to favourites";
				button.onclick = function() {
					addToFavourites();

				}
				document.getElementById('addfav').replaceWith(button);
			}
		}
	});
});
	
function addToFavourites(){
	var xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
		}
	};
	var params = "city=" +city + "&weather=" +weather+ "&temp=" +temp+ "&min_temp=" +min_temp+ "&max_temp=" +max_temp+ "&wind_speed="+wind_speed + "&action=add";
	xmlhttp.open('GET',"http://localhost:8080/ClearSky/MainServlet?"+params, true);
	xmlhttp.send();
}

function readJSON(){
	//alert("data loaded");
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status==200){
			var obj=JSON.parse(request.responseText);
			document.getElementById("output").innerHTML = viewFavourites(obj);
		}
	};
	var params = "&action=view";
	request.open("GET", "http://localhost:8080/ClearSky/MainServlet?"+params,true);
	request.send();
}

function viewFavourites(data){
	var len = data.Count;
	var favObj = "";
	for(var i=0;i<len;i++){
		favObj+= "<div class='col-md-6'>";
		favObj+= "<div class='photo'>";
		favObj+= "<h3>"+(i+1)+ "</h3>";
		favObj+= "<div class='photo-details'>"
		favObj+= "City : " +data.cities[i].city + "<br>";
		favObj+= "Temperature : " +data.cities[i].temp +"<sup>o</sup>C" + "<br>";
		favObj+= "Min Temperature : " +data.cities[i].min_temp +"<sup>o</sup>C" + "<br>";
		favObj+= "Max Temperature : " +data.cities[i].max_temp +"<sup>o</sup>C" + "<br>";
		favObj+= "Weather : " +data.cities[i].weather + "<br>";
		favObj+= "Wind Speed : " +data.cities[i].wind_speed + " Km/h";
		favObj+= "</div>";
		favObj+= "</div>";
		favObj+= "</div>";
	}
	return favObj;
}