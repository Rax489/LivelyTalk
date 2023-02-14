form.addEventListener("submit", () => {
    const login = {
        email: email.value,
        password: password.value
    }

    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers:{
            "Content-type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if(data.status == "error"){
                    success.style.display = "none"
                    error.style.display = "block"
                    error.innerLine = data.error
            }else{
                error.style.display = "none"
                    success.style.display = "block"
                    success.innerLine = data.success
            }
        })
});