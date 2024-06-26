"use client";
import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient('https://laudable-rooster-120.convex.cloud');

export default function ConvexClientProvider({
    children,
}: {
    children: ReactNode;
}) {
    return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
