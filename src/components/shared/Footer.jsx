

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">KeenKeeper</h2>
          <p className="text-green-200 mb-4">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="p-2 bg-white rounded-full text-green-800 hover:bg-green-100">
              <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full text-green-800 hover:bg-green-100">
             <img src="/images/twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-white rounded-full text-green-800 hover:bg-green-100">
              <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-green-700 pt-4 text-sm text-green-200">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;