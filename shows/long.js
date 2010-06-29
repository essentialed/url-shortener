function(doc, req) {
    if((!doc && !req.id) || !doc.target) {
        return {
            code: 404,
            body: "Not found."
        }
    }
    return {
        code: 302,
        headers: {"Location": doc.target},
        body: "If you don't get redirected, please go to " + doc.target + "\n"
    };
}
