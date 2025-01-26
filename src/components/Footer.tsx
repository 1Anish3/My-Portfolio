// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-6">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         {/* Left Section */}
//         <div className="text-center md:text-left mb-4 md:mb-0">
//           <h2 className="text-lg font-bold">Anish Sarkar</h2>
//           <p className="text-sm">
//             Potheri village, Kattankulathur Nandivaram Guduvancheri
//           </p>
//           <p className="text-sm">
//             Email:{" "}
//             <a href="mailto:sarkaranish295@gmail.com" className="underline">
//               sarkaranish295@gmail.com
//             </a>
//           </p>
//           <p className="text-sm">
//             Phone:{" "}
//             <a href="tel:9073350749" className="underline">
//               9073350749
//             </a>
//           </p>
//         </div>

//         {/* Social Links */}
//         <div className="flex space-x-4">
//           <a
//             href="https://www.linkedin.com/in/i-am-anish-sarkar/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-500"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://github.com/1Anish3?tab=repositories"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-500"
//           >
//             GitHub
//           </a>
//         </div>

//         {/* Back to Top Button */}
//         <div className="mt-4 md:mt-0">
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
//           >
//             Back to Top
//           </button>
//         </div>
//       </div>
//       <div className="text-center mt-4 text-sm text-gray-400">
//         © {new Date().getFullYear()} Anish Sarkar. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Anish Sarkar</h3>
              <p className="text-gray-400 mb-4">
                Building innovative solutions with AI and web technologies
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/1Anish3?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/i-am-anish-sarkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:sarkaranish295@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:9073350749"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={24} />
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <button
                onClick={scrollToTop}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 md:ml-auto"
              >
                Back to Top <ArrowUp size={18} />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Anish Sarkar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
