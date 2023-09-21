SET @orderId = NULL;
CALL `book-store`.createOrderProcedure(1, @orderId);
SELECT INTO @orderId;