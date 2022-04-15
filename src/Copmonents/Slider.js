import { useEffect, useState } from "react";
import {HashRouter, BrowserRouter as Router, Route,Link, Switch, Routes} from 'react-router-dom'

const images = [
  "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg",
  "https://www.google.com/chrome/static/images/download-browser/big_pixel_phone.png",
  "https://i2.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/02/google-chrome-icon-update-1.jpeg?ssl=1"
];
export default function App() {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="imageSlider">
      <img className="sliderImage" src={images[index]} alt="" />

    </div>
  );
}