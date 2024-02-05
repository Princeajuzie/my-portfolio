import { google } from "googleapis";
import keys from "../ratekey.json";
import {NextApiRequest, NextApiResponse} from "next"

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    try {
        const client = new google.auth.JWT(
            keys.client_email, undefined, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
        );

        client.authorize(async function(err, tokens) {
            if (err) {
                return res.status(400).send(JSON.stringify({error: true}));
            }

            const gsapi = google.sheets({version:'v4', auth: client});

            //CUSTOMIZATION FROM HERE
            const opt = {
                spreadsheetId: "1Ckj53EzYfJMMOp7AlVPbvqFi4E5CBfZK5rHU_J99oo0",
                range: 'Sheet1!A2:A'
            };

            let data = await gsapi.spreadsheets.values.get(opt);
            return res.status(400).send(JSON.stringify({error: false, data: data.data.values}));
        });
    } catch (e: Error| any) {
        return res.status(400).send(JSON.stringify({error: true, message: e.message}));
    }
}