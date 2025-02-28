START

DEFINE products list with name, image, price, and ID
DEFINE an empty cart list

FUNCTION toggleCart()
    IF cart sidebar is open
        CLOSE the cart sidebar
    ELSE
        OPEN the cart sidebar
    ENDIF
END FUNCTION

FUNCTION closeCart()
    CLOSE the cart sidebar
END FUNCTION

FUNCTION addToCart(product_id)
    FIND product in products list using product_id
    CHECK IF product is already in cart
        IF YES, increase quantity by 1
        ELSE, ADD product to cart with quantity 1
    ENDIF
    UPDATE cart display
END FUNCTION

FUNCTION incrementQuantity(product_id)
    FIND product in cart
    INCREASE quantity by 1
    UPDATE cart display
END FUNCTION

FUNCTION decrementQuantity(product_id)
    FIND product in cart
    IF quantity is more than 1
        DECREASE quantity by 1
    ELSE
        REMOVE product from cart
    ENDIF
    UPDATE cart display
END FUNCTION

FUNCTION removeFromCart(product_id)
    REMOVE product from cart list
    UPDATE cart display
END FUNCTION

FUNCTION clearCart()
    EMPTY the cart list
    UPDATE cart display
END FUNCTION

FUNCTION sortCart(order)
    IF order is "asc" (low to high)
        SORT cart by price in ascending order
    ELSE IF order is "desc" (high to low)
        SORT cart by price in descending order
    ENDIF
    UPDATE cart display
END FUNCTION

FUNCTION updateCart()
    CLEAR cart display
    SET subtotal = 0
    SET totalItems = 0

    FOR EACH item in cart
        CALCULATE subtotal by adding (item price * quantity)
        INCREASE totalItems count
        DISPLAY item details (image, name, price, quantity)
        SHOW buttons for +, -, and Remove
    END FOR

    UPDATE subtotal and total item count in UI
END FUNCTION

FUNCTION loadProducts()
    GET product list container
    FOR EACH product in products list
        CREATE product card with image, name, and price
        ADD "Add to Cart" button
    END FOR
END FUNCTION

ON page load:
    CALL loadProducts()

ON "Place Order" button click:
    SHOW thank-you popup
    CLOSE cart sidebar

FUNCTION closePopup()
    HIDE thank-you popup
END FUNCTION

END
