
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-nav">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/home" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Integrity Foundation</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="nav-link flex items-center">
                Our Stories <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-64 mt-2">
                <Link to="/stories" className="block py-2 hover:text-primary">All Stories</Link>
                <Link to="/stories/education" className="block py-2 hover:text-primary">Education</Link>
                <Link to="/stories/empowerment" className="block py-2 hover:text-primary">Empowerment</Link>
                <Link to="/stories/community" className="block py-2 hover:text-primary">Community</Link>
              </div>
            </div>
            <Link to="/education" className="nav-link">Education</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/impact" className="nav-link">Our Impact</Link>
            {/* <Link to="/get-involved" className="nav-link">Get Involved</Link> */}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:text-primary">
              <Search size={20} />
            </button>
            {/* <Button variant="outline" size="sm" className="rounded-full">
              Log In <User size={16} className="ml-2" />
            </Button> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/stories" className="nav-link py-2" onClick={toggleMenu}>Our Stories</Link>
              <Link to="/education" className="nav-link py-2" onClick={toggleMenu}>Education</Link>
              <Link to="/about" className="nav-link py-2" onClick={toggleMenu}>About Us</Link>
              <Link to="/impact" className="nav-link py-2" onClick={toggleMenu}>Our Impact</Link>
              {/* <Link to="/get-involved" className="nav-link py-2" onClick={toggleMenu}>Get Involved</Link> */}
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="w-full justify-center">Log In</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
