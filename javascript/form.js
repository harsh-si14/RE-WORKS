// function submitForm(event) {
//     event.preventDefault(); // Prevent form submission
  
//     // Get form values
//     var name = document.getElementById("name").value;
//     var contactNumber = document.getElementById("contactNumber").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;
  
//     // Perform form validation
//     if (!name || !contactNumber || !email || !subject || !message) {
//       alert("Please fill in all fields.");
//       return;
//     }
  
//     // Send form data to the server (dummy implementation)
//     var formData = {
//       name: name,
//       contactNumber: contactNumber,
//       email: email,
//       subject: subject,
//       message: message
//     };
  
//     localStorage.setItem("formData", JSON.stringify(formData));

//   // Redirect to response page
//     window.location.href = "response.html";
    
// }
  

function sendEmail() {
  // event.preventDefault(); // Prevent form submission

  // Get form values
  // var name = document.getElementById("name").value;
  // var contactNumber = document.getElementById("contactNumber").value;
  // var email = document.getElementById("email").value;
  // var subject = document.getElementById("subject").value;
  // var message = document.getElementById("message").value;

  // // Perform form validation
  // if (!name || !contactNumber || !email || !subject || !message) {
  //   alert("Please fill in all fields.");
  //   return;
  // }

  // Construct URL parameters
  // var params = "?name=" + encodeURIComponent(name)
  //   + "&contactNumber=" + encodeURIComponent(contactNumber)
  //   + "&email=" + encodeURIComponent(email)
  //   + "&subject=" + encodeURIComponent(subject)
  //   + "&message=" + encodeURIComponent(message);

  // Display pop-up message
  // alert("Thank you! Your form has been submitted successfully.");

  // Clear form fields
  Email.send({
    Host : "smtp.gmail.com",
    Username : "harshvardhan7022002@gmail.com",
    Password : "Harsh#123",
    To : 'singhrajkeshar@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("subject").value,
    Body : "Name :" + document.getElementById("name").value + 
    "<br> Email :" + document.getElementById("email").value + 
    "<br> Subject :" + document.getElementById("subject").value + 
    "<br> Massage :" + document.getElementById("massage").value
  }).then(
    message => alert("Thank you! Your form has been submitted successfully.")
  );

}
