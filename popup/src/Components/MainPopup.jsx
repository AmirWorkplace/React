import React from "react";
import "./style.css";
import FaqPopup from "./FaqPopup";
// import Style from "../style.module.css";

export default class MainPopup extends React.Component {
  render() {
    const question2 = `Tell us about Yout Country?`;
    const content2 = `Bangladesh is a country in Southern Asia and is located on the Bay of Bengal bordered by India on all sides except for a small border with Burma. Bangladesh has flat plains, and most of the country is situated on deltas of large rivers flowing from the Himalayas.`;
    const question1 = "Tell me About Your Country ? And Yourself ...!";
    const content1 = `বিগো অ্যাপের লাইভ ভিডিওর মাধ্যমে অশ্লীলতা ছড়ানোর অভিযোগে গত বছরের জুন মাসে চীনা নাগরিক ইয়াও জি–সহ পাঁচজনকে গ্রেপ্তার করে সিআইডি। পরে তাঁদের বিরুদ্ধে পল্টন থানায় ডিজিটাল নিরাপত্তা ও পর্নোগ্রাফি নিয়ন্ত্রণ আইনে মামলা হয়। মামলার অপর চার আসামি হলেন বিগো বাংলার কর্মী মোস্তাফা সাইফ রেজা, আরিফ হোসেন, এস এম নাজমুল হক ও আসমা উল হুসনা সেজুতী। চীনা নাগরিকসহ অন্যরা এখন কারাগারে। \n মামলাটি তদন্ত করতে গিয়ে বিগো লাইভ বাংলা লিমিটেডের বিদেশে অর্থ পাচারের বিষয়টি জানতে পারে সিআইডি। পরে অর্থ পাচারের অভিযোগের বিষয়টি অনুসন্ধান শুরু করেন সিআইডির এসআই সোহেল রানা। বিগো বাংলার বিরুদ্ধে মানি লন্ডারিংয়ের সুনির্দিষ্ট তথ্যপ্রমাণ পাওয়ায় সংস্থাটি মামলা করেছে। \n বাংলাদেশে বিগো অ্যাপের ব্যবহারকারীদের বিরুদ্ধে যৌন উত্তেজনা সৃষ্টিকারী অশ্লীল সংলাপ, অভিনয়, অঙ্গভঙ্গি ছড়ানোর অভিযোগ রয়েছে। বিগো অ্যাপের ব্যবহারকারীদের বড় অংশ তরুণ-তরুণী এবং প্রবাসী বাংলাদেশি নাগরিক। এই অ্যাপে দুই ধরনের আইডি রয়েছে। একটি আইডির নাম ব্রডকাস্টার। ব্রডকাস্টার আইডি ব্যবহার করেন তরুণ-তরুণীরা। \n ভিডিও স্ট্রিমিংয়ের নামে অশ্লীলতা ছড়িয়ে দেওয়া হয়। লাইভ স্ট্রিমিংয়ে আড্ডা দেওয়ার জন্য ব্যবহারকারীদের ভার্চ্যুয়াল মুদ্রা ডায়মন্ড কিংবা বিনস কিনতে হয়। মুঠোফোনভিত্তিক আর্থিক সেবাদানকারী প্রতিষ্ঠানের অ্যাপের মাধ্যমে ডায়মন্ড কেনা যেত। \n বিগো বাংলার মূল প্রতিষ্ঠানের নাম বিগো টেকনোলজি। সিঙ্গাপুরভিত্তিক টেকনোলজি বিগোর যাত্রা শুরু ২০১৬ সালে।`;
    return (
      <div className="main-popup">
        <div className="popup-part">
          <FaqPopup
            SerialNumber="01"
            Questions={question1}
            Contents={content1}
            Contactslink="http://www.github.com"
            Connectlink="http://www.github.com/AmirWorkplace"
          />
        </div>
        <div className="popup-part">
          <FaqPopup
            SerialNumber="02"
            Questions={question2}
            Contents={content2}
            Contactslink="http://www.github.com"
            Connectlink="http://www.github.com/AmirWorkplace"
          />
        </div>
        <div className="popup-part">
          <FaqPopup
            SerialNumber="03"
            Questions={question1}
            Contents={content1}
            Contactslink="http://www.github.com"
            Connectlink="http://www.github.com/AmirWorkplace"
          />
        </div>
        <div className="popup-part">
          <FaqPopup
            SerialNumber="04"
            Questions={question2}
            Contents={content2}
            Contactslink="http://www.github.com"
            Connectlink="http://www.github.com/AmirWorkplace"
          />
        </div>
      </div>
    );
  }
}
/* 

import MainPopup from "./MainPopup";
import FaqPopup from "./FaqPopup";
  const {textContnts} = this.props;
const  = this.props;
    const setCopied = useState(false);

  const textContnts = `বিগো অ্যাপের লাইভ ভিডিওর মাধ্যমে অশ্লীলতা ছড়ানোর অভিযোগে গত বছরের জুন মাসে চীনা নাগরিক ইয়াও জি–সহ পাঁচজনকে গ্রেপ্তার করে সিআইডি। পরে তাঁদের বিরুদ্ধে পল্টন থানায় ডিজিটাল নিরাপত্তা ও পর্নোগ্রাফি নিয়ন্ত্রণ আইনে মামলা হয়। মামলার অপর চার আসামি হলেন বিগো বাংলার কর্মী মোস্তাফা সাইফ রেজা, আরিফ হোসেন, এস এম নাজমুল হক ও আসমা উল হুসনা সেজুতী। চীনা নাগরিকসহ অন্যরা এখন কারাগারে। \n মামলাটি তদন্ত করতে গিয়ে বিগো লাইভ বাংলা লিমিটেডের বিদেশে অর্থ পাচারের বিষয়টি জানতে পারে সিআইডি। পরে অর্থ পাচারের অভিযোগের বিষয়টি অনুসন্ধান শুরু করেন সিআইডির এসআই সোহেল রানা। বিগো বাংলার বিরুদ্ধে মানি লন্ডারিংয়ের সুনির্দিষ্ট তথ্যপ্রমাণ পাওয়ায় সংস্থাটি মামলা করেছে। \n বাংলাদেশে বিগো অ্যাপের ব্যবহারকারীদের বিরুদ্ধে যৌন উত্তেজনা সৃষ্টিকারী অশ্লীল সংলাপ, অভিনয়, অঙ্গভঙ্গি ছড়ানোর অভিযোগ রয়েছে। বিগো অ্যাপের ব্যবহারকারীদের বড় অংশ তরুণ-তরুণী এবং প্রবাসী বাংলাদেশি নাগরিক। এই অ্যাপে দুই ধরনের আইডি রয়েছে। একটি আইডির নাম ব্রডকাস্টার। ব্রডকাস্টার আইডি ব্যবহার করেন তরুণ-তরুণীরা। \n ভিডিও স্ট্রিমিংয়ের নামে অশ্লীলতা ছড়িয়ে দেওয়া হয়। লাইভ স্ট্রিমিংয়ে আড্ডা দেওয়ার জন্য ব্যবহারকারীদের ভার্চ্যুয়াল মুদ্রা ডায়মন্ড কিংবা বিনস কিনতে হয়। মুঠোফোনভিত্তিক আর্থিক সেবাদানকারী প্রতিষ্ঠানের অ্যাপের মাধ্যমে ডায়মন্ড কেনা যেত। \n বিগো বাংলার মূল প্রতিষ্ঠানের নাম বিগো টেকনোলজি। সিঙ্গাপুরভিত্তিক টেকনোলজি বিগোর যাত্রা শুরু ২০১৬ সালে।`;
/* /*{/* <p> [copied,, setValue]
        {copied} {setValue}
      </p> * /}
  <textarea className="peragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ullam.
        Sunt dolor voluptate eius? Ad, quos, labore cumque tempora dignissimos
        aspernatur quam veritatis eos odit saepe eius molestias recusandae
        praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam eveniet provident, delectus optio facilis in quasi tenetur
        maiores laborum deleniti nobis iure magni id corporis animi
        exercitationem nesciunt adipisci at. border
      </textarea> 
      
            {/* // value={value}
      onMouseEnter={{ target: { value } }) => setValue(value)} * /* /

<p>{textContnts}</p> , textareaContrnts
      
     const texts = `বিগো অ্যাপের লাইভ ভিডিওর মাধ্যমে অশ্লীলতা ছড়ানোর অভিযোগে গত বছরের জুন মাসে চীনা নাগরিক ইয়াও জি–সহ পাঁচজনকে গ্রেপ্তার করে সিআইডি। পরে তাঁদের বিরুদ্ধে পল্টন থানায় ডিজিটাল নিরাপত্তা ও পর্নোগ্রাফি নিয়ন্ত্রণ আইনে মামলা হয়। মামলার অপর চার আসামি হলেন বিগো বাংলার কর্মী মোস্তাফা সাইফ রেজা, আরিফ হোসেন, এস এম নাজমুল হক ও আসমা উল হুসনা সেজুতী। চীনা নাগরিকসহ অন্যরা এখন কারাগারে। \n মামলাটি তদন্ত করতে গিয়ে বিগো লাইভ বাংলা লিমিটেডের বিদেশে অর্থ পাচারের বিষয়টি জানতে পারে সিআইডি। পরে অর্থ পাচারের অভিযোগের বিষয়টি অনুসন্ধান শুরু করেন সিআইডির এসআই সোহেল রানা। বিগো বাংলার বিরুদ্ধে মানি লন্ডারিংয়ের সুনির্দিষ্ট তথ্যপ্রমাণ পাওয়ায় সংস্থাটি মামলা করেছে। \n বাংলাদেশে বিগো অ্যাপের ব্যবহারকারীদের বিরুদ্ধে যৌন উত্তেজনা সৃষ্টিকারী অশ্লীল সংলাপ, অভিনয়, অঙ্গভঙ্গি ছড়ানোর অভিযোগ রয়েছে। বিগো অ্যাপের ব্যবহারকারীদের বড় অংশ তরুণ-তরুণী এবং প্রবাসী বাংলাদেশি নাগরিক। এই অ্যাপে দুই ধরনের আইডি রয়েছে। একটি আইডির নাম ব্রডকাস্টার। ব্রডকাস্টার আইডি ব্যবহার করেন তরুণ-তরুণীরা। \n ভিডিও স্ট্রিমিংয়ের নামে অশ্লীলতা ছড়িয়ে দেওয়া হয়। লাইভ স্ট্রিমিংয়ে আড্ডা দেওয়ার জন্য ব্যবহারকারীদের ভার্চ্যুয়াল মুদ্রা ডায়মন্ড কিংবা বিনস কিনতে হয়। মুঠোফোনভিত্তিক আর্থিক সেবাদানকারী প্রতিষ্ঠানের অ্যাপের মাধ্যমে ডায়মন্ড কেনা যেত। \n বিগো বাংলার মূল প্রতিষ্ঠানের নাম বিগো টেকনোলজি। সিঙ্গাপুরভিত্তিক টেকনোলজি বিগোর যাত্রা শুরু ২০১৬ সালে।`; * /

/* <div className="App">
      <h1>Syed Amir Ali</h1>
    </div> * /
    
onClick={() => setShow(!show)}
    const { show, setShow } = this.state;
    const [show, setShow] = useState(true);
    const ShowStatus = (
      <div className="content">
        <textarea className="peragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ullam.
          Sunt dolor voluptate eius? Ad, quos, labore cumque tempora dignissimos
          aspernatur quam veritatis eos odit saepe eius molestias recusandae
          praesentium! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magnam eveniet provident, delectus optio facilis in quasi tenetur
          maiores laborum deleniti nobis iure magni id corporis animi
          exercitationem nesciunt adipisci at.
        </textarea>
        <div className="connections">
          <div className="contact">
            <a href="/"> Contact Me</a>
          </div>
          <div className="connect">
            <a href="/">Connect Me</a>
          </div>
        </div>
        <div className="serial-num">
          <h1>01</h1>
        </div>
      </div>
    );
    Max: 75px Min: 38px

    return (
      <div className="popup">
        <div className="container">
          <div className="heading">
            <h1 className="serial-no">01</h1>
            <h2 className="question">About me Who I am ?</h2>
          </div>
          <div className="settings">
            <i className="fas fa-copy copy-btn"></i>
            <i className="fas fa-arrows-up-to-line show-btn"></i>
          </div>
        </div>
        {/* {show ? ShowStatus : null} * /}
        {ShowStatus}
      </div>
    );
import Button from "./Button";
import { useState } from "react";

    show: useState(true),
    setShow: useState(true),

        {/* <Button /> * /}

    */
