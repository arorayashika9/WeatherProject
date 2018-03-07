<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1">
		
		<title>Weather Look</title>

		<!-- Loading third party fonts -->
		<link href="http://fonts.googleapis.com/css?family=Roboto:300,400,700|" rel="stylesheet" type="text/css">
		<link href="fonts/font-awesome.min.css" rel="stylesheet" type="text/css">

		<!-- Loading main css file -->
		<link rel="stylesheet" href="style.css">
		
		<!--[if lt IE 9]>
		<script src="js/ie-support/html5.js"></script>
		<script src="js/ie-support/respond.js"></script>
		<![endif]-->

	</head>

	<body>
		
		<div class="site-content">
			<div class="site-header">
				<div class="container">
					<a href="index.jsp" class="branding">
						
						<div class="logo-type">
							<h1 class="site-title">WeatherLook</h1>
							<small class="site-description">Weather Application</small>
						</div>
					</a>

					<!-- Default snippet for navigation -->
					<div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item current-menu-item"><a href="index.jsp">Home</a></li>
							<li class="menu-item"><a href="favourites.jsp">Favourites</a></li>
							
						</ul> <!-- .menu -->
					</div> <!-- .main-navigation -->

					<div class="mobile-navigation"></div>

				</div>
			</div> <!-- .site-header -->

			<div class="hero" data-bg-image="images/img3.jpg">
				<div class="container find-location">
						<input type="text" name="city" id="cityname" placeholder="Enter a City">
						<button id="submitWeather" class="btn btn-primary">Search City</button>
				</div>
			</div>
		
			<div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast" id="card">
						</div>
					</div>
					<div id="addfav" class="favbutton"></div>
	
				</div>
			</div>
	 			<div id="myDiv" class="floating-box addtofav"></div>  
			<br><br><br><br><br>
			<footer class="site-footer">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<form action="#" class="subscribe-form">
								<input type="text" placeholder="Enter your email">
								<input type="button" value="Submit">
							</form>
						</div>
						<div class="col-md-3 col-md-offset-1">
							<div class="social-links">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								
							</div>
						</div>
					</div>

					
				</div>
			</footer> <!-- .site-footer -->
		</div>
		
		<script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/plugins.js"></script>
		<script src="js/app.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	
	 <script src="weather.js"></script>
  
		
	</body>

</html>