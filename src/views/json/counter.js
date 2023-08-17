
/**
 * 
 * @param {import("../classes/Counter").Counter[]} param0 
 * @param {import("@lenra/app-server").props} param1 
 * @returns 
 */
export default function ([counter]) {
    console.log("new counter data", counter);
    return counter;
}

