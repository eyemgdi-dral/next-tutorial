import {bldPath, extractFeedback} from "../util";

function handler(req, res) {
    const filePath = bldPath("newsletter");
    const data = extractFeedback(filePath);
    const newsletter = data.find((fb) => fb.id == req.query.id);

    res.status(200).json({message: "success", newsletter});
}
export default handler;
