import React from "react";
import { useState } from "react";
import "./App.css";

const Theme = () => {
  const [theme, setTheme] = useState(false);
  const [view, setView] = useState(true);
  let dark = "Dark",
    light = "Light";

  return (
    <div>
      <span className={`switch ${view ? "active" : ""}`}>
        {theme ? (
          <span className="th-clr">{light}</span>
        ) : (
          <span className="th-clr">{dark}</span>
        )}
        <span
          className="switch-inner"
          onClick={() => {
            setTheme(!document.body.classList.toggle("darkTheme"));
            setView(!view);
          }}
        ></span>
      </span>
    </div>
  );
};

export default Theme;
/* 
  const body = document.body.classList.add("darkTheme");
import React from "react";
import { useState } from "react";
import "./App.css";

const Theme = () => {
  const [theme, setTheme] = useState(false);
  // const body = document.body.classList.add("darkTheme");
  if (localStorage.getItem("themes") == "light") {
    document.body.classList.remove("darkTheme");
  } else if (localStorage.getItem("themes") == "dark") {
    document.body.classList.add("darkTheme");
  } else {
    localStorage.setItem("themes", "light");
  }

  return (
    <div>
      {theme ? document.body.classList.toggle("darkTheme") : null}
      <button
        onClick={() =>
          setTheme(!document.body.classList.toggle("darkTheme"))(
            localStorage.getItem("themes") == "light"
              /? localStorage.setItem("themes", "dark")
              : localStorage.setItem("themes", "light")
          )
        }
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Theme;

/* 
  <div>
      {theme ? document.body.classList.toggle("darkTheme") : null}
      <button
        onClick={() => setTheme(!document.body.classList.toggle("darkTheme"))}
      >
        {theme ? "Dark" : "Light"}
      </button>
    </div>
  * /

    <button
        onClick={() => setTheme(!document.body.classList.toggle("darkTheme"))}
      >
        {theme ? dark : light}
      </button>
*/
