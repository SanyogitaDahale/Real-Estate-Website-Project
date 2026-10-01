import React from 'react'

export default function page() {
    return (

    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="grid md:grid-cols-2">
      <div className="bg-indigo-600 p-8 md:p-10 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
          <p className="text-indigo-100 mb-8">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
          <div className="space-y-5">
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <i className="fas fa-map-marker-alt text-xl text-indigo-200 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-100 text-sm uppercase tracking-wider">
                  Address
                </h4>
                <p className="text-indigo-50">
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-envelope text-xl text-indigo-200 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-100 text-sm uppercase tracking-wider">
                  Email
                </h4>
                <p className="text-indigo-50">hello@example.com</p>
                <p className="text-indigo-50">support@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <i className="fas fa-phone-alt text-xl text-indigo-200 w-5" />
              </div>
              <div>
                <h4 className="font-medium text-indigo-100 text-sm uppercase tracking-wider">
                  Phone
                </h4>
                <p className="text-indigo-50">+1 (555) 123-4567</p>
                <p className="text-indigo-50">Mon–Fri, 9am–6pm PST</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-indigo-500">
          <h4 className="text-sm font-medium text-indigo-200 uppercase tracking-wider mb-4">
            Follow us
          </h4>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-indigo-200 hover:text-white transition-colors duration-200"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl" />
            </a>
            <a
              href="#"
              className="text-indigo-200 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl" />
            </a>
            <a
              href="#"
              className="text-indigo-200 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl" />
            </a>
            <a
              href="#"
              className="text-indigo-200 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-10 bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Send a message
        </h3>
        <form action="#" method="POST" className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-700 placeholder-gray-400"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-700 placeholder-gray-400"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us more about your inquiry..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-200 text-gray-700 placeholder-gray-400 resize-none"
              required=""
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Send message
          </button>
        </form>
        <p className="mt-6 text-xs text-gray-500 text-center">
          We'll get back to you within 24–48 hours.
        </p>
      </div>
    </div>
  </div>
</div>


  
  )
}
