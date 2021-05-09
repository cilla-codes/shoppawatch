import { Link } from 'react-router-dom';

const Navbar = ({ cart }) => {
  return (
    <div>
      <div className="nav">
        <div className="centered-nav">
          <div className="left-nav">
            <Link to="/">
              <div className="brand">
                <span className="brand-name">ShoppAWatch</span>
                <span className="brand-end-period"></span>
              </div>
            </Link>
          </div>
          <div className="search">
            <input type="text" placeholder="Search" />
            <span>
              <i className="fal fa-search"></i>
            </span>
          </div>
          <div className="right-nav">
            <Link to={'/cart'}>
              <div className="cart-icon">
                <span className="cart-icon-badge">{cart.total_items}</span>
                <i className="fal fa-shopping-cart"></i>
              </div>
            </Link>
            <div className="username-icon">
              <i className="fal fa-user-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
