"use node";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { query, internalMutation, action } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

const googleGenerativeAI = new GoogleGenerativeAI(
    process.env.GEMINI_AI_SECRET_API_KEY as string
);

export const generate = action({
    args: {
        prompt: v.string(),
        token: v.array(v.string()),
    },
    handler: async (ctx, { prompt, token }) => {
        await ctx.runMutation(
            internal.messages.post, 
            {
                content: prompt,
                role: 'user',
                keyToken: token
            }
        )
        const model = googleGenerativeAI.getGenerativeModel({
            model: "gemini-pro",
            generationConfig: { temperature: 0.7 },
        });

        // optionally return a value
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        await ctx.runMutation(
            internal.messages.post, 
            {
                content: text,
                role: 'model',
                keyToken: token
            }
        )
    },
});
