// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the enrollment form element by its ID
    const form = document.getElementById('enrollmentForm');
    
    // Add an event listener for the form's submit event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get da values from the form fields
        const courseTitle = document.getElementById('courseTitle').value;
        const name = document.getElementById('name').value;

        // Get the references to thank you message container and elements
        const thankYouContainer = document.getElementById('thankYouContainer');
        const thankYouMessage = document.getElementById('thankYouMessage');
        const countdownTimer = document.getElementById('countdown-timer');

        // Hide the form and show the thank you container
        form.style.display = 'none';
        thankYouContainer.style.display = 'block';
        thankYouMessage.innerText = `You are now enrolled in ${courseTitle}, We can't wait to see you ${name}!`; // Show the thank you message

         // The start dates for different courses
        const courseStartDates = {
            "Higher Certificate": new Date("2024-09-01"),
            "Diploma in Technology": new Date("2024-10-01"),
            "Bachelor in Technology": new Date("2024-11-01"),
            "Bachelor of Computing": new Date("2024-12-01")
        };

        // Check if the course start date is available and display the countdown if it is
        const startDate = courseStartDates[courseTitle];
        if (startDate) {
            const now = new Date();
            const timeDiff = startDate - now; // Time difference in milliseconds
            const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Converting milliseconds to days
            countdownTimer.innerText = `The course will start in ${daysLeft} days.`; // Display the countdown timer 
        } else {
            countdownTimer.innerText = `Course start date information not available.`; // Handles cases with no start date
        }
    });
});
