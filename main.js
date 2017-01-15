$('#searchBox').keyup(function(event){
	sendSearchAPIRequest(this.value);
})

$('#searchBox').keypress(function (event){
	if (event.which == 13){
		event.preventDefault();
	}
})

const phBase = 'http://www.pornhub.com/webmasters/';

function sendSearchAPIRequest(searchBoxText){
	console.log(searchBoxText);
	const baseUrl = phBase + 'search?id=44bc40f3bc04f65b7a35&ordering=mostviewed&search=';
	const url = baseUrl + searchBoxText;

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
		crossDomain: true,
		success: function(data){
			console.log(data);
			console.log(data.videos[0].video_id);
			console.log(data.videos[0].title);
			if (data.videos.length != 0) {
				const videoId = data.videos[0].video_id;
				$("#videoContainer").html(generateIframeHTMLFor(videoId));
			}	
		}
	});
}

function generateIframeHTMLFor(id){
	var html = "<iframe src=\"http://www.pornhub.com/embed/" + id 
				+ "\" frameborder=\"0\" width=\"608\" height=\"468\""
				+ " scrolling=\"no\" autoplay=\"1\"> </iframe>";
	console.log(html);
	return html
}