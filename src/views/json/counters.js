import { View } from "@lenra/components";
import { views } from "../../index.gen.js";

/**
 * 
 * @param {import("../classes/Counter").Counter[]} param0 
 * @param {import("@lenra/app-server").props} param1 
 * @returns 
 */
export default function ([], { }) {
    return {
        global: View(views.counter)
            .data(DataApi.collectionName(Counter), {
                "user": "global"
            }),
        personnal: View(views.json.counter)
            .data(DataApi.collectionName(Counter), {
                "user": "@me"
            })
    };
}

