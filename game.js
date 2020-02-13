var squares = 25; //This number should be calculated
var rows = 4;
var columns = 4;
var bingo = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
var winning = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15],[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15],[0,5,10,15],[3,6,9,12]];
function Generatetable(){
	shuffle(bingo);
	var amount = 0;
	let table = document.getElementById("tables");
	for(i=0;i<rows;i++){

		let row = table.insertRow(table.rows.length);
		for(o=0;o<columns;o++){
			let cell = row.insertCell();
      		let text = document.createTextNode(bingo[amount]);
			cell.onclick = pressed;
			cell.id = amount;
      		cell.appendChild(text);
			
			console.log("Set")
			amount = amount + 1;
		}
	}
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
Generatetable();
var cell = document.getElementsByTagName("TD");

function pressed(){
	console.log(this.id)
	document.getElementById(this.id).style.background = "red";
	
}

function checkForWin(){
	var win = false;
	for(i=0;i<winning.length;i++){
		var yes = 0;
		
		for(l=0;l<4;l++){
			if(document.getElementById(winning[i][l]).style.background == "red"){
				yes = yes + 1;
			}
		}
		if(yes==4){
			alert("win");
			win = true
		} 
		else if((i==winning.length - 1)&&!(win)){
			alert("not win");
		}
	}
	
}
