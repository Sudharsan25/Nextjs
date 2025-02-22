import sql from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import slugify from "slugify";
import xss from "xss";

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(id){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(id);
}

export async function saveMeal(meal) {
    try {
        meal.slug = slugify(meal.title, { lower: true });
        meal.instructions = xss(meal.instructions);

        if (!meal.image || !(meal.image instanceof File)) {
            throw new Error("Invalid image file.");
        }

        const extension = meal.image.name.split(".").pop();
        const filename = `${meal.slug}.${extension}`;
        const imageDir = path.join(process.cwd(), "public/images");
        const imagePath = path.join(imageDir, filename);

        if (!fs.existsSync(imageDir)) {
            fs.mkdirSync(imageDir, { recursive: true });
        }

        // Convert File to Buffer and Save Image
        const bufferedImage = await meal.image.arrayBuffer();
        fs.writeFileSync(imagePath, Buffer.from(bufferedImage));

        meal.image = `/images/${filename}`;

        db.prepare(`
            INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) 
            VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
        `).run(meal);

    } catch (error) {
        console.error("Error saving meal:", error);
        throw new Error("Failed to save meal.");
    }
}