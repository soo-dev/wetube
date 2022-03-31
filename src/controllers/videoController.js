export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
    return res.send(`Watch Video #${req.params.id}`);
}
export const edit = (req, res) => {
    return res.send("EDIT VIDEO");
}
export const search = (req, res) => res.send("SEARCH");
export const deleteVideo = (req, res) => {
    return res.send("DELETE VIDEO");
}
export const upload = (req, res) => res.send("UPLOAD");