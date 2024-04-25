//your JS code here. If required.
document.getElementById('fname').addEventListener('blur', function() {
    // Get the current value of the input field
    let currentValue = this.value;

    // Convert the value to uppercase
    let newValue = currentValue.toUpperCase();

    // Set the new value of the input field
    this.value = newValue;
});