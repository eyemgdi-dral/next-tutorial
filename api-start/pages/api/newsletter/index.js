import {bldPath} from "../feedback";

//import css from './handler.module.scss'

export function bldPath() {
    return path.join(process.cwd(), "data", "newsletter.json");
}

function handler(req, res) {
    if (req.method == "POST") {
        const filePath = bldPath();
        res.status(200).json({message: "Success"});
    }
    res.status(200).json({message: "Success"});
}
export default handler;
