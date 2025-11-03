import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 100) {  // You can adjust the scroll threshold
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Adding scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`bg-[#2C3C44] text-white py-8 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-6 md:px-16 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div className="footer-logo">
            <span className="text-3xl font-semibold">Sukoon Studio</span>
            <p className="mt-3 text-sm text-[#F3EFED]">
              At Sukoon Studio, we believe mental wellness is a vital part of a good fulfilling life. Our therapists provide personalized, empathetic care.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-[#F3EFED]">LinkedIn</a>
              <a href="#" className="text-[#F3EFED]">Facebook</a>
              <a href="#" className="text-[#F3EFED]">Instagram</a>
              <a href="#" className="text-[#F3EFED]">YouTube</a>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-services">
            <h4 className="text-lg font-semibold mb-3">Services</h4>
            <ul className="text-sm text-[#F3EFED]">
              <li>Individual Therapy</li>
              <li>Couples Therapy</li>
              <li>Child & Teen Therapy</li>
              <li>Career Counseling</li>
              <li>Workplace & Stress Support</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-resources">
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="text-sm text-[#F3EFED]">
              <li>Our Blog</li>
              <li>Therapy Guides</li>
              <li>E-book</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footer-contact">
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <p className="text-sm text-[#F3EFED]">hello@sukoonstudio.com</p>
            <p className="text-sm text-[#F3EFED]">123, Peace Street, New Delhi, India</p>
            <p className="text-sm text-[#F3EFED]">+91 (98765) 43210</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom mt-8 border-t border-[#F3EFED] pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[#F3EFED]">© 2025 Sukoon Studio. All rights reserved.</p>
          <ul className="flex gap-6 text-sm text-[#F3EFED]">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>

        {/* Back to top button */}
        {isScrolled && (
          <button
            className="fixed flex justify-center items-center bottom-10 right-10 gap-3 p-3 bg-[#A8CFA1] text-[#2C3C44] rounded-full"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
          <span className='bg-[#FFFFFF] h-8 w-8 rounded-full justify-center items-center flex'><svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
            <path d="M3.8043 13.293L3.8043 13.893L5.0043 13.893L5.0043 13.293L4.4043 13.293L3.8043 13.293ZM4.4043 13.293L5.0043 13.293L5.0043 0.848522L4.4043 0.848522L3.8043 0.848522L3.8043 13.293L4.4043 13.293Z" fill="#2C3C44"/>
            <path d="M7.53559 4.82832L7.95985 5.25258L8.80838 4.40405L8.38412 3.97979L7.95985 4.40405L7.53559 4.82832ZM7.95985 4.40405L8.38412 3.97979L4.82856 0.424232L4.4043 0.848497L3.98003 1.27276L7.53559 4.82832L7.95985 4.40405Z" fill="#2C3C44"/>
            <path d="M0.848633 4.40405L4.40419 0.848497" stroke="#2C3C44" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/>
          </svg></span> Back to top
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
