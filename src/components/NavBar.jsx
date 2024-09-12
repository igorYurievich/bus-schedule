import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/linea-a">Línea A</Link>
      <Link to="/linea-a2">Línea A2</Link>
      <Link to="/linea-b">Línea B</Link>
      <Link to="/linea-c">Línea C</Link>
      <Link to="/linea-d-f">Línea D-F</Link>
      <Link to="/linea-e">Línea E</Link>
      <Link to="/linea-g">Línea G</Link>
      <Link to="/linea-h">Línea H</Link>
    </nav>
  );
};

export default NavBar;
