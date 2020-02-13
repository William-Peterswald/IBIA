var bordercolour1 = 0;
var bordercolour2 = 100;
var bordercolour3 = 100;
function border() {
    bordercolour2 = bordercolour2 - 0.01;
	var bordercolour1 = 0;
	var table = getElementById('table');
	if (getElementById('table') != null) {
    	document.table.innerhtml.style.background = 'linear-gradient= [90deg, rgba(255,255,255,1)' + bordercolour1 + ', rgba(0,0,0,1) '+ bordercolour2+'%, rgba(0,0,0,1)'  + bordercolour3 +'%, rgba(255,255,255,1) 100%]';
	}
	if (bordercolour2 > 0){
		border();
	}
}

function Upload(){
	let bingoList = document.getElementById("list").files[0];
	let formData = new FormData();

	formData.append("List", bingoList);
	fetch('/upload/image', {method: "POST", body: formData});
	
	console.log(formData);
}

