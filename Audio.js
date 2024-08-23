    // Sound
    function Goodtime()
    {
        mySound = new sound("goodtimes.mp3");
        mySound.play();
    }

    // create sound
    function sound(src)
    {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.play = function() {this.sound.play();}
        }

    //stop music
    function stopMusic(){
        window.location.reload(); // stop playing music by refreshing page
    }

function reverse()
{
    var str1 = document.getElementById("firstStr").value;
    var splitStr1 = str1.split("");
    
    var reverse = splitStr1.reverse();
    
    var joinStr1 = reverse.join("");
    
    if (str1 == joinStr1)  //results
    {
        document.getElementById("palchkr").innerHTML = "You did it! This is a palindrome! 🥳";
    }
    else  //try again msg
    {
        document.getElementById("palchkr").innerHTML = "Sorry, Try Again 😔";
    }
}
    // Get the image element
    const img = document.getElementById("movingImage");

    // Set initial position and movement direction
    let positionX = 0;
    let positionY = 0;
    let directionX = 1; //1 means moving right, -1 means moving left
    let directionY = 1; //1 means moving down, -1 means moving up
    const speed = 2; //Speed of movement in pixels

    //Move the image
    function moveImage() {
        //Get the window dimensions
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        //Update position
        positionX += directionX * speed;
        positionY += directionY * speed;

        //Change direction if image hits the edge 
        if (positionX + img.clientWidth >= windowWidth || positionX <= 0) {
            directionX *= -1;
        }
        if (positionY + img.clientHeight >= windowHeight || positionY <= 0) {
            directionY *= -1;
        }

        //Apply new position to image
        img.style.left = positionX + "px";
        img.style.top = positionY + "px";
    }

    //Set an interval to move the image every 10 milliseconds
    setInterval(moveImage, 10);
