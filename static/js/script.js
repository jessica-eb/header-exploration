function animation() {
	var tl = new TimelineMax({pause:false, repeat: -1});

	var bkgd_grad = document.getElementById('bkgd_grad');

	tl.to(bkgd_grad, 3, {backgroundImage: "url(static/img/grad2.jpg)", delay: 0.01})
	.to(bkgd_grad, 3, {backgroundImage: "url(static/img/grad3.jpg)", delay: 0.01})
	.to(bkgd_grad, 3, {backgroundImage: "url(static/img/grad1.jpg)", delay: 0.01})

	var tl_icons = new TimelineMax({pause: false});

	var icon01 = document.getElementById('icon01');
	var icon02 = document.getElementById('icon02');
	var icon03 = document.getElementById('icon03');

	TweenMax.set(icon01, {stroke:"#60DBA2", strokeLocation: "inside", fill: "none", strokWidth:10});
	TweenMax.set(icon02, {stroke:"#60DBA2",  strokeLocation: "inside", fill: "none", strokWidth:10});
	TweenMax.set(icon03, {stroke:"#60DBA2",  strokeLocation: "inside", fill: "none", strokWidth:10});

	tl_icons.from(icon01, 5, {drawSVG: "0%", delay: 0.5}, "start")
	.from(icon02, 5, {drawSVG: "0%", delay: 0.5}, "start")
	.from(icon03, 5, {drawSVG: "0%", delay: 0.5}, "start")
	.to(icon01, 0.3, {fill: "#60DBA2"}, "start+=1")
	.to(icon02, 0.3, {fill: "#60DBA2"}, "start+=1")
	.to(icon03, 0.3, {fill: "#60DBA2"}, "start+=1")

	var tl_circle = new TimelineMax({pause: false})

	var circle_outer = document.getElementById('circle_outer');
	var circle_inner = document.getElementById('circle_inner');
	var phone_dark = document.getElementById('phone_dark');
	var circle_txt = document.getElementById('circle_txt');
	var slide_dark = document.getElementById('slide_dark');

	tl_circle.to(circle_outer, 0.4, {width: "400px", height: "400px", repeat: 10, yoyo: true, ease: Power1.easeOut}, "start")
	.to(circle_inner, 0.4, {width: "320px", height: "320px", repeat: 10, yoyo: true, ease: Power1.easeOut}, "start")
	.to(circle_inner, 0.2, {width: "200px", height: "200px"}, "start2")
	.to(circle_outer, 0.2, {width: "300px", height: "300px"}, "start2")
	.to(phone_dark, 0.1, {opacity: 1}, "start2+=0.2")
	.to(phone_light, 0.1, {opacity: 0}, "start2+=0.2")
	.to(circle_inner, 0.8, {width: "3000px", height: "3000px"}, "start2+=0.2")
	.to(circle_outer, 0.8, {width: "3200px", height: "3200px"}, "start2+=0.2")
	.to(circle_txt, 0.1, {color: "#fff"}, "start2+=0.3")
	.from(slide_dark, 0.2, {backgroundColor: "#fff"}, "start2+=0.3")
}

function main() {
	animation();
}

window.addEventListener( "onload", main() );