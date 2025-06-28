
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const HomePage = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Hi, I'm{' '}
                <span className="gradient-text"> Hansani Bandara </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Final Year Information Systems Engineering Undergraduate
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Final year undergraduate at SLIIT,majoring in Information Systems Engineering. eager to gain hands-on experience and apply my skills to real-world challenges.
              Passionate about exploring project management while leveraging strong analytical and problem solving abilities. Proven track record of quickly learning new technologies and adapting to dynamic environments. 
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-400">Get In Touch</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.linkedin.com/in/hansanibandara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass-card p-4 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 glow-effect"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                
                <a
                  href="mailto:hansanibandara01@gmail.com"
                  className="flex items-center gap-3 glass-card p-4 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 glow-effect"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span> hansanibandara01@gmail.com </span>
                </a>
                
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 glass-card p-4 hover:bg-blue-600/20 transition-all duration-300 hover:scale-105 glow-effect"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span> +94715833696 </span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2 floating-animation pulse-glow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-400/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
