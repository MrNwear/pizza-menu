export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 24;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            we are open untill {closeHour}:00 , you can visit us or order online
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}
