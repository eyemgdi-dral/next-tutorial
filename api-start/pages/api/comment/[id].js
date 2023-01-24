import {bldPath, extractFeedback} from "../util";

function handler(req, res) {
    const filePath = bldPath("comment");
    const data = extractFeedback(filePath);
    const comments = data.filter((fb) => fb.idNewsletter == req.query.id);

    res.status(200).json({message: "success", comments});
}
export default handler;
