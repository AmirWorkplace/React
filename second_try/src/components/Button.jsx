import React from "react";
import style from "./simple.module.css";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;

    if (currentChange === nextChange && currentLocale === nextLocale) {
      return false;
    }

    return true;
  }

  render() {
    console.log("Button Component Rendered");
    const { change, locale, show } = this.props;

    return (
      <div>
        <button
          type="button"
          className={style.clickBtn}
          onClick={() => change(locale)}
        >
          {locale === "bn-BD" ? "Change The Clock !" : "ঘড়ি পরিবর্তন করুন !"}
        </button>
        {show && (
          <p className={style.lh}>
            As Probably it's Okey, <br /> And It's Inline Conditions Systems
            Like : if, elseif ...!
          </p>
        )}
      </div>
    );
  }
}
export default Button;
