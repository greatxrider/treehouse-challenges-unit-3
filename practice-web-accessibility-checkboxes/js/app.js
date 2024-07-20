// Step 1: Select all checkbox inputs in the document
const checkboxInputs = document.querySelectorAll('[type="checkbox"]');

// Step 2: Loop through each checkbox
checkboxInputs.forEach((checkbox) => {
  // Step 3: Add an event listener for the 'focus' event to each checkbox
  // Step 3.1: When a checkbox gains focus, add the 'focus' class to the checkbox
  // Step 3.2: Also add the 'focus' class to the parent label element
  checkbox.addEventListener('focus', (e) => {
    checkbox.classList.add('focus');

    if (checkbox.parentElement) {
      checkbox.parentElement.classList.add('focus');
    }
  })

  // Step 4: Add an event listener for the 'blur' event to each checkbox
  // Step 4.1: When a checkbox loses focus, remove the 'focus' class
  // Step 4.2: Also remove the 'focus' class from the parent label element
  checkbox.addEventListener('blur', (e) => {
    checkbox.classList.remove('focus');
    if (checkbox.parentElement) {
      checkbox.parentElement.classList.remove('focus');
    }
  })
})
