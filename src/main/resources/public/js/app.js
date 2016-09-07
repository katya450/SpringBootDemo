$(function() {
	console.log ('jee');
	
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
	        $("tbody").append("<tr><td>" + response.name + "</td><td>" + response.amount + "</td></tr>");
		})
		.fail(function(error) {
			console.log(error); //TODO: error objectista tsekkaa ja tee erilaisia käsittelyjä eri erroreille
		});
		
	});

});
