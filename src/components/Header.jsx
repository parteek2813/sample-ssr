export default function Header(props) {
  const { countCartItems } = props;
  return (
    <div className="row center block">
      <div>
        <a href="">
          <h2>Simple Shopping Cart</h2>
        </a>
      </div>
      <div>
        <a href="">
          Cart
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href="">Sign In</a>
      </div>
    </div>
  );
}
