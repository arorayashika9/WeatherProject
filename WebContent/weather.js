$(document).ready(function() {
	$("#search").click(function() {
		var xmlHttp = new XMLHttpRequest();
		var word = document.getElementById("data").value;
		var url = "http://api.openweathermap.org/data/2.5/weather?q=" + word
				+ "&appid=4f51cc3581658734467f957800c7625d";
		xmlHttp.open("GET", url, true);
		xmlHttp.send();
		xmlHttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var myArr = JSON.parse(this.responseText);
				var dataObj = JSON.stringify(myArr);
				city = myArr.name;
				min_temp = myArr.main.temp_min;
				max_temp = myArr.main.temp_max;
				humidity = myArr.main.humidity;
				document.getElementById("show").innerHTML =  "Name: "
						+ myArr.name + "<br>" +"Max-Temp: " + myArr.main.temp_max
						+ "<br>" + "Min-Temp: " + myArr.main.temp_min + "<br>"
						+ "Humidity: " + myArr.main.humidity + "<br>"+ "Weather Condition: "
						+  myArr.weather[0].description +"<img src='http://openweathermap.org/img/w/"
						+ myArr.weather[0].icon + ".png'>"
						+ "<br>";

				var btn = document.createElement("BUTTON");
				
				btn.innerHTML = "Add to Fav";
				btn.onclick = function() {
					addtofav();

				}
				document.getElementById('addfav').appendChild(btn);
			}
		}
	});
});


function addtofav() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {

		if (this.readyState == 4 && this.status == 200) {
			var myArr = this.responseText;
			if(document.getElementById("mydiv")){
				document.getElementById("mydiv").innerHTML = myArr;
			}
		}
	};

	var params = "city=" + city + "&min_temp=" + min_temp + "&max_temp="
			+ max_temp + "&humidity=" + humidity + "&action="+ add;
	xmlhttp.open('GET', "http://localhost:8080/weatherReports/MainServlet?"
			+ params, true);
	xmlhttp.send();
}




function getfav(){
	var xmlHttp = new XMLHttpRequest();
	var url="http://localhost:8080/weatherReports/Favourites?";
	xmlHttp.open("GET",url, true);
    xmlHttp.send();
    
    
    xmlHttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
        	var myArr= JSON.parse(this.responseText);
            var dataObj= JSON.stringify(myArr);
            alert(dataObj);
        }
    }
}
