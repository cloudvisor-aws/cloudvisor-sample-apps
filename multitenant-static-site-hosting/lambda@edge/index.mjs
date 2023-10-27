export const handler = async (event) => {
    const { request } = event.Records[0].cf;
    request.origin.s3.path = `/${request['headers']['host'][0]['value']}`;
    request.headers.host[0].value = request.origin.s3.domainName;
    return request;
};
