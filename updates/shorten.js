function(doc, req) {
    //!code vendor/_attachments/date.js

    if(doc) {
        return [doc, 'PUT Method not supported for shortened urls.'];
    }
    var newDoc = {};
    newDoc.target = req.query.target;
    if(req.query.target.indexOf('?')) {
        for(var k in req.query) {
            if(k !== 'target') {
                newDoc.target += '&' + k + '=' + req.query[k];
            }
        }
    }

    var shorten = function(str) {
        var reduce = str.length;
        for(var i = 0; i < str.length; i++) {
            reduce += str.charCodeAt(i);
        }
        return reduce.toString(36);
    };

    var hash = '~' + shorten(newDoc.target);
    newDoc._id = hash;
    newDoc.date = (new Date()).rfc3339();
    return [newDoc, 'Shortened to ' + hash + '\n'];
}
