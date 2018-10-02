function submitAnswer() {

	var radios = document.getElementsByName("choice"); // radio button called choise 
	var i = 0, // initialize i variable for radio button
		len = radios.length;
	var checked = false;
	var userAnswer;

	for (; i < len; i++) {
		if (radios[i].checked) {
			checked = true;
			userAnswer = radios[i].value;
		} // check which radio button is selected
	}
	// if user click submit button without selecting any option, alert box should be say "Please select the program you wish to join!".
	if (!checked) {
		alert("Please select the program you wish to join!");
		return;
	}
	// Correct answer
	if (userAnswer === "MSIS") {
		var parent = document.getElementById("content");
		var child = document.getElementById("p1");
		parent.removeChild(child); // remove the p1 tage contant from the html page
		document.getElementById("content").innerHTML = '<div class="class="list-group-item" ><ul class="msis">To be admitted to <u> Master of Science in Information Science (MSIS) </u> , set up a free account with the Apply Yourself Application Network and must attach the following: <li>A scholastic average of B (3.0 on a 4.0 scale) or better. </li> <li>Identify and seek the recommendations of two individuals (e.g., professors, employers, information professionals)</li> <li>Only scanned copies of official transcripts </li> <li>All Master of Science in Information Science <u>(MSIS) </u> applicants are required to submit a recent GRE score </li> <li>English Language Proficiency for international students</li> </ul></div>';
//display the information

	} else if (userAnswer === "MST") {
		document.getElementById("content").innerHTML = '<div class="class="list-group-item" ><ul class="mst">To be admitted to <u> Master of Science in Telecommunications (MST) </u> , set up a free account with the Apply Yourself Application Network and must attach the following: <li>A scholastic average of B (3.0 on a 4.0 scale) or better. </li> <li>Identify and seek the recommendations of two individuals (e.g., professors, employers, information professionals)</li> <li>Only scanned copies of official transcripts </li> <li>All Master of Science in Information Science <u>(MSIS) </u> applicants are required to submit a recent GRE score </li> <li>English Language Proficiency for international students</li> </ul></div>';
        //display the information        
        document.getElementsByTagName("content")[0].setAttribute("class", "mst"); // call the CSS class for mst




	} else if (userAnswer === "PHDIS") {
		document.getElementById("content").innerHTML = '<div class="class="list-group-item" ><ul class="phdis">To be admitted to <u> Doctor of Philosophy in Information Science  </u> , you have to have the following: <li>A masters degree from an accredited university, a recognized international program. </li> <li>Must submit as evidence of the ability to undertake doctoral work, an essay (not to exceed 1,000 words).</li> <li>All applicants are required to submit a recent score </li> <li>All Master of Science in Information Science <u>(MSIS) </u> Applicants are required to submit a recent GRE score </li> <li>English Language Proficiency for international students</li> </ul></div>';
 //display the information 
	} else if (userAnswer === "PHDCS") {
		document.getElementById("content").innerHTML = '<div class="class="list-group-item" ><ul class="phdcs">To be admitted to <u> PhD in Computer Science</u> , you have to have the following: <li>A masters degree from an accredited university, a recognized international program. </li> <li>Must submit as evidence of the ability to undertake doctoral work, an essay (not to exceed 1,000 words).</li> <li>All applicants are required to submit a recent score </li> <li>All Master of Science in Information Science <u>(MSIS) </u> Applicants are required to submit a recent GRE score </li> <li>English Language Proficiency for international students</li> </ul></div>';
 //display the information 
	} else {
		alert("Error"); // if an error occur "Error" will be displayed 
	}

}