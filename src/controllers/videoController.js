export const trending = (req, res) => res.render("home", {
    pageTitle: "Home",
});
export const see = (req, res) => res.render("watch", {
    pageTitle: "Watch",
});
export const edit = (req, res) => res.render("edit", {
    pageTitle: "Edit"
});
export const search = (req, res) => res.send("SEARCH");
export const deleteVideo = (req, res) => {
    return res.send("DELETE VIDEO");
}
export const upload = (req, res) => res.send("UPLOAD");