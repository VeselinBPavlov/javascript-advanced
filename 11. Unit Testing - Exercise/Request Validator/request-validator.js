function requestValidator(obj) {
    // Take requirement for request.
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^(\*|[A-Za-z-0-9.]+)$/;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messagePattern = /^([^<>\\&'"]+)$/;

    // Validate properties of request.
    if (obj.hasOwnProperty('method') === false || methods.includes(obj.method) === false) {
        throw new Error('Invalid request header: Invalid Method');
    }
    if (obj.hasOwnProperty('uri') === false || uriPattern.test(obj.uri) === false) {
        throw new Error('Invalid request header: Invalid URI');
    }
    if (obj.hasOwnProperty('version') === false || versions.includes(obj.version) === false) {
        throw new Error('Invalid request header: Invalid Version');
    }
    if (obj.hasOwnProperty('message') === false || (obj.message !== '' && messagePattern.test(obj.message) === false)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    // Return valid request.
    return obj;
}

// Test.
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'asl<pls'
});



