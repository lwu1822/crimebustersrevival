$(document).ready(function() {
	// API endpoint URL
	const apiUrl = "http://localhost:8085/api/trivia";

	// Get the question and display it on the page
	$.getJSON(apiUrl, function(data) {
		$("#question").text(data.question);
	});

	// Handle form submission
	$("#submit").click(function() {
		// Get the answer from the input field
		let answer = $("#answer").val();

		// Send the answer to the API endpoint
		$.post(apiUrl, { answer: answer }, function(data) {
			// Display the result on the page
			$("#result").text(data.result);
		});
	});
});
