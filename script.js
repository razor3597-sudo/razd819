function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function searchSidebar() {
    let input = document.getElementById('sidebarSearch').value.toLowerCase();
    let items = document.getElementById('mySidebar').getElementsByTagName('a');

    for (let i = 1; i < items.length; i++) { // Start from 1 to skip the close button
        if (items[i].innerHTML.toLowerCase().includes(input)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
// script.js
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const commentInput = document.getElementById("commentInput");
    const commentText = commentInput.value; // Get the comment text

    if (commentText.trim() !== "") { // Ensure it's not empty
        const commentsList = document.getElementById("commentsList");

        // Create a new div for the comment
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.textContent = commentText; // Set the comment text

        // Append the new comment to the comments list
        commentsList.appendChild(commentDiv);

        // Clear the input field
        commentInput.value = '';
    }
});
// Initialize a variable to hold the count
let count = 0;

// Get references to the button and the count display
const button = document.getElementById('clickButton');
const displayCount = document.getElementById('count');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Increment the count variable
    count++;

    // Update the display with the new count
    displayCount.textContent = count;
});
