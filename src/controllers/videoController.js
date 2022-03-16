export const trending = (req, res) => res.send("HOME PAGE VIDEOS");
export const see = (req, res) => res.send(`SEE VIDEO #${req.params.id}`)
export const edit = (req, res) => res.send("EDIT VIDEO");
export const search = (req, res) => res.send("SEARCH");
export const deleteVideo = (res, req) => res.send("DELETE VIDEO");
export const upload = (req, res) => res.send("UPLOAD");