const api = "http://localhost:3000/color";

const hexButton = document.getElementById("hex");
const rgbButton = document.getElementById("rgb");
const hslButton = document.getElementById("hsl");

async function getRandomColor() {
			const res = await fetch(api);
			if (!res.ok) throw new Error(res.statusText);
			
			return res.json();
}

async function updateColor(format) {
		try {
				const data = await getRandomColor();
				
				let color = data.hex;
				if (format === "rgb") color = data.rgb;
				if (format === "hsl") color = data.hsl;
				
				document.body.style.backgroundColor  = color;
				
				hexButton.onclick = () => updateColor(color);
				hslButton.onclick = () => updateColor(color);
				rgbButton.onclick = () => updateColor(color);
		} catch (err) {
				console.error(err);
		}
}
updateColor("hex");