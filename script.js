setTimeout(() => {
    document.getElementById("box").innerText = "10";   
    var style =  document.getElementById("box");
    style.className = "font-effect-neon";
    setTimeout(() => {
      document.getElementById("box").innerText = "9";
      setTimeout(() => {
        document.getElementById("box").innerText = "8";
        setTimeout(() => {
          document.getElementById("box").innerText = "7";
          setTimeout(() => {
            document.getElementById("box").innerText = "6";
            setTimeout(() => {
              document.getElementById("box").innerText = "5";
              setTimeout(() => {
                document.getElementById("box").innerText = "4";
                setTimeout(() => {
                  document.getElementById("box").innerText = "3";
                  setTimeout(() => {
                    document.getElementById("box").innerText = "2";
                    setTimeout(() => {
                      document.getElementById("box").innerText = "1";
                      setTimeout(() => {
                        document.getElementById("box").innerText =
                          "Happy Independence day";
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);