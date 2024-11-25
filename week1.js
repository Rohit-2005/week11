
    document.getElementById("button").addEventListener('click', () => {
        const str = document.getElementById("name").value;
        if (str.length > 25) {
            alert("Name cannot be more than 25 characters");
            return; // Prevent further execution
        }
        alert("You have successfully registered");
    });
