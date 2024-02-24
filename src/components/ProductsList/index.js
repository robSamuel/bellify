import Image from 'next/image';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const ProductsList = ({ title, products }) => {
  const renderList = () => {
    return products.map(product => (
      <div key={v4()} className="ProductsList-item">
        <div className="ProductsList-container">
          <Image className="ProductsList-image" src={product.image} width="auto" height="auto" alt={product.name} />
        </div>
        <span className="ProductsList-name">{product.name}</span>
        <span className="ProductsList-price">{product.price}</span>
      </div>
    ));
  };

  return (
    <section className="ProductsList">
      <h2 className="ProductsList-title">
        {title}
      </h2>
      <div className="ProductsList-list">
        {renderList()}
      </div>
    </section>
  );
};

ProductsList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default ProductsList;