const cont = document.querySelector("#container");

      const btn = document.createElement("button");
      btn.textContent = "Create New Grid";
      btn.style.backgroundColor = "yellow";
      btn.style.margin = "10px";
      btn.style.padding = "20px";
      btn.style.borderRadius = "10px";
      btn.style.alignSelf = "center";
      cont.before(btn);

      function sketchMaker(value) {
        cont.innerHTML = "";

        let size = 960 / value;
        for (let i = 1; i <= value; i++) {
          for (let j = 1; j <= value; j++) {
            const sq_div = document.createElement("div");
            sq_div.classList.add("square");
            sq_div.style.height = `${size}px`;
            sq_div.style.width = `${size}px`;
            sq_div.style.backgroundColor = `rgb(${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0} )`;

            let brightness = 100;

            sq_div.addEventListener("mouseover", (event) => {
              sq_div.style.backgroundColor = `rgb(${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0}, ${Math.random() * (255 - 0) + 0} )`;
              if (brightness > 0) {
                brightness -= 10;
                sq_div.style.filter = `brightness(${brightness}%)`;
              }
            });

            cont.appendChild(sq_div);
          }
        }
      }

      sketchMaker(16);

      btn.addEventListener("click", () => {
        let val = prompt(
          "Enter NxN valueS (maximum value should not be greater than 100):",
          0,
        );
        let num = Number(val);
        if (num > 100) {
          alert("Wrong Input Please Enter Correct input");
        } else sketchMaker(num);
      });