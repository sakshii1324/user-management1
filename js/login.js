document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault()
     
     var userEmail = document.getElementById('email').value
     var userPassword = document.getElementById('password').value
     // console.log(userName,userEmail,userPassword)
     const userDetails = {userEmail,userPassword}
     localStorage.setItem("userDetails",JSON.stringify(userDetails))
     console.log(localStorage.getItem('userDetails'))
     
 })