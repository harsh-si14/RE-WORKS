function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById("name").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation
    if (!name || !contactNumber || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Send form data to the server (dummy implementation)
    var formData = {
      name: name,
      contactNumber: contactNumber,
      email: email,
      subject: subject,
      message: message
    };
  
    localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to response page
    window.location.href = "response.html";
    
}
  