const headerStyle = {
  wrapper:{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  },
  h3:{
    fontSize: '1.7rem',
    fontWeight: '500',
    color:"var(--red)",
  }
};

function Header() {
  return (
    <div style={headerStyle.wrapper}>
    <h3 style={headerStyle.h3}>Pokedex</h3>
    </div>
  )
};

export default Header;
