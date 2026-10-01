import { useState, useEffect } from "react";
import "./App.css";

/* LOCAL PRODUCT IMAGES */

import appleIphone15 from "./assets/Apple iPhone 15.jpg";
import bajajMixer from "./assets/Bajaj mixer image.webp";
import bluetoothSpeaker from "./assets/Bluetooth Speaker.jpg";
import casualShoes from "./assets/Casual Shoes.webp";
import dslrCamera from "./assets/DSLR Camera.jpg";
import laptopBackpack from "./assets/Laptop Backpack.jpg";
import macbookLaptop from "./assets/MacBook Laptop.jpg";
import mensTshirt from "./assets/Men's T-Shirt.webp";
import modernSofa from "./assets/Modern Sofa.webp";
import officeChair from "./assets/Office Chair.jpg";
import oneplusSmartphone from "./assets/OnePlus Smartphone.jpg";
import premiumPerfume from "./assets/Premium Perfume.webp";
import runningShoes from "./assets/Running Shoes.webp";
import samsungSmartphone from "./assets/Samsung Smartphone.jpg";
import skinCareSet from "./assets/Skin Care Set.webp";
import smartWatch from "./assets/Smart Watch.jpg";
import sunglasses from "./assets/Sunglasses.webp";
import wirelessHeadphones from "./assets/Wireless Headphones.jpg";
import wirelessKeyboard from "./assets/Wireless Keyboard.jpg";
import womensHandbag from "./assets/Women's Handbag.avif";

