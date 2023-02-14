export default function handler(req, res) {
    if (req.method === 'POST') {
        // save to db
        res.json({message: 'ok'})
        console.log(req.body)
    }
}
