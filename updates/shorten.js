function(doc, req) {
    //!code vendor/_attachments/date.js

    if(doc) {
        return [doc, 'PUT Method not supported for shortened urls.'];
    }
    var doc = {};
    doc.target = req.query.target;

    var shorten = function(str) {
        var reduce = str.length;
        for(var i = 0; i < str.length; i++) {
            reduce += str.charCodeAt(i);
        }
        return reduce.toString(36);
    }

    var short = '~' + shorten(req.query.target);
    doc._id = short;
    doc.date = (new Date()).rfc3339();
    return [doc, 'Shortened to ' + short + '\n'];
}
