// This will get the event listener to activate when the button with id report result is clicked, which will acivate the repeatText function.
document.getElementById('repeat').addEventListener('click', repeatText)

// This is a function that will create an alert for the value of the input.
function repeatText () {
  alert(document.getElementById('input').value)
}
