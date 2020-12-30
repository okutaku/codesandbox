import React from "react";

const ColorfulMessage = (props) => {
  //動的に変更したい部分をpropsで受け取る
  const { color, children } = props; //分割代入　毎回propsとかくのはめんどくさいから
  const contentStyle = {
    color: color, //オブジェクト：propsのなかのcolorの意味になる
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
  //childrenはそのまま返ってくる
};

export default ColorfulMessage;