function App() {
  /* PRODUCTS */

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productError, setProductError] = useState("");

  /* CART */

  const [cart, setCart] = useState([]);

  /* WISHLIST */

  const [wishlist, setWishlist] = useState([]);

  /* ORDERS */

  const [orders, setOrders] = useState([]);

  /* SEARCH */

  const [search, setSearch] = useState("");

  /* SECTIONS */

  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  /* LOGIN */

  const [showLogin, setShowLogin] = useState(false);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* CATEGORY */

  const [selectedCategory, setSelectedCategory] = useState("All");

  /* PRODUCT DETAILS */

  const [selectedProduct, setSelectedProduct] = useState(null);

  /* MESSAGE */

  const [orderMessage, setOrderMessage] = useState("");

  /* CHECKOUT */

  const [showCheckout, setShowCheckout] = useState(false);

  const [checkoutType, setCheckoutType] = useState(null);

  const [paymentMethod, setPaymentMethod] = useState("");

  /* ADDRESS */

  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    pincode: "",
    house: "",
    city: "",
    state: "",
  });

  /* CATEGORIES */

  const categories = [
    "All",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home & Furniture",
    "Appliances",
    "Beauty",
    "Toys",
  ];

  /* FETCH PRODUCTS */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setProductError("");

       const response = await fetch(
  "https://quickcart-backend-v0sy.onrender.com/products"
);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const imageMap = {
          "Apple iPhone 15": appleIphone15,
          "Samsung Smartphone": samsungSmartphone,
          "OnePlus Smartphone": oneplusSmartphone,
          "MacBook Laptop": macbookLaptop,
          "Wireless Headphones": wirelessHeadphones,
          "Smart Watch": smartWatch,
          "Bluetooth Speaker": bluetoothSpeaker,
          "DSLR Camera": dslrCamera,
          "Running Shoes": runningShoes,
          "Casual Shoes": casualShoes,
          "Men's T-Shirt": mensTshirt,
          "Women's Handbag": womensHandbag,
          "Laptop Backpack": laptopBackpack,
          Sunglasses: sunglasses,
          "Premium Perfume": premiumPerfume,
          "Skin Care Set": skinCareSet,
          "Modern Sofa": modernSofa,
          "Office Chair": officeChair,
          "Bajaj Mixer Grinder": bajajMixer,
          "Wireless Keyboard": wirelessKeyboard,
        };

        const descriptionMap = {
          "Apple iPhone 15":
            "Apple iPhone 15 offers powerful performance, an advanced camera system and a high-quality display. It is suitable for photography, entertainment, gaming and everyday use.",

          "Samsung Smartphone":
            "Samsung Smartphone offers smooth performance, a clear display and a stylish design. It is suitable for calling, photography, social media, gaming and everyday use.",

          "OnePlus Smartphone":
            "OnePlus Smartphone provides fast performance, smooth multitasking and a modern design. It is ideal for gaming, photography, entertainment and daily smartphone use.",

          "MacBook Laptop":
            "MacBook Laptop delivers powerful performance with a premium design and high-quality display. It is suitable for programming, studying, office work and creative tasks.",

          "Wireless Headphones":
            "Wireless Headphones provide clear sound quality and a comfortable listening experience. They are suitable for music, calls, movies, gaming and everyday entertainment.",

          "Smart Watch":
            "Smart Watch helps you stay connected and track your daily activities. It is useful for notifications, fitness tracking, checking time and other everyday features.",

          "Bluetooth Speaker":
            "Bluetooth Speaker delivers clear and powerful sound with wireless connectivity. It is perfect for listening to music at home, while travelling and during gatherings.",

          "DSLR Camera":
            "DSLR Camera is designed for high-quality photography and detailed image capture. It is suitable for travel photography, creative photography and capturing special moments.",

          "Running Shoes":
            "Running Shoes provide comfort and support while walking, running and exercising. They are lightweight and suitable for regular fitness activities.",

          "Casual Shoes":
            "Casual Shoes offer a comfortable fit with a stylish design. They are suitable for college, outings, travel and everyday casual wear.",

          "Men's T-Shirt":
            "Men's T-Shirt is comfortable, stylish and suitable for everyday wear. It can be worn casually at home, college, outings and other occasions.",

          "Women's Handbag":
            "Women's Handbag offers a stylish appearance with useful storage space. It is suitable for carrying everyday essentials to college, office, shopping and outings.",

          "Laptop Backpack":
            "Laptop Backpack provides organized storage for your laptop and daily essentials. It is suitable for college, office, travel and everyday use.",

          Sunglasses:
            "Sunglasses provide a stylish look and comfortable protection from bright sunlight. They are suitable for travel, outdoor activities and everyday use.",

          "Premium Perfume":
            "Premium Perfume offers a pleasant and long-lasting fragrance. It is suitable for daily use, parties, special occasions and gifting.",

          "Skin Care Set":
            "Skin Care Set contains products designed for regular skin care. It is suitable for maintaining a simple and healthy everyday skincare routine.",

          "Modern Sofa":
            "Modern Sofa provides comfortable seating with a stylish and modern design. It is suitable for living rooms and helps create a premium home interior.",

          "Office Chair":
            "Office Chair provides comfortable seating during long working and studying hours. It is suitable for offices, home workspaces and study rooms.",

          "Bajaj Mixer Grinder":
            "Bajaj Mixer Grinder is useful for everyday kitchen tasks such as mixing, grinding and preparing different food ingredients at home.",

          "Wireless Keyboard":
            "Wireless Keyboard provides convenient typing without cable connections. It is suitable for laptops, computers, office work, studying and everyday use.",
        };

        const productsWithImages = data.map((product) => ({
          ...product,

          image:
            imageMap[product.name] || "",

          description:
            descriptionMap[product.name] ||
            "This is a high-quality product designed to provide reliable performance and a good user experience.",
        }));

        setProducts(productsWithImages);
      } catch (error) {
        console.error(
          "Error fetching products:",
          error
        );

        setProductError(
          "Unable to load products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* PRICE */

  const getPriceNumber = (price) => {
    if (typeof price === "number") {
      return price;
    }

    return Number(
      String(price)
        .replace("₹", "")
        .replace(/,/g, "")
        .trim()
    );
  };

  /* FILTER PRODUCTS */

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  /* ADD TO CART */

  const addToCart = (product) => {
    const existingProduct =
      cart.find(
        (item) =>
          item.name ===
          product.name
      );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name ===
          product.name
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  /* QUANTITY */

  const increaseQuantity = (
    productName
  ) => {
    setCart(
      cart.map((item) =>
        item.name === productName
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    productName
  ) => {
    const product =
      cart.find(
        (item) =>
          item.name ===
          productName
      );

    if (!product) return;

    if (
      product.quantity === 1
    ) {
      removeFromCart(
        productName
      );
    } else {
      setCart(
        cart.map((item) =>
          item.name ===
          productName
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
      );
    }
  };

  const removeFromCart = (
    productName
  ) => {
    setCart(
      cart.filter(
        (item) =>
          item.name !==
          productName
      )
    );
  };

  /* CART TOTAL */

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        getPriceNumber(
          item.price
        ) *
          item.quantity,
      0
    );

  const totalItems =
    cart.reduce(
      (total, item) =>
        total +
        item.quantity,
      0
    );

  /* WISHLIST */

  const toggleWishlist = (
    product
  ) => {
    const exists =
      wishlist.some(
        (item) =>
          item.name ===
          product.name
      );

    if (exists) {
      setWishlist(
        wishlist.filter(
          (item) =>
            item.name !==
            product.name
        )
      );
    } else {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  const isInWishlist = (
    productName
  ) => {
    return wishlist.some(
      (item) =>
        item.name === productName
    );
  };

  const removeFromWishlist = (
    productName
  ) => {
    setWishlist(
      wishlist.filter(
        (item) =>
          item.name !==
          productName
      )
    );
  };

  /* LOGIN */

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      setUser(email);

      setShowLogin(false);

      setEmail("");
      setPassword("");
    } else {
      alert(
        "Please enter email and password"
      );
    }
  };

  const logout = () => {
    setUser("");
  };

  /* BUY NOW */

  const buyNow = (product) => {
    if (!user) {
      setShowLogin(true);
      setSelectedProduct(null);
      return;
    }

    setCheckoutType({
      type: "buyNow",
      product: product,
      step: "address",
    });

    setPaymentMethod("");
    setSelectedProduct(null);
    setShowCheckout(true);
  };

  /* PLACE ORDER */

  const placeOrder = () => {
    if (!user) {
      setShowLogin(true);
      return;
    }

    if (cart.length === 0) {
      alert(
        "Your cart is empty"
      );
      return;
    }

    setCheckoutType({
      type: "cart",
      step: "address",
    });

    setPaymentMethod("");
    setShowCart(false);
    setShowCheckout(true);
  };

  /* ADDRESS */

  const handleAddressChange = (
    e
  ) => {
    const {
      name,
      value,
    } = e.target;

    setAddress({
      ...address,
      [name]: value,
    });
  };

  const continueToPayment = () => {
    if (
      address.fullName.trim() ===
        "" ||
      address.mobile.trim() ===
        "" ||
      address.pincode.trim() ===
        "" ||
      address.house.trim() ===
        "" ||
      address.city.trim() ===
        "" ||
      address.state.trim() ===
        ""
    ) {
      alert(
        "Please fill all address details"
      );
      return;
    }

    if (
      address.mobile.length !==
        10 ||
      !/^\d+$/.test(
        address.mobile
      )
    ) {
      alert(
        "Please enter a valid 10 digit mobile number"
      );
      return;
    }

    if (
      address.pincode.length !==
        6 ||
      !/^\d+$/.test(
        address.pincode
      )
    ) {
      alert(
        "Please enter a valid 6 digit pincode"
      );
      return;
    }

    setCheckoutType({
      ...checkoutType,
      step: "payment",
    });
  };

  /* CONFIRM PAYMENT */

  const confirmPayment = () => {
    if (
      paymentMethod === ""
    ) {
      alert(
        "Please select a payment method"
      );
      return;
    }

    let orderItems = [];
    let finalTotal = 0;
    let finalItems = 0;

    if (
      checkoutType.type ===
      "cart"
    ) {
      orderItems = [...cart];
      finalTotal =
        totalPrice;
      finalItems =
        totalItems;
    }

    if (
      checkoutType.type ===
      "buyNow"
    ) {
      orderItems = [
        {
          ...checkoutType.product,
          quantity: 1,
        },
      ];

      finalTotal =
        getPriceNumber(
          checkoutType.product
            .price
        );

      finalItems = 1;
    }

    const newOrder = {
      id: Date.now(),

      items: orderItems,

      totalItems:
        finalItems,

      totalPrice:
        finalTotal,

      address: {
        ...address,
      },

      paymentMethod:
        paymentMethod ===
        "cod"
          ? "Cash on Delivery"
          : "Online Payment",

      date: new Date().toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
          year: "numeric",
        }
      ),

      status:
        "Order Placed",
    };

    setOrders(
      (previousOrders) => [
        newOrder,
        ...previousOrders,
      ]
    );

    if (
      checkoutType.type ===
      "cart"
    ) {
      setCart([]);
    }

    setOrderMessage(
      "Your order has been placed successfully!"
    );

    setShowCheckout(false);
    setPaymentMethod("");

    setAddress({
      fullName: "",
      mobile: "",
      pincode: "",
      house: "",
      city: "",
      state: "",
    });

    setTimeout(() => {
      setOrderMessage("");
    }, 4000);
  };

  /* CANCEL ORDER */

  const cancelOrder = (
    orderId
  ) => {
    setOrders(
      orders.filter(
        (order) =>
          order.id !== orderId
      )
    );

    setOrderMessage(
      "Your order has been cancelled successfully!"
    );

    setTimeout(() => {
      setOrderMessage("");
    }, 4000);
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          QuickCart
        </div>

        <input
          type="text"
          className="search"
          placeholder="Search for products, brands and more"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {user ? (
          <button
            className="login-btn"
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <button
            className="login-btn"
            onClick={() =>
              setShowLogin(
                true
              )
            }
          >
            Login
          </button>
        )}

        <button
          className="wishlist-nav"
          onClick={() => {
            setShowWishlist(
              !showWishlist
            );
            setShowCart(false);
            setShowOrders(false);
          }}
        >
          ❤️ Wishlist (
          {wishlist.length})
        </button>

        <button
          className="orders-nav"
          onClick={() => {
            setShowOrders(
              !showOrders
            );
            setShowCart(false);
            setShowWishlist(
              false
            );
          }}
        >
          📦 My Orders (
          {orders.length})
        </button>

        <button
          className="cart"
          onClick={() => {
            setShowCart(
              !showCart
            );
            setShowWishlist(
              false
            );
            setShowOrders(false);
          }}
        >
          🛒 Cart (
          {totalItems})
        </button>

      </nav>

      {user && (
        <div className="welcome-message">
          Welcome, {user}!
        </div>
      )}

      {orderMessage && (
        <div className="success-message">
          {orderMessage}
        </div>
      )}

      {/* LOGIN */}

      {showLogin && (
        <div className="login-overlay">

          <div className="login-box">

            <button
              className="close-btn"
              onClick={() =>
                setShowLogin(
                  false
                )
              }
            >
              ×
            </button>

            <div className="login-left">

              <h2>
                Login
              </h2>

              <p>
                Get access to your
                Orders, Wishlist and
                Recommendations
              </p>

            </div>

            <div className="login-right">

              <form
                onSubmit={
                  handleLogin
                }
              >

                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                />

                <button
                  type="submit"
                  className="login-submit-btn"
                >
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>
      )}

      {/* CHECKOUT */}

      {showCheckout && (
        <div className="checkout-overlay">

          <div className="checkout-box">

            <button
              className="close-btn"
              onClick={() => {
                setShowCheckout(
                  false
                );
                setPaymentMethod(
                  ""
                );
              }}
            >
              ×
            </button>

            {checkoutType?.step ===
              "address" && (
              <>
                <h2 className="checkout-title">
                  Delivery Address
                </h2>

                <div className="address-form">

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={
                      address.fullName
                    }
                    onChange={
                      handleAddressChange
                    }
                  />

                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={
                      address.mobile
                    }
                    onChange={
                      handleAddressChange
                    }
                  />

                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={
                      address.pincode
                    }
                    onChange={
                      handleAddressChange
                    }
                  />

                  <textarea
                    name="house"
                    placeholder="House No., Building, Street, Area"
                    value={
                      address.house
                    }
                    onChange={
                      handleAddressChange
                    }
                  />

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={
                      address.city
                    }
                    onChange={
                      handleAddressChange
                    }
                  />

                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={
                      address.state
                    }
                    onChange={
                      handleAddressChange
                    }
                  />

                  <button
                    className="continue-btn"
                    onClick={
                      continueToPayment
                    }
                  >
                    CONTINUE TO PAYMENT
                  </button>

                </div>
              </>
            )}

            {checkoutType?.step ===
              "payment" && (
              <>
                <h2 className="checkout-title">
                  Select Payment Method
                </h2>

                <div className="payment-options">

                  <label className="payment-option">

                    <input
                      type="radio"
                      name="payment"
                      checked={
                        paymentMethod ===
                        "cod"
                      }
                      onChange={() =>
                        setPaymentMethod(
                          "cod"
                        )
                      }
                    />

                    💵 Cash on Delivery

                  </label>

                  <label className="payment-option">

                    <input
                      type="radio"
                      name="payment"
                      checked={
                        paymentMethod ===
                        "online"
                      }
                      onChange={() =>
                        setPaymentMethod(
                          "online"
                        )
                      }
                    />

                    💳 Online Payment

                  </label>

                </div>

                <button
                  className="confirm-order-btn"
                  onClick={
                    confirmPayment
                  }
                >
                  {paymentMethod ===
                  "cod"
                    ? "PLACE ORDER"
                    : "PAY & PLACE ORDER"}
                </button>
              </>
            )}

          </div>

        </div>
      )}

      {/* PRODUCT DETAILS */}

      {selectedProduct && (
        <div className="product-overlay">

          <div className="product-details">

            <button
              className="close-btn"
              onClick={() =>
                setSelectedProduct(
                  null
                )
              }
            >
              ×
            </button>

            <div className="details-left">

              <div className="details-image">

                <img
                  src={
                    selectedProduct.image
                  }
                  alt={
                    selectedProduct.name
                  }
                />

              </div>

              <div className="details-buttons">

                <button
                  className="details-cart-btn"
                  onClick={() =>
                    addToCart(
                      selectedProduct
                    )
                  }
                >
                  🛒 ADD TO CART
                </button>

                <button
                  className="buy-now-btn"
                  onClick={() =>
                    buyNow(
                      selectedProduct
                    )
                  }
                >
                  ⚡ BUY NOW
                </button>

              </div>

            </div>

            <div className="details-info">

              <h1 className="product-title">
                {
                  selectedProduct.name
                }
              </h1>

              <div className="product-rating">

                <span>
                  ⭐ 4.4
                </span>

                <small>
                  1,245 Ratings
                </small>

              </div>

              <h2 className="details-price">
                {
                  selectedProduct.price
                }
              </h2>

              <div className="product-info-row">

                <div className="info-label">
                  Category
                </div>

                <div>
                  {
                    selectedProduct.category
                  }
                </div>

              </div>

              <div className="product-info-row">

                <div className="info-label">
                  <strong>
                    About this product
                  </strong>
                </div>

                <div>
                  {
                    selectedProduct.description
                  }
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* CART */}

      {showCart && (
        <div className="cart-section">

          <h2>
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty.
            </p>
          ) : (
            <>
              {cart.map(
                (product) => {
                  const subtotal =
                    getPriceNumber(
                      product.price
                    ) *
                    product.quantity;

                  return (
                    <div
                      className="cart-item"
                      key={
                        product.name
                      }
                    >

                      <img
                        src={
                          product.image
                        }
                        alt={
                          product.name
                        }
                      />

                      <div className="cart-product-info">

                        <h3>
                          {
                            product.name
                          }
                        </h3>

                        <p className="cart-price">
                          {
                            product.price
                          }
                        </p>

                        <div className="quantity-box">

                          <button
                            onClick={() =>
                              decreaseQuantity(
                                product.name
                              )
                            }
                          >
                            −
                          </button>

                          <span>
                            {
                              product.quantity
                            }
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(
                                product.name
                              )
                            }
                          >
                            +
                          </button>

                        </div>

                        <p className="subtotal">
                          Subtotal: ₹
                          {subtotal.toLocaleString(
                            "en-IN"
                          )}
                        </p>

                      </div>

                      <button
                        className="remove-btn"
                        onClick={() =>
                          removeFromCart(
                            product.name
                          )
                        }
                      >
                        Remove
                      </button>

                    </div>
                  );
                }
              )}

              <div className="cart-summary">

                <div>

                  <span>
                    Total Items
                  </span>

                  <strong>
                    {totalItems}
                  </strong>

                </div>

                <div>

                  <span>
                    Total Price
                  </span>

                  <strong>
                    ₹
                    {totalPrice.toLocaleString(
                      "en-IN"
                    )}
                  </strong>

                </div>

                <button
                  className="place-order-btn"
                  onClick={
                    placeOrder
                  }
                >
                  🛍️ PLACE ORDER
                </button>

              </div>
            </>
          )}

        </div>
      )}

      {/* WISHLIST */}

      {showWishlist && (
        <div className="wishlist-section">

          <h2>
            My Wishlist ❤️
          </h2>

          {wishlist.length ===
          0 ? (
            <p>
              Your wishlist is
              empty.
            </p>
          ) : (
            wishlist.map(
              (product) => (
                <div
                  className="wishlist-item"
                  key={
                    product.name
                  }
                >

                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                  />

                  <div className="wishlist-product-info">

                    <h3>
                      {
                        product.name
                      }
                    </h3>

                    <p>
                      {
                        product.price
                      }
                    </p>

                    <button
                      className="wishlist-cart-btn"
                      onClick={() =>
                        addToCart(
                          product
                        )
                      }
                    >
                      Add to Cart
                    </button>

                  </div>

                  <button
                    className="remove-wishlist-btn"
                    onClick={() =>
                      removeFromWishlist(
                        product.name
                      )
                    }
                  >
                    Remove
                  </button>

                </div>
              )
            )
          )}

        </div>
      )}

      {/* ORDERS */}

      {showOrders && (
        <div className="orders-section">

          <h2>
            My Orders 📦
          </h2>

          {orders.length ===
          0 ? (
            <p>
              You have not placed
              any orders yet.
            </p>
          ) : (
            orders.map(
              (order) => (
                <div
                  className="order-card"
                  key={order.id}
                >

                  <div className="order-header">

                    <div>

                      <div className="order-date">
                        Ordered on{" "}
                        {order.date}
                      </div>

                      <div className="order-id">
                        Order ID:{" "}
                        {order.id}
                      </div>

                    </div>

                    <div className="order-status">
                      {
                        order.status
                      }
                    </div>

                  </div>

                  {order.items.map(
                    (product) => (
                      <div
                        className="order-product"
                        key={
                          product.name
                        }
                      >

                        <img
                          src={
                            product.image
                          }
                          alt={
                            product.name
                          }
                        />

                        <div>

                          <h4>
                            {
                              product.name
                            }
                          </h4>

                          <p>
                            {
                              product.price
                            }
                          </p>

                          <p>
                            Quantity:{" "}
                            {
                              product.quantity
                            }
                          </p>

                        </div>

                      </div>
                    )
                  )}

                  <div className="order-total">

                    <strong>
                      Total
                    </strong>

                    <strong>
                      ₹
                      {order.totalPrice.toLocaleString(
                        "en-IN"
                      )}
                    </strong>

                  </div>

                  <div className="order-payment">
                    Payment:{" "}
                    {
                      order.paymentMethod
                    }
                  </div>

                  <button
                    className="cancel-order-btn"
                    onClick={() =>
                      cancelOrder(
                        order.id
                      )
                    }
                  >
                    CANCEL ORDER
                  </button>

                </div>
              )
            )
          )}

        </div>
      )}

      {/* CATEGORIES */}

      <div className="categories">

        {categories.map(
          (category) => (
            <div
              key={category}
              className={`category ${
                selectedCategory ===
                category
                  ? "active-category"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(
                  category
                )
              }
            >
              {category}
            </div>
          )
        )}

      </div>

      {/* PRODUCTS */}

      <section className="products-section">

        <h2>
          {selectedCategory ===
          "All"
            ? "Best Deals on Top Products"
            : selectedCategory}
        </h2>

        <div className="products">

          {loading ? (
            <h3 className="no-product">
              Loading products...
            </h3>
          ) : productError ? (
            <h3 className="no-product">
              {productError}
            </h3>
          ) : filteredProducts.length >
            0 ? (
            filteredProducts.map(
              (product) => (
                <div
                  className="product-card"
                  key={
                    product.id ||
                    product.name
                  }
                >

                  <button
                    className="wishlist-heart"
                    onClick={() =>
                      toggleWishlist(
                        product
                      )
                    }
                  >
                    {isInWishlist(
                      product.name
                    )
                      ? "❤️"
                      : "🤍"}
                  </button>

                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    className="product-image"
                    onClick={() =>
                      setSelectedProduct(
                        product
                      )
                    }
                  />

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.price}
                  </p>

                  <button
                    onClick={() =>
                      addToCart(
                        product
                      )
                    }
                  >
                    Add to Cart
                  </button>

                </div>
              )
            )
          ) : (
            <h3 className="no-product">
              No products found
            </h3>
          )}

        </div>

      </section>

    </div>
  );
}

export default App;