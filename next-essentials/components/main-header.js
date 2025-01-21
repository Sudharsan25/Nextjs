 
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";

export default function MainHeader(){
    return(
        <>
        <MainHeaderBackground />    
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <Image src={Logo} alt='Logo' priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/community'>Foodie Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}