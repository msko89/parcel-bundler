// rc 구성파일은 node.js 환경에서 사용하는 파일이므로 import 대신에 require. export 대신에 module.exports 사용
// const autoprefixer = require('autoprefixer');

// module.exports = {
//   plugins: [autoprefixer],
// };

module.exports = {
  plugins: [require('autoprefixer')],
};
