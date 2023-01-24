import fs from "fs";

function handler(req, res) {
    const filePath = bldPath("feedback");

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
