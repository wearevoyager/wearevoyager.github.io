import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import CookieConsent from "react-cookie-consent";
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xgerdven");
  if (state.succeeded) {
      return  (
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="text-lg mx-auto prose prose-indigo text-gray-500">
            <div className="mt-12 text-center">
              <p>Thanks for messaging us!</p>
              <p>We'll be in touch to answer your question as soon as possible.</p>
            </div>
          </div>
        </div>
      );
  }
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="text-lg mx-auto prose prose-indigo text-gray-500">
        <div className="mt-12">
          <form 
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-y-6"
          >
            <div>
              <label 
                htmlFor="full-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  id="full-name"
                  type="text" 
                  name="name"
                  required
                  className="py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label 
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  type="text" 
                  name="company"
                  required
                  className="py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email" 
                  name="email"
                  required
                  className="py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  required
                  className="py-3 px-4 block border w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


const ContactPage = () => {
  return (
        <div>
          <Header/>
          <div className="max-w-7xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Voyager</h2>
              <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Contact us
              </h1>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                If you're interested in the future of travel booking, talk to the team at Voyager.
              </p>
            </div>
          </div>
          <ContactForm/>
          <Footer/>
          <CookieConsent
            buttonText="Got it!"
            style={{ background: "#1E40AF" }}
            buttonStyle={{ background: "#FFFFFF", color: "#1E40AF"}}
          >
            This website uses cookies to ensure you get the best experience. <a href="https://www.cookiesandyou.com/">Learn more</a>
          </CookieConsent>
        </div>
      )
    }
    
    export default ContactPage