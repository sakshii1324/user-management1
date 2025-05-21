document.getElementById('signup').addEventListener('submit', function (e) {
    e.preventDefault()
     var userName = document.getElementById('name').value
     var userEmail = document.getElementById('email').value
     var userPassword = document.getElementById('password').value
     
     const userDetails = {userName,userEmail,userPassword}
     localStorage.setItem("userDetails",JSON.stringify(userDetails))
     localStorage.getItem('userDetails')
     sessionStorage.setItem("userDetails",JSON.stringify(userDetails))
     sessionStorage.getItem('userDetails')
    
     console.log(userDetails)
 })

