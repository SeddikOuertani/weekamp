module.exports.getDaysDifference = (date1, date2) => {
    return (date2 - date1) / (1000 * 3600 * 24);
}