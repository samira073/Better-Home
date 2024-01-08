"use script"
/* 

Samira Mohamud - Better@Home JS/JQuery File -

1. Initialized email pattern by creating emailPattern regex for email validation
2. Set focus on #fullName when document is ready
3. Set up event handler for #contact-form
4. Full Name Validation:
   - If conditions are violated, validate and display errors for #fullName.
   - If conditions are met, clear errors and update #fullName value.
5. Email Validation:
   - If conditions are violated, validate and display errors for #email.
   - If conditions are met, clear errors and update #email value.
6. Prevent Form Submission if Not Valid:
   - If any validation fails, prevent form submission.

*/


$(document).ready (() => {
	
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

	$("#fullName").focus();

	$("#contact-form").submit( evt => {

        let isValid = true;

        const fullName = $("#fullName").val().trim();

        if (fullName == "") {
            $("#fullName").next().text("This field is required.");
            isValid = false;
        } else if (!fullName.includes(" ")) {
            $("#fullName").next().text("Must enter both first and last name.");
            isValid = false;

        } else {
            $("#fullName").next().text("");
        }
        $("#fullName").val(fullName);


        const email = $("#email").val().trim();
        
        if (email == "") { 
            $("#email").next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email").next().text("");
        }
        $("#email").val(email); 


        if (!isValid) {

            evt.preventDefault();

        }
    });

});