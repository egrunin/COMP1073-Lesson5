"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

	var paragraphData = ["First Paragraph Stuff",
						"Second Paragraph Stuff",
						"Third Paragraph Stuff",
						"Fourth Paragraph Stuff"];
	
	paragraphData[4] = "Fifth Paragraph Stuff";
	paragraphData[5] = "Sixth Paragraph Stuff";
	
	paragraphData.push("Seventh Paragrapg Stuff");
	
    console.log("App Started...");
	
	/*
	console.log(paragraphData[0]);
	console.log(paragraphData[1]);
	console.log(paragraphData[1]);
	console.log(paragraphData[3]);
	console.log(paragraphData[5]);
	*/
	
	var paragraphDataLength = paragraphData.length;
	for (var index = 0; index < paragraphDataLength; index++) {
		console.log(paragraphData[index]);
		
	}

    //declared a named function way
    
    function replaceFirstParagraph() {
        console.log("inside replaceFirstParagraph function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";
    }

    // call the replaceFirstParagraph function
    replaceFirstParagraph();


})();