'use client';

import ImagePicker from "@/components/meals/image-picker";
import { default as MealForm, default as MealsFormSubmitBtn } from "@/components/meals/meals-form";
import shareMeal from "@/lib/action";
import { useActionState } from "react";
import classes from "./page.module.css";

export default function ShareMealPage(){

  const [state,formAction] = useActionState(shareMeal, {message: null});

    return <>
    <header className={classes.header}>
        <h1>Share your <span className={classes.highlight}>Your reciepe!</span></h1>
        <p>Include the ingredients and instructions, so that others can try your favourite meal too!</p>
    </header>
    <main className={classes.main}>
        <form className={classes.form} action={formAction}>
            <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email"/>
            </p>
            </div>
            <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your Image" name="image"/>
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmitBtn />
          </p>
        </form>
    </main>
    </>
}