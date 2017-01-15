$('#searchBox').keyup(function(event){
	//console.log("wat");
})

$('#searchBox').keypress(function (event){
	if (event.which == 13){
		event.preventDefault();
		sendSearchAPIRequest(this.value);
	}
})

function sendSearchAPIRequest(searchBoxText){
	console.log(searchBoxText);

	var url = 'http://www.pornhub.com/webmasters/search?id=44bc40f3bc04f65b7a35&search=big&tags[]=Teen&thumbsize=medium';

	$.ajax({
		type: 'GET',
		url: url,
		dataType: 'json',
		crossDoain: true,
		success: function(data){
			console.log(data);
		}
	});
}