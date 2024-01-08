"use script"
/* 

Samira Mohamud - Better@Home JS/JQuery File -

1. Initialized email pattern by creating emailPattern regex for email validation
2. Initialized phone pattern by creating phonePattern regex for phone number validation
3. Set focus on #firstName when document is ready
4. Set up event handler for #newsletter_form
5. First Name Validation:
   - If conditions are violated, validate and display errors for #firstName.
   - If conditions are met, clear errors and update #firstName value.4. 
6. Last Name Validation:
   - If conditions are violated, validate and display errors for #lastName.
   - If conditions are met, clear errors and update #lastName value.
7. Email Validation:
   - If conditions are violated, validate and display errors for #email.
   - If conditions are met, clear errors and update #email value.
8. Phone Validation:
   - If conditions are violated, validate and display errors for #phone.
   - If conditions are met, clear errors and update #phone value.
9. Prevent Form Submission if Not Valid:
   - If any validation fails, prevent form submission.

*/

$(document).ready (() => {
	
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const phonePattern = /^\d{10}$/;

	$("#firstName").focus();

	$("#newsletter_form").submit( evt => {

        let isValid = true;

        const firstName = $("#firstName").val().trim();

        if (firstName == "") {
            $("#firstName").next().text("This field is required.");
            isValid = false;
        } else {
            $("#firstName").next().text("");
        }
        $("#firstName").val(firstName);


        const lastName = $("#lastName").val().trim();

        if (lastName == "") {
            $("#lastName").next().text("This field is required.");
            isValid = false;
        } else {
            $("#lastName").next().text("");
        }
        $("#lastName").val(lastName);


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

        const phone = $("#phone").val().trim();
        if (phone == "") { 
            $("#phone").next().text("This field is required.");
            isValid = false;
        } else if ( !phonePattern.test(phone) ) {
            $("#phone").next().text("Must be a valid phone number.");
            isValid = false;
        } else {
            $("#phone").next().text("");
        }
        $("#phone").val(phone); 

        if (!isValid) {
            evt.preventDefault();
        } 

    });

});