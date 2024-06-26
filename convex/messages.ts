import { query, internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
    args: {},
    handler: async (ctx, args) => {
        // Grab the most recent messages.
        return await ctx.db.query("messages").collect();
    },
});

export const post = internalMutation({
    args: {
        content: v.string(),
        role: v.union(v.literal("user"), v.literal("model")),
        keyToken: v.array(v.string()),
    },
    handler: async ({ db }, { content, role, keyToken}) => {
        await db.insert("messages", { content, role, keyToken });
    },
});
