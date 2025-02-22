import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

async function Meals(){
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}

export const metadata = {
    title: "Discover new recipes",
    description: "Discover and save recipes from around the world!",
}

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
        <Suspense fallback={<p className={classes.loading}> Fetching meals... </p>}>
            <Meals />
        </Suspense>
        
    </main>
    </>
}