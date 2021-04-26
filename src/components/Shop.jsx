import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {BasketList} from './BasketList';

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  // Состояние отвечающее за
  // то видим ли мы сейчас коризину или нет
  const [isBasketShow, setBasketShow] = useState(false);

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
          return orderItem; // Должен быть orderItem
        }
      });

      setOrder(newOrder);
    };
  };

  // Функция управляющая состоянием показа
  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
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
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} />}
    </main>
  );
};

export {Shop};