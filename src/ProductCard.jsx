
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const totalAmount = quantity * price;

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://placehold.co/160x220/eef2f5/222222?text=Wireless+Mouse"
          alt="Wireless Mouse"
        />
      </div>

      <div className="product-details">
        <h2>{productName}</h2>
        <p><strong>₹{price}</strong> per item</p>
        <p>Colour: {selectedColor}</p>
        <p>Deliver to: {deliveryCity}</p>

        <hr />

        <p>Cart Quantity: {quantity}</p>
        <h3>Total Amount: ₹{totalAmount}</h3>

        <p>
          {quantity === 0
            ? "Cart is empty"
            : "Product added to cart"}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;