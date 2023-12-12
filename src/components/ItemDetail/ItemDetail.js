import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, nombre, img, category, descripcion, price, stock }) => {
  const handleAddToCart = (quantity) => {
    console.log('Cantidad agregada:', quantity);
   
  };

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>{nombre}</h2>
      </header>
      <picture>
        <img src={img} alt={nombre} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>Categoría: {category}</p>
        <p className='Info'>Descripción: {descripcion}</p>
        <p className='Info'>Precio: ${price}</p>
      </section>
      <footer className='ItemFooter'>
        <ItemCount initial={1} stock={stock} onAdd={handleAddToCart} />
      </footer>
    </article>
  );
};

export default ItemDetail;
