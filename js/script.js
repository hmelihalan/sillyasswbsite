// Function for the "Yes" button
function sayYes() {
  // Show the "Yay" message when clicking Yes
  document.getElementById("responseMessage").textContent = "Yay! Can’t wait for our date! ❤️";
  document.getElementById("responseMessage").style.display = "block";

  // Show the YouTube video in a responsive container when "Yes" is clicked
  document.getElementById("gifContainer").innerHTML = `
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/GjFVG_9hMbo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  `;
}

// Function for the "No" button
function sayNo() {
  // Show the "No" message along with "Try again" message
  document.getElementById("responseMessage").textContent = "Nuh-uh 🤓☝️ ,you can’t say no! Try again! 😊";
  document.getElementById("responseMessage").style.display = "block";

  // Show a different GIF when "No" is clicked
  document.getElementById("gifContainer").innerHTML = '<img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRiamliNjg2MWdzdW1qOHhhMmU2cHJnbXBnOWNoamc5M25iYnV3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IglQkzvuewsoD6E1Pj/giphy.gif" alt="Exciting animation" class="gif-display">';
}
