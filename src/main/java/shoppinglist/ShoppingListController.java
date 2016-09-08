package shoppinglist;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
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
	public Item addItem (@Validated @RequestBody Item item) {
		shoppingListRepo.save(item);
		return item;
	}
	
	@ResponseBody @RequestMapping(value="", method = RequestMethod.GET)
	public Iterable<Item> getAllItems() {
		return shoppingListRepo.findAll();
	}

	
}
