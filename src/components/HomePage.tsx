
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import profilePic from "./profile-picture.jpg";

const HomePage = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image - Mobile First */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 rounded-full overflow-hidden glass-card p-2 floating-animation pulse-glow">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-blue-400/30 rounded-full blur-lg"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text block sm:inline"> Hansani Bandara </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
                Final Year Information Systems Engineering Undergraduate
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Final year undergraduate at SLIIT, majoring in Information Systems Engineering. Eager to gain hands-on experience and apply my skills to real-world challenges.
              Passionate about exploring project management while leveraging strong analytical and problem solving abilities. Proven track record of quickly learning new technologies and adapting to dynamic environments. 
            </p>
            
            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-400">Get In Touch</h3>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/hansanibandara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-3 glass-card p-3 sm:p-4 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 glow-effect text-sm sm:text-base"
                >
                  <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="mailto:hansanibandara01@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-3 glass-card p-3 sm:p-4 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 glow-effect text-sm sm:text-base"
                >
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span className="truncate"> hansanibandara01@gmail.com </span>
                </a>
                
                <a
                  href="tel:+94715833696"
                  className="flex items-center justify-center sm:justify-start gap-3 glass-card p-3 sm:p-4 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 glow-effect text-sm sm:text-base"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span> +94715833696 </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
