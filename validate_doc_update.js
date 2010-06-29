function(new_doc, old_doc, user_context) {
    if(!user_context.name) {
        //Disabling until updated to 0.11+
        //throw({"forbidden": "Admin required."});
    }
    if(old_doc) {
        return old_doc;
    }
}
