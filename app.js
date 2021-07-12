let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let bike = document.querySelector(".showcase-bikes img");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");
let bikeName = document.querySelector(".bike-color-scheme h2");
let buyBtn = document.querySelector(".buy-btn");
let specsBtn = document.querySelector(".specs-btn");
let bigName = document.querySelector(".big-name");

let counter = 1;

leftBtn.addEventListener("click", () => {
	counter--;
	if (counter == 0) {
		counter = 3;
		console.log(bike);
	}
	if (counter == 1) {
		bike.src = "img/showcase-bike-1.png";
		color1.style.backgroundColor = "black";
		color2.style.backgroundColor = "rgb(151, 7, 7)";
		color3.style.backgroundColor = "gray";
		color4.style.backgroundColor = "white";
		bikeName.textContent = "TWITTER CARBON";
		bigName.textContent = "TWITTER";
	}

	if (counter == 2) {
		bike.src = "img/showcase-bike-2.png";

		color1.style.backgroundColor = "grey";
		color2.style.backgroundColor = "black";
		color3.style.backgroundColor = "rgb(226, 226, 151)";
		color4.style.backgroundColor = "white";
		bikeName.textContent = "TREK";
		bigName.textContent = "TTREK";
	}

	if (counter == 3) {
		bike.src = "img/showcase-bike-3.png";

		color1.style.backgroundColor = "rgb(24, 24, 66)";
		color2.style.backgroundColor = "rgb(189, 89, 106)";
		color3.style.backgroundColor = "black";
		color4.style.backgroundColor = "white";
		bikeName.textContent = "CANNONDALE";
		bigName.textContent = "CANNONDALE";
	}
	console.log(counter);
});

rightBtn.addEventListener("click", () => {
	counter++;
	if (counter == 4) {
		counter = 1;
	}
	if (counter == 1) {
		bike.src = "img/showcase-bike-1.png";

		color1.style.backgroundColor = "black";
		color2.style.backgroundColor = "rgb(151, 7, 7)";
		color3.style.backgroundColor = "gray";
		color4.style.backgroundColor = "white";
		bikeName.textContent = "Twitter Carbon";
		bigName.textContent = "TWITTER";
	}

	if (counter == 2) {
		bike.src = "img/showcase-bike-2.png";

		color1.style.backgroundColor = "grey";
		color2.style.backgroundColor = "black";
		color3.style.backgroundColor = "rgb(226, 226, 151)";
		color4.style.backgroundColor = "white";
		bikeName.innerHTML = "Trek";
		bigName.textContent = "TREK";
	}

	if (counter == 3) {
		bike.src = "img/showcase-bike-3.png";

		color1.style.backgroundColor = "rgb(24, 24, 66)";
		color2.style.backgroundColor = "rgb(189, 89, 106)";
		color3.style.backgroundColor = "black";
		color4.style.backgroundColor = "white";
		bikeName.textContent = "Cannondale";
		bigName.textContent = "CANNONDALE";
	}

	console.log(counter);
});
