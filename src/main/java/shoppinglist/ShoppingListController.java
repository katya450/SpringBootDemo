package shoppinglist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	  public Long delete(@PathVariable Long id) {
			shoppingListRepo.delete(id);
			return id;
	  }
}
