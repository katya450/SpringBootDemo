package shoppinglist;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@RequestMapping("/shoppinglist")
public class ShoppingListController {
	
	private ShoppingListRepository shoppingListRepo;
	
	@Autowired
	public ShoppingListController(ShoppingListRepository shopListRepo) {
	this.shoppingListRepo = shopListRepo;
	}
	
	@ResponseBody @RequestMapping(method = RequestMethod.POST)
	public Item addItem (@RequestBody Item item) {
		//tee tähän oikeat temput
		shoppingListRepo.save(item);
		return item;
	}
	

	
}
