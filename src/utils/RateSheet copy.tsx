import { google } from "googleapis";
import Keys from "../../ratekey.json";
import { NextApiRequest, NextApiResponse } from "next";

export default function RateSheet(req: NextApiRequest, res: NextApiResponse) {
  try {
    const clients = new google.auth.JWT(
      Keys.client_email,
      undefined,
      Keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    clients.authorize(async (err, tokens) => {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }
      const gaspi = google.sheets({ version: "v4", auth: clients });

      const opts = {
        spreadsheetId: "1Ckj53EzYfJMMOp7AlVPbvqFi4E5CBfZK5rHU_J99oo0",
        range: "Sheet1!A2:A",
      };
      let data = await gaspi.spreadsheets.values.get(opts);
      return res
        .status(400)
        .send(JSON.stringify({ error: false, data: data.data.values }));
    });
  } catch (error: Error | any) {
    return res
      .status(400)
      .send(JSON.stringify({ error: true, message: error.message }));
  }
}
