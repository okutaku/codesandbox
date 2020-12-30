import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //useStateを使ってstateをする
  //最初の引数に変数名、変更するための関数　（）の中は初期値を設定できる
  const [num, setNum] = useState(0);
  return (
    // スタイルを指定する場合は２種類あり、{}で中身を書くか、定数宣言してから中身を書いていくか
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="red">こんばんわ</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
    </>
  );
};

export default App;
