import { View } from "@lenra/components";
import { views } from "./index.gen.js";

export const lenraRoutes = [
    {
        path: "/",
        view: View(views.main)
    }
];

export const jsonRoutes = [
    {
        path: "/",
        view: View(views.json.counters)
    }
];