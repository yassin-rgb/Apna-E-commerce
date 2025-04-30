import ProductCard from '../components/ProductCard';

const Services = () => {
  // Mock product data (replace with API later)
  const products = [
    {
      id: 1,
      name: "AC Repair",
      price: 599,
      image: "https://via.placeholder.com/150?text=AC+Repair"
    },
    {
      id: 2,
      name: "Plumbing",
      price: 399,
      image: "https://via.placeholder.com/150?text=Plumbing"
    },
    {
      id: 3,
      name: "Electrician",
      price: 499,
      image: "https://via.placeholder.com/150?text=Electrician"
    }
  ];

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Services;