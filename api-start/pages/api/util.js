import path from "path";
import fs from "fs";

export function bldPath(entity) {
    return path.join(process.cwd(), "data", `${entity}.json`);
}

export function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}
