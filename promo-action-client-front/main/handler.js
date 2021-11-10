'use strict';

const handler = async (event, context) => {
        // Redirect to /index.html
        const location = "/fn_" + event.headers.host.split('.')[0].replace(/-/g, '_') + "/index.html";
        return context
            .status(308)
            .headers({"Location": `${location}`})
            .succeed();

};

module.exports = handler;
