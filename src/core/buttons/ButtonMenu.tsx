import React from 'react';

interface IButtonMenu {
    text: string;
    bgColor: string;
    textColor: string;
    icon?: React.ReactNode;
};

const ButtonMenu: React.FC<IButtonMenu> = ({text, bgColor, textColor}) => {
  return (
    <button style={{backgroundColor: bgColor, color: textColor}}>
        {`${text}`}
    </button>
  );
};

export default ButtonMenu;