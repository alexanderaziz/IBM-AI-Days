import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../assets/rpgai_logo.svg'; 

const Logo = () => {
	return (
	  <Link to="/">
		<motion.img
		  src={logoImage}
		  alt="Game Logo"
		  className="w-20 fixed top-6 right-4 cursor-pointer"
		  whileHover={{
			filter: 'drop-shadow(0 0 10px #76ABAE)', // Glow effect
			transition: { duration: 0.3 },
		  }}
		  style={{
			filter: 'drop-shadow(0 0 6px rgba(0, 0, 0, 0.5))', // drop shadow
		  }}
		/>
	  </Link>
	);
  };
  
  export default Logo;