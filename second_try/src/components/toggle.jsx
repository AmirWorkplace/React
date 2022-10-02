import { useEffect, useRef } from "react";
import style from "./simple.module.css";

export default function Togle() {
  const ref = useRef(null);

  useEffect(() => {
    console.log("className 👉️", ref.current.className);

    // 👇️ check if element contains class
    if (ref.current.classList.contains("my-class")) {
      console.log("Element contains class");
    } else {
      console.log("Element does NOT contain class");
    }
  }, []);

  const handleClick = (event) => {
    console.log("className 👉️", event.currentTarget.className);
    // const refer = "texts";
    // console.log("classname", ref.current.className);
    // 👇️ check if element contains class
    if (event.currentTarget.classList.contains("my-class")) {
      console.log("Element contains class");
    } else {
      console.log("Element does NOT contain class");
    }
  };

  return (
    <div className={style.border}>
      <button
        ref={ref}
        className={`${style.clickBtn} my-class`}
        onClick={handleClick}
      >
        Click Me !
      </button>

      <div className={` `}></div>

      <div className={style.showText}>
        <h1>Test :</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          libero sed explicabo accusamus numquam, modi alias accusantium quos
          beatae eveniet. Facere cum numquam veniam quas. Explicabo odio eum
          beatae minus neque molestiae, voluptatem quaerat, quia excepturi
          nostrum atque numquam ut? Expedita ipsam nemo eius. Illum molestiae
          reiciendis pariatur qui, sunt ea magni autem. Maiores, magnam earum,
          minus laboriosam autem cupiditate distinctio doloremque blanditiis
          porro est culpa fugit ullam, nesciunt incidunt hic non praesentium!
          Fugit fuga autem enim dolorem, laudantium perspiciatis pariatur alias
          eos! Consectetur fuga, unde molestiae corporis animi qui dolore
          maiores delectus at, similique blanditiis eaque cum pariatur
          reiciendis!
        </p>
      </div>
    </div>
  );
}
