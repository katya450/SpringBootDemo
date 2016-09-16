$(function() {
	console.log ('connection established here. you may proceed.');
	
	//lisää asioita ostoslistalle ja näyttää lisätyn asian sivulla
	$("#add").click(function(){		    
		var item = $("#itemname").val();
		var amount = $("#itemamount").val();
		
		$.ajax({
			url: "/shoppinglist",
			contentType: "application/json",
			data: JSON.stringify({"name": item, "amount": amount}),
			type: "POST",
			dataType: "json"
		})
		.done(function(item) {	
	        $("tbody").append(shoppingListRow(item));
		})
		.fail(function(error) {
			console.log(error); //TODO: error objectista tsekkaa ja tee erilaisia käsittelyjä eri erroreille
		});
	});
	
	//sivun latautuessa haetaan kaikki tietokannassa olevat asiat näkyviin
	$.ajax({
		url: "/shoppinglist",
		contentType: "application/json",
		type: "GET",
		dataType: "json"
	})
	.done(function(itemlist) {
		itemlist.forEach(function(item) {
			$("tbody").append(shoppingListRow(item));
		})
	});
	
	function shoppingListRow (item) {
		return '<tr><td><button class="delete" data-id="' + item.id + '">X</button></td><td class="list">' + item.name + 
		'</td><td  class="list">' + item.amount + '</td></tr>'
	} 
		
	//poistetaan tietyn id:n omaava asia tietokannasta
	$("tbody").on("click", ".delete", function(event) {	
		var dataid = $(event.target).attr("data-id");
		
		$.ajax({
			url: "/shoppinglist/" + dataid,
			type: "DELETE"
		})
		.done(function(id) {
			$(".delete[data-id=" + id + "]").closest("tr").remove();
		});
	});
});
