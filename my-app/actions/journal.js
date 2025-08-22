"use server";

import { auth } from "@clerk/nextjs/server";
import { MOODS } from "../app/lib/mood";

export async function createJournalEntry(data) {
    try{
        const {userId} = await auth();
        if(!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where : {
                clerkUserId : userId
            }
        });

        if(!user){
            throw new Error("user not found");
        }
     
        const mood = MOODS[data.mood.toUpperCase()];
        if(!mood) throw new Error("invalid mood")
    const moodImageUrl = await getPixabayImage(data.moodQuery);

    // Create the entry
    const entry = await db.entry.create({
      data: {
        title: data.title,
        content: data.content,
        mood: mood.id,
        moodScore: mood.score,
        moodImageUrl,
        userId: user.id,
        collectionId: data.collectionId || null,
      },
    });
    }catch(error){

    }
}