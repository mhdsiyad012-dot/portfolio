function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
     
        message: document.querySelector("#message").value,
    };
    

    emailjs
    .send("service_jhrgp0j", "template_mre6h7n", templateParams)
    .then(() => {
        alert("Email sent successfully!");
    })
    .catch((error) => {
        console.log("Error sending email:", error);
        alert("Failed to send email. Please try again.");
    });
}