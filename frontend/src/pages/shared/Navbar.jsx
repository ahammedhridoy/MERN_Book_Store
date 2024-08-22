import { useEffect, useState } from "react";

// import icons from react icons
import { FaXmark, FaBarsStaggered, FaBlog, FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  //   price count
  useEffect(() => {
    let totalQty = 0;
    let totalPrice = 0;

    carts.forEach((item) => {
      totalQty += Number(item.quantity);
      const price = Number(item.price);
      totalPrice += price * item.quantity;
    });

    setTotalQuantity(totalQty);
    setTotalPrice(totalPrice); // Set the total price
  }, [carts]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in bg-transparent">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-8 text-base">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-700"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          <ul className="hidden space-x-12 md:flex navitems">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className="block text-base text-black uppercase cursor-pointer link hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className="relative flex items-center space-x-12">
            {/* drawer */}
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button ">
                  {" "}
                  <FaCartPlus className="w-5 text-2xl cursor-pointer hover:text-blue-700 drawer-button" />{" "}
                  <span className="absolute top-[-10px] flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-700 rounded-full left-3">
                    {totalQuantity}
                  </span>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="min-h-full p-4 menu bg-base-200 text-base-content md:w-[400px] relative">
                  <h2 className="text-4xl font-bold">Cart</h2>

                  {/* Item */}
                  {carts.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}

                  {/* Cart Footer */}
                  <div className="fixed left-0 right-0 text-center bottom-5">
                    <h3 className="mb-2 text-3xl font-bold">
                      Total: ${totalPrice.toFixed(2)}{" "}
                      {/* Display the total price */}
                    </h3>
                    <Link to={"/checkout"}>
                      <button className="btn btn-primary">
                        Go to Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* menu btn, visible on mobile screen */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-black" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a
              href={path}
              key={link}
              onClick={toggleMenu}
              className="block text-white hover:text-gray-500"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
