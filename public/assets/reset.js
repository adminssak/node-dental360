window.onload = function () {
    document.getElementById("passwordButton").addEventListener("click", resetPassword);

    function resetPassword() {
        console.log("response");
        const domainId = document.getElementById('domain')
        const domain = domainId.getAttribute('domain')
        const typeId = document.getElementById('type')
        const type = typeId.getAttribute('type')
        const resetId = document.getElementById('resetId')
        const resetKey = resetId.getAttribute('resetId')
        const password = document.getElementById('password').value;
        if (password.length < 6) {
            document.getElementById("test").innerHTML = "Password should have atleast 6 characters";
            return;
        }

        fetch(`${domain}/api/v1/auth/reset-password/${resetKey}/${password}/${type}`)
            .then(function (response) {
                console.log(response);
                return response.json()
            }).then((res) => {
                console.log(res);
                if (!res || res.status === 'failure') {
                    document.getElementById("test").innerHTML = "Unable To Update Password Please Try Again";
                } else {
                    document.getElementById("test").innerHTML = "Password Updated Successfully";
                    document.getElementById('passwordButton').style.display = 'none';
                }
            })
    }


}
