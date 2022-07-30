import React from 'react' 

export default function Navbar(props) {
  const handleClick = (theme,color) => {
    document.body.style.backgroundColor = color; 
    props.setTheme(theme);
  }
  return (
        <nav className={props.theme === "light" ? "navbar bg-light" : "navbar bg-dark"}>
            <div className="container-fluid">
                <a href='/' className={`navbar-brand text-${props.theme === "light" ? "dark" : "light"}`}>My_Text</a>
                <div className='pallet'>
                <div>
                <span className='dark-red'>
                    <button onClick={()=>handleClick("dark","#9a0000")}></button>
                </span>
                <span className='dark-green'>
                    <button onClick={()=>handleClick("dark","#044735")}></button>
                </span>
                <span className='dark-blue'>
                    <button onClick={()=>handleClick("dark","#15317E")}></button>
                </span>
                <span className='dark-yellow'>
                    <button onClick={()=>handleClick("dark","#7D6115")}></button>
                </span>
                <span className='dark-purple'>
                    <button onClick={()=>handleClick("dark","#4B0150")}></button>
                </span>

                </div>
                <div>
                <span className='light-red'>
                    <button onClick={()=>handleClick("light","#F75D59")}></button>
                </span>
                <span className='light-green'>
                    <button onClick={()=>handleClick("light","#E2F516")}></button>
                </span>
                <span className='light-brown'>
                    <button onClick={()=>handleClick("light","#C7A317")}></button>
                </span>
                <span className='light-blue'>
                    <button onClick={()=>handleClick("light","#20B2AA")}></button>
                </span>
                <span className='light-white'>
                    <button onClick={()=>handleClick("light","Thistle")}></button>
                </span>
                </div>
                </div>
                
            </div>
        </nav>
  )
}
