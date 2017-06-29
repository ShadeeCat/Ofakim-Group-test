function updateCounter() {
	var start = new Date('2017-06-01');
	var now = new Date();
	var end = new Date('2017-09-01');
	var interval = (end - now) / 1000; // seconds until end

	var days = Math.floor(interval / 24 / 60 / 60);
	var hours = Math.floor(interval / 60 / 60 % 24);
	var minutes = Math.floor(interval / 60 % 60);
	var seconds = Math.floor(interval % 60);

	var percentage = Math.floor((now - start) / (end - start) * 100) + '%';

	$('#days').text(days);
	$('#hours').text(hours);
	$('#minutes').text(minutes);
	$('#seconds').text(seconds);

	$('.progress-label .progress-strip').css('width', percentage);
	$('.progress-label .progress-percentage').text(percentage);
}

updateCounter();
var interval = setInterval(updateCounter, 1000);
