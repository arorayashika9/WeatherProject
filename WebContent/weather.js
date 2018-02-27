
function getData(){
	var xmlHttp = new XMLHttpRequest();
	var word=document.getElementById("data").value;
	var url ="http://api.openweathermap.org/data/2.5/weather?q="+word+"&appid=4f51cc3581658734467f957800c7625d";
	xmlHttp.open("GET",url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange = function() {
	   if(this.readyState == 4 && this.status == 200){
	       var myArr= JSON.parse(this.responseText);
	       var dataObj= JSON.stringify(myArr);
	       //document.write(dataObj);
	      document.getElementById("show").innerHTML ="Weather Condition: "+"<img src='http://openweathermap.org/img/w/"+myArr.weather[0].icon+".png'>"+myArr.weather[0].description+"<br>"+"Name: "+myArr.name+"<br>"+"Max-Temp: "+myArr.main.temp_max+"<br>"+"Min-Temp: "+myArr.main.temp_min+"<br>"+"Humidity: "+myArr.main.humidity+"<br>" ;
	     
	   }
	};
	}