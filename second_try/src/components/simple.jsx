import React from "react";
import style from "./simple.module.css";

class Simple extends React.Component {
  time = new Date().toLocaleTimeString();

  special = ["Sabbir", "Pranto", 22, 19];
  one = 0;
  incre = 0;

  change() {
    console.log("Amir Ali");
    const peraSec = document.querySelector(".showText");
    console.log(peraSec);
  }

  // hanleClick() {
  //   const clickBtn = ref.clickBtn;
  // }
  render() {
    return (
      <section className={style.border}>
        <div className="display-flex w-100% height-100vh align-items-center justify-content-center">
          <h1>I make a Clock</h1>
          <strong></strong>
        </div>
        <div className="friends">
          <h2>{this.special[0]} is my one of the Best Friend...</h2>
          <br />
          But, , ,<h2>{this.special[1]} is my favourite Friends ...</h2>
          <br />
          <h3>
            {this.special[0]} age is {this.special[2]} and {this.special[1]} age
            is {this.special[3]}
          </h3>
        </div>
        <footer className="text-3xl font-bold underline">
          Created By Syed Amir Ali !
        </footer>
        {/* Button Sections */}

        <button
          className={style.clickBtn}
          onClick={this.change} /*  ref={clickBtn} */
        >
          Click Me
        </button>

        <div className={style.peraSec}>
          <div className={style.showText}>
            <h1>This is my first Heading on React: 2022</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium, consectetur laudantium tenetur dolore ipsum ad
              quibusdam. Provident exercitationem aperiam laudantium ullam quod
              nesciunt quisquam! Quia ratione dignissimos deleniti ipsum
              mollitia! Fugit debitis labore veritatis impedit sint tempora
              aliquid officia aut assumenda, nemo repellendus. Possimus eius eum
              non cumque, neque porro, quia nobis magnam veritatis dolore
              tempore deserunt, dolorem consectetur voluptatibus. Accusamus
              tempore ipsum repellendus. Quos repudiandae odit, aspernatur sunt
              doloremque, vitae iure a nobis reiciendis rem officiis eum quis
              mollitia recusandae incidunt atque numquam distinctio et ab odio
              dolore. Molestiae. Hic at, consequuntur blanditiis totam labore
              sapiente distinctio similique sint! Corrupti iusto temporibus,
              incidunt delectus voluptas assumenda, atque qui unde et dolorem
              provident, non dignissimos enim. Ab assumenda natus facilis? Ipsa
              consectetur vel doloremque maxime! Praesentium labore minus
              perferendis? Nam soluta minus quas. Commodi, sequi delectus dolor
              suscipit excepturi adipisci ex voluptatibus aliquid dolorem
              consequatur, facere eum maxime facilis sed.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Simple;
/* time = new Date().toLocaleTimeString();
  setInterval(() => {
    const Clock = (
      <div className="display-flex w-100% height-100vh align-items-center justify-content-center">
        <h1>This is a Clock</h1>
          <strong>${this.time}</strong>
      </div>
    );
  }, 1000); */
