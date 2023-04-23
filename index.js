for (var i = 0; i < 3; i++) {
      let abc = document.getElementsByTagName("button")[i];
      abc.addEventListener("click", function () {
        var text = this.innerHTML;
    
        audioPlayer(text);
        ani(text);
      });
    }
    
    function audioPlayer(text) {
      switch (text) {
        case "Birds":
          var audio = new Audio("./source/bird.mp3");
          audio.play();
          break;
        case "Rain":
          var audio = new Audio("./source/rain.mp3");
          audio.play();
          break;
        case "Sprinkler":
          var audio = new Audio("./source/sprinkle.mp3");
          audio.play();
      }
    }
    
    
    
    
    