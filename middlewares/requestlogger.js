export default function requestLogger(req, res, next) {
    console.log("[REQ] " + req.method + " " + req.path);
    next();
}