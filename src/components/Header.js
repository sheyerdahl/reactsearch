import { memo } from "react";

const Header = memo(function Header() {
    console.log("Header!")
    
    return <h1 className="f1">React Search</h1>
});

export default Header