import React , { useContext } from 'react';
import myContext from '../store/myContext';
// import SeeDetails from '../components/seeProducts';
import '../components/cards.css'

function Card() {
  const { store, input } = useContext(myContext);
  // const { products } = store;

  if( store === undefined) return <h1>Nenhum produto encontrado</h1>;

  return(
    <>
    {(input)?<h2 className="searchResult"> Resultado da busca por {input}</h2>: ''}
    <section className="general">
    {store.map(( product) =>
      <section key={product.ean} className="cards">
        <h4>{product.fullname}</h4>
        <img src={product.picture} alt={ product.name }/>
        <h4>{product.price}</h4>
      </section>
     )}
    </section>
    </>
  )
};

export default Card;