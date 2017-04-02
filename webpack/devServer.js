/*
 * dependencies:
 * - webpack-dev-server
 */
import url from 'url';

const devServer = (serverUrl, other = {}) => {
  const serverUrlWithProtocol = serverUrl.search('//') > -1 ? serverUrl : `http://${serverUrl}`;
  const { hostname, port } = url.parse(serverUrlWithProtocol);

  return {
    devServer: Object.assign({
      host: hostname,
      port: parseInt(port, 10),
    }, other),
  };
};

export default devServer;
