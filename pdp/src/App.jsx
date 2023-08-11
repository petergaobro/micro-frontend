import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy(() => import("home/Header"));
// import Header from "home/Header";
import Footer from "home/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState(true)
  return (
    < div className="text-3xl mx-auto max-w-6xl" >
      <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
      <div className="my-10">
        PDP page
      </div>
      <Footer />
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
