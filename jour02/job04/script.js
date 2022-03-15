var pressed = "";

document.addEventListener('keydown', (event) => {
    var name = event.key;
    pressed = name
    // Alert the key name 
    var element = document.querySelector('#keylogger')
    element.innerText='lettres:' + pressed
    // alert(`Key pressed ${name}`);
  }, false);

  