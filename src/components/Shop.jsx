import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  console.log(order)

  const addToBasket = (item) => {
    // Из item получаем объект с id, названием и ценой.
    // Проверяем был ли он ранее добавлен.
    // Если нет, росто добавляем новый
    const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return item; // Должен быть orderItem
        }
      });

      setOrder(newOrder);
    };
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      // Массив опция для того чтоб мы
      // отправляли заголовки
      headers: {
        'Authorization': API_KEY,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.shop);
        setLoading(false);
        console.log(data);
      });

  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
    </main>
  );
};

export {Shop};