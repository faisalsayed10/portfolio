import { NextApiRequest, NextApiResponse } from "next";
import { Deta } from "deta";
import axios from "axios";
import querystring from "querystring";

const db = Deta(process.env.DETA_PROJECT_KEY).Base("carbon-slack");

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const code = req.query.code as string;

		const { data } = await axios.post(
			"https://slack.com/api/oauth.v2.access",
			querystring.stringify({
				code: code,
				client_id: process.env.SLACK_CLIENT_ID,
				client_secret: process.env.SLACK_CLIENT_SECRET,
			}),
			{
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
			}
		);

		if (data.ok) {
			await db.put({
				key: data.team.id,
				bot_token: data.access_token,
				user_token: data.authed_user.access_token,
			});
			return res.send(
				"Bot installed successfully! You can now close this window"
			);
		} else {
			return res.send(
				`Something went wrong, Please try again later. \n Error: ${data?.error}`
			);
		}
	} catch (err) {
		console.error(err);
	}
};
