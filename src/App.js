import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  //値がかわると再レンダリングされる
  //おおきくなってくると遅くなってきてしまうので再レンダリング処理をなくすことをしていく
  //stateの変更、propsの中身の変更,親のコンポーネントが変更になった場合
  //useStateを使ってstateをする
  //最初の引数に変数名、変更するための関数　（）の中は初期値を設定できる
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

//useEffectで処理の関心を分離できる
//最後の引数で値を設定することでそこの変更にあった場合のみに走るようになる
useEffect(() => {
  if(num > 0){
    if (num % 3 === 0){
      faceShowFlag || setFaceShowFlag(true);
      //三項演算子,ifの処理をいれないと右が毎回trueに切り替わり再レンダリングがたくさん行われる
      //再レンダリング処理エラーが出たときは、stateあたりを見る
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }
},[num]);
//から配列の場合コンポーネントが実行される最初の１回だけ実行できる処理もかける

  return (
    // スタイルを指定する場合は２種類あり、{}で中身を書くか、定数宣言してから中身を書いていくか
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="red">こんばんわ</ColorfulMessage>
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
