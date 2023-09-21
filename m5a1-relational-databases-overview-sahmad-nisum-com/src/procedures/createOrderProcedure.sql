CREATE PROCEDURE IF NOT EXISTS createOrderProcedure(IN inputUserId INT, OUT outputOrderId INT)
BEGIN
  DECLARE cartId INT;
  DECLARE totalAmount DECIMAL(10, 2);

  SELECT cart_id INTO cartId FROM shopping_carts WHERE user_id = inputUserId;

  SELECT SUM(ci.price * ci.quantity) INTO totalAmount FROM cart_items ci WHERE cart_id = cartId;

  INSERT INTO orders (total_amount, user_id, date)
  VALUES (totalAmount, inputUserId, NOW());

  SET outputOrderId = LAST_INSERT_ID();

  INSERT INTO order_items (order_id, book_id, quantity, price)
  SELECT outputOrderId, ci.book_id, ci.quantity, ci.price 
  FROM cart_items ci
  WHERE cart_id = cartId;

  DELETE FROM cart_items WHERE cart_id = cartId;
  DELETE FROM shopping_carts WHERE cart_id = cartId;
END;