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
		.done(function(response) {	
			console.log(response);
	        $("tbody").append('<tr><td><button class="delete" data-id="' + response.id + '">X</button></td><td class="list">' + response.name + '</td><td class="list">' + response.amount + '</td></tr>');
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
			$("tbody").append('<tr><td><button class="delete" data-id="' + item.id + '">X</button></td><td class="list">' + item.name + 
					'</td><td  class="list">' + item.amount + '</td></tr>');
		})
	});
	
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
	

	
	
		
	
	
	/*$(".delete").click(function(){
		var dataid = id;
		console.log ('delete button clicked with id' + dataid);

			
		$.ajax({
			url: "/shoppinglist/id=" + dataid,
			type: "DELETE"
		})
		.done(function(itemlist) {
			itemlist.remove(dataid);
		});	
	});
	
	*/
});
