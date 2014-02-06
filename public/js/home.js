// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#introBox").hide();
	$("#preCanvas").click(showInstructions);
	$("#introBox").click(hideInstructions);
	console.log("Javascript connected!");
}


function showInstructions() {
	$("#introBox").show();
	$("#preCanvas").hide();
	// var context = $("#breathCanvas")[0].getContext('2d');
	// context.font="22px verdana";
 //  	context.strokeText("Stroke Text, 22px, veranda", 20, 50);
}

function hideInstructions() {
	$("#introBox").hide();
	$("#preCanvas").show();
	// var context = $("#breathCanvas")[0].getContext('2d');
	// context.font="22px verdana";
 //  	context.strokeText("Stroke Text, 22px, veranda", 20, 50);
}
