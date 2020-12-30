import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClick = () => alert();
  // スタイルを指定する場合は２種類あり、{}で中身を書くか、定数宣言してから中身を書いていくか
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="red">こんばんわ</ColorfulMessage>
      <button onClick={onClick}> のたん</button>
    </>
  );
};

export default App;
