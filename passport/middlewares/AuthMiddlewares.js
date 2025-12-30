export const isAuthenticatedPage = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({ message: "unauthorized, login first !" })
}