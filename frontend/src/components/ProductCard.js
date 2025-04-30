import { useState } from 'react'; // Add missing import
import CartModal from './CartModal'; // Add missing import

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOrderSubmit = (orderData) => {
    console.log('Order data:', orderData);
    setShowModal(false);
    alert(`Order placed for ${orderData.quantity} ${product.name}(s)!`);
  };

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>₹{product.price}</p>
        <button onClick={() => setShowModal(true)}>
          Add to Cart
        </button>
      </div>

      {showModal && (
        <CartModal
          product={product}
          onClose={() => setShowModal(false)}
          onSubmit={handleOrderSubmit}
        />
      )}
    </>
  );
};

export default ProductCard; // Ensure default export exists