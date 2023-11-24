document.addEventListener('DOMContentLoaded', function () {
    // Get notification and sound elements
    var notification = document.getElementById('notification');
    var notificationSound = document.getElementById('notificationSound');
    
  
    // Show notification and play sound
    function showNotification() {
      notification.style.display = 'block';
      notificationSound.play();
      setTimeout(function () {
        hideNotification();
      }, 5000); // Hide notification after 5 seconds (adjust as needed)
    }
  
    // Hide notification
    function hideNotification() {
      notification.style.display = 'none';
    }
  
    // Trigger the notification (you can call this function whenever you want to show the notification)
    showNotification();
  });
  