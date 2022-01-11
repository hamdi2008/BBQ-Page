const emailCollector = document.getElementById("emailCollector")

const mainContent = document.getElementById("mainContent")

emailCollector.addEventListener("submit", function() {
    event.preventDefault()
    const ourFormData = new FormData(event.target)
    const userFirstName = ourFormData.get("firstName")
    const userEmailAddress = ourFormData.get("emailAddress")
    let ourUpdatedMessage = `
        <h2>Congratulations, ${userFirstName}! </h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">We'll never share your information without your permission</p>
        
        `
        let updatedMainContent = document.getElementById("mainContent")
        updatedMainContent.innerHTML = ourUpdatedMessage

})