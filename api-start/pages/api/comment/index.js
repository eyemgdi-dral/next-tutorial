import fs from "fs";
import {bldPath, extractFeedback} from "../util";

function handler(req, res) {
    const filePath = bldPath("comment");

    if (req.method == "POST") {
        console.log("req.body", req.body);

        const comment = {
            id: new Date().toISOString(),
            ...req.body,
        };

        console.log("comment", comment);
        const data = extractFeedback(filePath);

        data.push(comment);

        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: "Success", comment});
    } else if (req.method == "GET") {
        const comments = extractFeedback(filePath);
        res.status(201).json({message: "Success", comments});
    } else {
        res.status(200).json({message: "this works"});
    }
}

export default handler;
