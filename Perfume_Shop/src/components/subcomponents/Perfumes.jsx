/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Perfumes = ({ perfumes }) => {
  const options = [
    "Perfumes & Menus",
    "Share Your Perfume",
    "Customized Perfume",
    "Create Grocery Store",
  ];

  return (
    <>
      <article className="perfumes">
        <section>
          {options.map((element) => {
            return <button key={element}>{element}</button>;
          })}
        </section>
       
        <section className="container">
          {perfumes.slice(0, 6).map((element, index) => {
            return <Card key={index} element={element} />;
          })}
        </section>

        <h3>Recommended Perfumes</h3>
        <section className="container">
          {perfumes.slice(6).map((element, index) => {
            return <Card key={index} element={element} />;
          })}
        </section>
      </article>
    </>
  );
};

export default Perfumes;

const Card = ({ element }) => {
  return (
    <Link to={`/perfume/${element.id}`} className="card">
      <img src={element.image} alt={element.name} />
      <h4>{element.name}</h4>
      <h4>{`$${element.price}`}</h4>
    </Link>
  );
};
