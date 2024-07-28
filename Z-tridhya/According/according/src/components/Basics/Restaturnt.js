import React, { useState } from 'react';
import Menu from "./menuApi";
import "./style.css"
import Menucardcc from './Menucardcc';
import Navbarcc from './Navbarcc';

const uniqueList = [...new Set(Menu.map((curElem) => {
  return curElem.category;
})), "All"]

const Restaturnt = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbarcc menuList={menuList} filterItem={filterItem} />
      <Menucardcc menuData={menuData} />
    </>
  )
}

export default Restaturnt
















