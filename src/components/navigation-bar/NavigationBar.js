import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import "./NavigationBar.scss"

function NavigationBar(props){
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>
                        <CrwnLogo className='logo'/>
                    </div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>Shop</Link>
                    <Link className='nav-link' to='/sign-in'>Sign In</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>

    )
}

export default NavigationBar