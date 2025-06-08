import React from 'react'

const Product = ({ title, rating, price, imgUrl }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={imgUrl} alt={title} />
      </div>
      <div className='title-container'>
        <h3>
            <a href="#">{title}</a>
        </h3>
      </div>
      <div className='price-rating-container'>
        <p className='rating'>{+rating} &#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <p className='price'>&#8377;{(price * 85.57).toFixed()}</p>
      </div>
      <div className="cta-container">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Product
