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
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          PDF
        </a>
      </Menu.Item>
      <Menu.Item key="registro">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          REGISTRO
        </a>
      </Menu.Item>

      <Menu.Item key="inversion">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          INVERSIÓN
        </a>
      </Menu.Item>

      <Menu.Item key="telegram">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          TELEGRAM
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBnb;
