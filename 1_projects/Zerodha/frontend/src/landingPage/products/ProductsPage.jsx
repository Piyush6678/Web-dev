import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductsPage() {
    return ( <>
     <Hero/>
     <LeftSection  title="Kite" image="/assets/kite.png" info="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  />
     <RightSection    title="Console" image="/assets/console.png" info="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."   />
     <LeftSection   title="Coin" image="/assets/coin.png" info="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."   />
     <RightSection    title="Kite Connect API" image="/assets/kiteconnect.png" info="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."   />
     <LeftSection    title="Varsity mobile" image="/varsity.png" info="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."    />
          <Universe/>
      </>  );
}

export default ProductsPage;