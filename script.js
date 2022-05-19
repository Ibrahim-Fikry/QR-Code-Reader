const wrapper = document.querySelector(".wrapper"),
    form = wrapper.querySelector("form"),
    filinp = form.querySelector("input");

function fetchrequest(formdata) {
    //sending post request to qr server api with passing
    // form data as body and getting response from it
    fetch("http: //api.qrserver.com/v1/read-qr-code/", {
        method: "POST",
        body: formdata
    }).then(res => res.json()).then(result => {
        wrapper.classList.add("active")
        console.log(result);
    })
}

filinp.addEventListener("change", e => {
    let file = e.target.files[0]; //getting user selected file 
    let formdata = new FormData() //create a new form data opject 
    formdata.append("file", file) //adding selected file to formdata
    fetchrequest(formdata);


})

form.addEventListener("click", () => filinp.click())