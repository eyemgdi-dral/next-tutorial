import path from "path";
import fs from "fs";

export function bldPath() {
    return path.join(process.cwd(), "data", "feedback.json");
}
export function extractFeedback(filePath) {
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    return data;
}

function handler(req, res) {
    const filePath = bldPath();

    if (req.method == "POST") {
        const feedback = {
            id: new Date().toISOString(),
            title: req.body.title,
            content: req.body.content,
        };

        const data = extractFeedback(filePath);

        data.push(feedback);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({message: "Success", feedback: feedback});
    } else if (req.method == "GET") {
        const data = extractFeedback(filePath);
        res.status(201).json({message: "Success", feedbacks: data});
    } else {
        res.status(200).json({message: "this works"});
    }
}

export default handler;
