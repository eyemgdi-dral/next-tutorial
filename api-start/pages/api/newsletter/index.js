import {bldPath, extractFeedback} from "../util";
import fs from "fs";

function handler(req, res) {
    const filePath = bldPath("newsletter");
    if (req.method == "POST") {
        const newsletter = {
            id: new Date().toISOString(),
            ...req.body,
        };
        console.log("newsletter", newsletter);

        const data = extractFeedback(filePath);
        data.push(newsletter);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(200).json({message: "Success", newsletter});
    } else {
        const newsletters = extractFeedback(filePath);
        res.status(200).json({message: "Success", newsletters});
    }
}

export default handler;
