import Pizza from "../PizzaItem";

export default function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">{pizzaData.map(Pizza)}</ul>
    </main>
  );
}
