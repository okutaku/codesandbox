import React from "react";

const App = () => {
  const onClick = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  // スタイルを指定する場合は２種類あり、{}で中身を書くか、定数宣言してから中身を書いていくか
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>こんばんわ</p>
      <button onClick={onClick}> のたん</button>
    </>
  );
};

export default App;
