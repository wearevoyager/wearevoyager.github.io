import * as React from "react"
import Hero from "../components/hero"
import Hosted from "../components/feature-hosted"
import Serve from "../components/feature-self"
import Footer from "../components/footer"
import { useEffect } from 'react';



const IndexPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <div>
      <Hero/>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Voyager</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            The future travel platform
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Voyager provides two ways to connect to powerful travel APIs. The hosted travel platform and the self serve platform.
          </p>
        </div>
      </div>
      <Hosted/>
      <Serve/>
      <Footer/>
    </div>
  )
}

export default IndexPage