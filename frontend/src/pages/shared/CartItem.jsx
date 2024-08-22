/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../stores/cart";

const CartItem = ({ item }) => {
  const { productId, quantity } = item;
  const [detail, setDetail] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/book/${productId}`);
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("Failed to fetch book details:", error);
      }
    };

    fetchBookDetails();
  }, [productId]);

  const handleMinusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity - 1 }));
  };

  const handlePlusQuantity = () => {
    dispatch(changeQuantity({ productId, quantity: quantity + 1 }));
  };

  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-between gap-2 p-4 mt-4 border-b-2 border-blue-400">
      <div>
        <p className="text-lg font-bold text-justify">{detail.bookTitle}</p>
      </div>

      <div className="flex items-center gap-2">
        <span
          onClick={handleMinusQuantity}
          className="px-2 text-xl font-bold text-white bg-blue-900 cursor-pointer"
        >
          -
        </span>
        <span className="px-2 text-xl font-bold text-white bg-blue-900">
          {quantity}
        </span>
        <span
          onClick={handlePlusQuantity}
          className="px-2 text-xl font-bold text-white bg-blue-900 cursor-pointer"
        >
          +
        </span>
      </div>
    </div>
  );
};

export default CartItem;
