
const Header = ({bg, to, children}) => {
  return (
    <div className={`${bg ? "header" : ""} `}> 
        {children}
    </div>
  )
}

export default Header