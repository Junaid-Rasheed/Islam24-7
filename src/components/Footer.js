import React from "react";

function Footer() {
  return (
    <footer className="footer-1 bg-gray-300 py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/2 xl:w-1/3 mt-8 md:mt-0">
            <h5 className="text-xl font-bold mb-6">
              <img src="Black.png" alt="footerLogo" width="140" />
            </h5>
          </div>

          <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left sm:pt-6">
              Stay connected
            </h5>
            {/* <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href=""
                className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
