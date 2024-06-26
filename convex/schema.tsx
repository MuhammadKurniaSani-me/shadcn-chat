import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    messages: defineTable({
        body: v.string(),
        role: v.union(v.literal("user"), v.literal("model")),
        keyToken: v.string(),
    }),
});
