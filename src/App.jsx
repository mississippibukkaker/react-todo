import { useEffect, useState } from "react";
import "./styles.css";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--app--");
  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>こんにちは!</h1>
      <ColorfulMessage color="blue">sss</ColorfulMessage>
      <ColorfulMessage color="green">sss</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>('@__@`)</p>}
    </>
  );
};
