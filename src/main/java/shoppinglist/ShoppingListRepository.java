package shoppinglist;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShoppingListRepository extends JpaRepository<Item, Long>{
	
}
