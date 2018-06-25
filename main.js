let canvas, ctx;
let k = 7;
let len = 250;

let n = 2, d = 7;

let points = [];
window.onload = () => {
	canvas = document.createElement("canvas");
	canvas.width = 800;
	canvas.height = 600;
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
		
	k = n / d;
	
	for(let i = 0; i < Math.PI * (n*d) * 2; i += (Math.PI*2) / 1000){
		let x = len * Math.cos(i * k) * Math.cos(i) + 400;
		let y = len * Math.cos(i * k) * Math.sin(i) + 300;
		points.push({x:x, y:y});
	}
	ctx.beginPath();
	ctx.moveTo(points[0].x, points[0].y);
	for(let i = 1; i < points.length; i++){
		ctx.lineTo(points[i].x, points[i].y);
	}
	ctx.stroke();
	
}
