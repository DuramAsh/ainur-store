import React from 'react';
import classes from './Selector.module.css'

const Selector = () => {
  return (
    <select className={classes.mySelect}>
      <option defaultValue>Все товары</option>
      <option>Головные уборы</option>
      <option>Для девочек</option>
      <option>Для мальчиков</option>
      <option>Куртки</option>
      <option>Обувь</option>
      <option>Платья</option>
      <option>Сумки-рюкзаки</option>
    </select>
  );
};

export default Selector;