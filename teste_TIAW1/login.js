document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Fetch user data from JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Check if user exists and credentials are correct
            const user = data.find(user => user.username === username && user.password === password);
            if (user) {
                alert("Login successful!");
                // Redirect user to dashboard or another page
                // window.location.href = "dashboard.html";
            } else {
                alert("Invalid username or password!");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
