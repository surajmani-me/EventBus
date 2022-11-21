const makeResponse = (body) => {
    return {
        status: true,
        message: body,
    }
}

module.exports = {
    makeResponse,
}
