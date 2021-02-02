exports.handler = function (event, context, callback) {
    const secretContent = `
    <h3>Welcome to Customer Zone</h3>
    <p>Here you can access <strong>your</strong> customer stuff.</p>
    `
    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401,
        })
    }
}