import passport from "passport"
import { githubStrategy } from "../../../lib/strategies"
import nextConnect from "next-connect";
import withPassport from "../../../lib/withPassport";

passport.use(githubStrategy);

const handler = nextConnect()
    .use(passport.initialize())
    .get(async (req, res) => {
    try {
        passport.authenticate('github')(req, res, (...args) => {})
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
})

export default withPassport(handler);