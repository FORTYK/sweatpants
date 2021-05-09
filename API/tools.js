const isExist = (query, callback) => {
    return query.length > 0;
};

const isSingle = (query, callback) => {
    return query.length <= 1;
};

const uuidv4 = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

const shortHash = () => {
    // Proprietary
    return "xxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

const err = (args) => {
    try {
        switch (typeof args) {
            case "object":
                return {
                    error: args[0],
                    message: args[1],
                };
            case "string":
                return {
                    error: "Something went wrong",
                    message: args,
                };
            default:
                throw new Error("Failed constructing error");
        }
    } catch (error) {
        console.log("error :>> ", error);
    }
};

module.exports = { isExist, isSingle, uuidv4, shortHash, err };
