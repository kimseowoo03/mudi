import { Link } from 'react-router-dom';

const NavItem = (props) => {
  const data = props.data;
  return (
    <li>
      <Link to={data.link_to}>
        <img src={data.src} alt={data.alt} />
        <span>{data.nav_name}</span>
      </Link>
    </li>
  );
};

export default NavItem;