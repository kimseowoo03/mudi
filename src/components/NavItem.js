const NavItem = (props) => {
  const data = props.data;
  return (
    <li>
      <a href="{()=>false}">
        <img src={data.src} alt={data.alt} />
        <span>{data.nav_name}</span>
      </a>
    </li>
  );
};

export default NavItem;