CREATE TRIGGER AfterOrderInsert
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
  DECLARE done INT DEFAULT FALSE;
  DECLARE itemId INT;
  DECLARE itemQuantity INT;
  DECLARE cur CURSOR FOR
    SELECT book_id, quantity
    FROM order_items
    WHERE order_id = NEW.order_id;

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

  OPEN cur;

  read_loop: LOOP
    FETCH cur INTO itemId, itemQuantity;
    IF done THEN
      LEAVE read_loop;
    END IF;

    UPDATE books
    SET quantity = quantity - itemQuantity
    WHERE book_id = itemId;
  END LOOP;

  CLOSE cur;
END;
