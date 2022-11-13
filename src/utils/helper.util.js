module.exports.invalidRequest = (res, error) =>{
    return res.status(400).send({message: "error sending request", error: error});
}

module.exports.successfulRequestCreation = (res, data = {}) => {
    return res.status(200).send({message : "created successfully", data : data});
}

module.exports.successfulRequestUpdating = (res, data = {}) => {
    return res.status(200).send({message : "updated successfully"});
}

module.exports.successfulRequestGetting = (res, data) => {
    return res.status(200).send({message : "found successfully", data : data})
}

module.exports.notFoundRequest = (res) => {
    return res.status(404).send({message : "not found"});
}

module.exports.successfulRequestDeleting = (res) => {
    return res.status(200).send({message : "deleted successfully"});
}

