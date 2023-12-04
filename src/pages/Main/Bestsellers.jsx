import React from 'react';
import { flowers } from '../../components/layout/flowers';
import { FlowerCard } from '../../components/layout/Flower';

function Bestsellers() {
  const flowerList = flowers.map((item) => (
    <FlowerCard
      key={item.id}
      name={item.name}
      price={item.price}
      info={item.info}
      url={item.url}
    />
  ));
  return (
    <section className="bestsellers">
      <div className="bestsellers__title">
        <hr className="bestsellers__line" />
        <h4 className="bestsellers__subtitle"> Best sellers</h4>{' '}
        <hr className="bestsellers__line" />
      </div>
      <div className="bestsellers-card">{flowerList}</div>
    </section>
  );
}

export { Bestsellers };
