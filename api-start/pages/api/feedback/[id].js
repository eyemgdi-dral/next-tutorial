import {bldPath, extractFeedback} from "../util";

function handler(req, res) {
    const filePath = bldPath("feedback");
    const data = extractFeedback(filePath);
    const feedback = data.find((fb) => fb.id == req.query.id);

    res.status(200).json({message: "success", feedback});
}
export default handler;
