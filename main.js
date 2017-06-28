function updateCounter() {
	var now = new Date();
	var end = new Date('2017-09-30');
	var interval = (end - now) / 1000; // seconds until end

	var days = Math.floor(interval / 24 / 60 / 60);
	var hours = Math.floor(interval / 60 / 60 % 24);
	var minutes = Math.floor(interval / 60 % 60);
	var seconds = Math.floor(interval % 60);

	$('#days').text(days);
	$('#hours').text(hours);
	$('#minutes').text(minutes);
	$('#seconds').text(seconds);
}

updateCounter();
var interval = setInterval(updateCounter, 1000);
