function(doc) {
    if(!doc.target) { return; }
    if(!doc.date) {
        doc.date = 0;
    }
    emit(doc._id, {
        date: doc.date,
        target: doc.target
    });
}
