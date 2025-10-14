import gith from "../assets/github (1).png";
import linkn from "../assets/linkedin (2).png";
import mail from "../assets/mail-svgrepo-com.svg";
import thunder from "../assets/thunder-svgrepo-com.svg";

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20" />

      <div className="relative border-t border-gray-800/50 backdrop-blur-sm bg-black/50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center space-y-8 mb-8">
            <div className="flex justify-center space-x-8">
              
              {/* GITHUB */}
              <a
                href="https://github.com/areebkhan205"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 hover:scale-110 transition-transform bg-gray-900/50 rounded-lg border border-gray-800/50"
                aria-label="Github"
              >
                <img
                  src={gith}
                  width="24"
                  height="24"
                  alt="github"
                  className="w-6 h-6"
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Github
                </div>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/areeb-khan-533754317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 hover:scale-110 transition-transform bg-gray-900/50 rounded-lg border border-gray-800/50"
                aria-label="LinkedIn"
              >
                <img
                  src={linkn}
                  width="24"
                  height="24"
                  alt="linkedin"
                  className="w-6 h-6"
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  LinkedIn
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:areeb.2854.com@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 hover:scale-110 transition-transform bg-gray-900/50 rounded-lg border border-gray-800/50"
                aria-label="Email"
              >
                <img
                  src={mail}
                  width="24"
                  height="24"
                  alt="email"
                  className="w-6 h-6"
                />
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Email
                </div>
              </a>
            </div>
          </div>

          {/* FOOTER TEXT */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <div style={{ transform: "scale(1.08475) rotate(6.01541deg)" }}>
                <img
                  src={thunder}
                  width="24"
                  height="24"
                  alt="spark"
                  className="w-4 h-4 inline"
                />
              </div>
              <span>by Areeb Khan</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2025
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
