// create a simple function to replace the innerhtml of the box you want to fill with the form when you click on the action

function show(change) {
    document.getElementById('box2').innerHTML = document.getElementById(change).innerHTML;
  }