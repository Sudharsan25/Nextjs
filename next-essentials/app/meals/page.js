import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage(){
    return <>
    <header className={classes.header}>
        <h1>A meal page {' '} 
            <span className={classes.highlight}> for you</span>
        </h1>
        <p>Check out cool new reciepes shared by users across the world! </p>
        <p className={classes.cta}>
            <Link href='/meals/share'>
            Share your own reciepes
            </Link>
        </p>
    </header>
    <main className={classes.main}>
        <MealsGrid meals={[]} />
    </main>
    </>
}