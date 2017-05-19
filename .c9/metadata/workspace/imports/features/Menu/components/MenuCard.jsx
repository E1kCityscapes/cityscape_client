{"changed":true,"filter":false,"title":"MenuCard.jsx","tooltip":"/imports/features/Menu/components/MenuCard.jsx","value":"import React, {\n    Component\n}\nfrom 'react';\n\nimport PropTypes from 'prop-types';\n\nexport default class MenuCard extends Component {\n    \n    render() {\n        return (\n            <div className=\"card\" style={{backgroundImage: 'url('+this.props.chapter.info.thumbnail+')'}}>\n              <div className=\"image\">\n                <img/>\n              </div>\n              <div className=\"content\">\n                <div className=\"header\">\n                  {this.props.num}. <br/> {this.props.chapter.info.name}\n                </div>\n              </div>\n            </div>\n        )\n    }\n}\n\nMenuCard.propTypes = {\n    chapter: PropTypes.array,\n    num: PropTypes.int\n}","undoManager":{"mark":2,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["// import React, {","//     Component","// }","// from 'react';","","// import PropTypes from 'prop-types';","","// export default class MenuCard extends Component {","    ","//     render() {","//         return (","//             <div className=\"card\" style={{backgroundImage: 'url('+this.props.chapter.info.thumbnail+')'}}>","//               <div className=\"image\">","//                 <img/>","//               </div>","//               <div className=\"content\">","//                 <div className=\"header\">","//                   {this.props.num}. <br/> {this.props.chapter.info.name}","//                 </div>","//               </div>","//             </div>","//         )","//     }","// }","","// MenuCard.propTypes = {","//     chapter: PropTypes.array,","//     num: PropTypes.int","// }"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":3},"action":"remove","lines":["// "],"id":2},{"start":{"row":1,"column":0},"end":{"row":1,"column":3},"action":"remove","lines":["// "]},{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["// "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":3},"action":"remove","lines":["// "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":3},"action":"remove","lines":["// "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["// "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"remove","lines":["// "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"remove","lines":["// "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":3},"action":"remove","lines":["// "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":3},"action":"remove","lines":["// "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"remove","lines":["// "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":3},"action":"remove","lines":["// "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"remove","lines":["// "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":3},"action":"remove","lines":["// "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"remove","lines":["// "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"remove","lines":["// "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":3},"action":"remove","lines":["// "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":3},"action":"remove","lines":["// "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["m"],"id":19}],[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["u"],"id":18}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["n"],"id":17}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["."],"id":16}],[{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":["o"],"id":15}],[{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["f"],"id":14}],[{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["n"],"id":13}],[{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["i"],"id":12}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["."],"id":11}],[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["r"],"id":10}],[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["e"],"id":9}],[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["t"],"id":8}],[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["p"],"id":7}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["a"],"id":6}],[{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["h"],"id":5}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":33},"action":"remove","lines":["num"],"id":4},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["c"]}],[{"start":{"row":26,"column":28},"end":{"row":27,"column":22},"action":"remove","lines":[",","    num: PropTypes.int"],"id":3}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":28,"column":1},"end":{"row":28,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1495177847444}