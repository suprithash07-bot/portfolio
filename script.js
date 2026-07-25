emailjs.init({
    publicKey: "lZWFe6YmRrvytq1Sl",
});

window.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.send(
    "service_krhgv9c",
    "template_i64h00v",
    {
        title: "Portfolio Contact",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
)

            .then(function () {
                alert("Message Sent Successfully!");
                form.reset();
            })

            .catch(function (error) {

    console.log(error);

    alert("Status: " + error.status + "\nText: " + error.text);

});
        });

    }

});