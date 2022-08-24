const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.querySelector("form");

const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => 
{
    const errors = [];
    console.log("Submit");

    if(username.value.trim() === "")
    {
        errors.push("⚠️Username required<br>");
    }

    if (password.value.length === 0)
    {
        errors.push("⚠️Password required<br>");
    }
    else if (password.value.length < 6)
    {
        errors.push("⚠️Password must be at least 6 characters<br>")
    }

    if (errors.length > 0)
    {
        e.preventDefault();
        errorMessage.toggleAttribute('visible');
        errorMessage.innerHTML = errors.join('');
    }
    else
    {
        errorMessage.toggleAttribute('hidden')
    }

})