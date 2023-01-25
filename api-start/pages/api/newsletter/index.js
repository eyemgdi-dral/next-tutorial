import {bldPath, extractFeedback} from "../util";
import fs from "fs";
import {MongoClient} from "mongodb";

async function handler(req, res) {
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
        const mng = "mongodb+srv://eyemgdi:Uh89091215@cluster0.j4pg1me.mongodb.net/event?retryWrites=true&w=majority";

        const client = await MongoClient.connect(mng);
        console.log("client", client);
        const db = client.db();

        await db.collection("newsletter").insertOne(newsletter);
        client.close();

        res.status(200).json({message: "Success", newsletter});
    } else {
        const newsletters = extractFeedback(filePath);
        res.status(200).json({message: "Success", newsletters});
    }
}

export default handler;
