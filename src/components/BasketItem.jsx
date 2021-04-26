function BasketItem(props) {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incrementQuantity = Function.prototype,
    decrementQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {displayName} <i className="material-icons basket-quantity" onClick={() => decrementQuantity(mainId)}>remove</i>x{quantity} <i className="material-icons basket-quantity" onClick={() => incrementQuantity(mainId)}>add</i> = {price.regularPrice * quantity} руб.
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(mainId)}
      >
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  );
};

export {BasketItem};