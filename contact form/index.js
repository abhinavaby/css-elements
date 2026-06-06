function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    const serviceID="YOUR_EMAILJS_SERVICE_ID";
    const templateID="YOUR_EMAILJS_TEMPLATE_ID";
    emailjs
  .send(serviceID, templateID, params)
  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    console.log(res);

    alert("Your message sent successfully");
  })
  .catch((err) => alert("error"));
};

