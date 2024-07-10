import logo from '../assets/reactjs-icon.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo_container'>
        <img src={logo} className='logo' />
        <h2>ReactForms</h2>
      </div>

      <h3 className='header--info'>React Course - Project 1</h3>
    </header>
  )
}

export default Header
