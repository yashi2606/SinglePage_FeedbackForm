document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulate form submission
    document.getElementById("success-message").style.display = "block";
});

// 2nd part
function toggleExpand(element) {
    const alreadyExpanded = element.classList.contains('expanded');
  
    // Collapse all boxes first
    document.querySelectorAll('.feature-box').forEach(box => box.classList.remove('expanded'));
  
    // Expand the clicked box if it wasn't already expanded
    if (!alreadyExpanded) {
      element.classList.add('expanded');
    }
  }
  