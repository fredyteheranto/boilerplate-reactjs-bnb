import React, { useState } from "react";
import { Menu } from "antd";
const MenuBnb = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e });
  };

  return (
    <Menu
      onClick={(e) => handleClick()}
      selectedKeys={[current]}
      mode="horizontal"
    >
      <Menu.Item key="pdf">
        <a href="#pdf" rel="noopener noreferrer">
          PDF
        </a>
      </Menu.Item>
      <Menu.Item key="registro">
        <a href="#registro" rel="noopener noreferrer">
          REGISTRO
        </a>
      </Menu.Item>

      <Menu.Item key="inversion">
        <a href="#inversion" rel="noopener noreferrer">
          INVERSIÓN
        </a>
      </Menu.Item>

      <Menu.Item key="telegram">
        <a href="#telegram" rel="noopener noreferrer">
          TELEGRAM
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBnb;
