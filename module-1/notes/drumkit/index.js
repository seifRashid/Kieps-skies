document.addEventListener("DOMContentLoaded", function () {
    // Function to play sound
    function playSound(key) {
        let audio;
        switch (key) {
            case "w":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "a":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            case "s":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "d":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            case "j":
                audio = new Audio("sounds/tom-2.mp3");
                break;
            case "k":
                audio = new Audio("sounds/tom-3.mp3");
                break;
            case "l":
                audio = new Audio("sounds/tom-4.mp3");
                break;
            default:
                return;
        }
        audio.play();
    }

    // Adding event listeners to buttons
    document.querySelectorAll(".drum").forEach(button => {
        button.addEventListener("click", function () {
            let key = this.innerText;
            playSound(key);
        });
    });

    // Adding event listener for keyboard keys
    document.addEventListener("keydown", function (event) {
        playSound(event.key);
    });
});
