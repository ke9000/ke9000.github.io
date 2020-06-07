function click_btn(num) {
	let hash_tag1 = document.getElementById("hash_tag1");
	let hash_tag2 = document.getElementById("hash_tag2");
	let table = document.getElementById("tb1");

	let hash_tag1_text = hash_tag1.value;
	let hash_tag2_text = hash_tag2.value;
	let row = table.rows[num];
	let song_name = row.cells[1].children[0].value;
	let singer= row.cells[2].children[0].value;
	let other = row.cells[3].children[0].value;

	hash_tag1_text = hash_tag1_text.replace(/#/g, '');
	hash_tag2_text = hash_tag2_text.replace(/#/g, '');
	other = other.replace(/\r\n/g, '\n');
	other = other.replace(/\r/g, '\n');
	let other_lines = other.split('\n');
	let other_text = other_lines.join('%0A');

	console.log("No."+num+"\n"+song_name+"\n"+singer+"\n\n"+other_text+"\n"+hash_tag1_text+"\n"+hash_tag2_text);

	let post_text = "No."+num+"%0A"+song_name+"%0A"+singer+"%0A%0A"+other_text+"%0A";
	let url = "https://twitter.com/share?text="+post_text+"&hashtags="+hash_tag1_text+"&hashtags="+hash_tag2_text;

	window.open(url, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
}

function addrow(){
	let table = document.getElementById("tb1");
	let row = table.insertRow(-1);
	let cell = new Array(5);

	if (table.rows.length >= 1){
		for(i=0; i<=4; i++){
			cell[i] = row.insertCell(-1);
		}
		cell[0].innerHTML = (table.rows.length -1);
		cell[1].innerHTML = '<input class="form-control" type="text" name="">';
		cell[2].innerHTML = '<input class="form-control" type="text" name="">';
		cell[3].innerHTML = '<textarea id="my-textarea" class="form-control" name="" rows="1"></textarea>';
		cell[4].innerHTML = '<button class="btn btn-primary" type="button" onclick="click_btn('+(table.rows.length -1)+');">投稿</button>';
	}
	
}

function delrow(){
	let table = document.getElementById("tb1");
	if(table.rows.length >=3){
		let rows =table.deleteRow(table.rows.length - 1)
	}
	
}