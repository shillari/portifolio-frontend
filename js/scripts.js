function animateBars() {
    var bars = document.querySelectorAll('.bar-fill');
    bars.forEach(function(bar) {
        var level = parseInt(bar.dataset.level); // Get the level as an integer
        var percentage = 0; // Initial percentage value
    
        // Define the interval for updating the percentage text
        var interval = setInterval(function() {
          percentage++; // Increment the percentage value
          bar.style.setProperty('--level', percentage); // Set custom property for width animation
          var percentageDisplay = bar.parentNode.querySelector('.percentage');
          percentageDisplay.textContent = percentage + '%'; // Update the percentage text
    
          if (percentage >= level) {
            clearInterval(interval); // Stop the interval when percentage reaches the skill level
          }
        }, 20); // Interval duration in milliseconds
    });
  }