var path = "C:Users/Soham Shah/Desktop/Web Projects/Programmer's Instruments/Programmer's Piano/Piano_Sounds/";

document.addEventListener("keypress", function(event){

	var keyed = event.key;
	makeSound(keyed);
	animation(keyed);

});


function makeSound(keyboard)
{

	switch(keyboard) {
  	case "a":
		var audio = new Audio(path + "middle_c.mp3");
		audio.play();
		

		break;
	case "s":

		var audio = new Audio(path + "middle_d.mp3");
		audio.play();
		break;
	case "d":
		var audio = new Audio(path + "middle_e.mp3");
		audio.play();
		break;
	case "f":
		var audio = new Audio(path + "middle_f.mp3");
		audio.play();
		break;
	case "g":
		var audio = new Audio(path + "middle_g.mp3");
		audio.play();
		break;
	case "h":
		var audio = new Audio(path + "middle_a.mp3");
		audio.play();
		break;
	case "j":
		var audio = new Audio(path + "middle_b.mp3");
		audio.play();
		break;
	case "k":
		var audio = new Audio(path + "high_c.mp3");
		audio.play();
		break;
	case "K":
		var audio = new Audio(path + "high_c_sharp.mp3");
		audio.play();
		break;
		
	case "A":
		var audio = new Audio(path + "mid_c_sharp.mp3");
		audio.play();
		break;
	case "F":
		var audio = new Audio(path + "mid_f_sharp.mp3");
		audio.play();
		break;
	case "G":
		var audio = new Audio(path + "mid_g_sharp.mp3");
		audio.play();
		
		break;
	case "H":
		var audio = new Audio(path + "mid_a_sharp.mp3");
		audio.play();
		break;
	case "S":
		var audio = new Audio(path + "mid_d_sharp.mp3");
		audio.play();
		break;

}

}


function animation(keyboard)
{
	var changed;
	switch(keyboard) {
  	case "a":
  		changed = "c";
		break;
	case "s":

		changed = "d";
		break;
	case "d":
		changed = "e";
		break;
	case "f":
		changed = "f";
		break;
	case "g":
		changed = "g";
		break;
	case "h":
		changed = "a";
		break;
	case "j":
		changed = "b";
		break;
	case "k":
		changed="high_c";
		break;
	case "K":
		changed ="high_c_sharp";
		break;
	case "A":
		changed = "c_sharp";
		break;
	case "F":
		changed = "f_sharp";
		break;
	case "G":
		changed = "g_sharp";
		break;
	case "H":
		changed = "a_sharp";
		break;
	case "S":
		changed = "d_sharp";
		break;


}





	var active = document.querySelector("#" + changed);
	active.classList.add("blacked");
	setTimeout(function() {
		active.classList.remove("blacked");

	}, 100);
}
