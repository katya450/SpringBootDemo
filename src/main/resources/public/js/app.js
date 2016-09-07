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
		console.log(item, amount);
	});

});
