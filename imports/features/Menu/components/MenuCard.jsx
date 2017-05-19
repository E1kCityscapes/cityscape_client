import React, {
    Component
}
from 'react';

import PropTypes from 'prop-types';

export default class MenuCard extends Component {
    
    render() {
        return (
            <div onClick={this.props.onClick} className="card" style={{backgroundImage: 'url(/img/chapter_thumbs/'+this.props.thumbnailUrl+')'}}>
              <div className="image">
                <img/>
              </div>
              <div className="content">
                <div className="header">
                  {this.props.num}. <br/> {this.props.name}
                </div>
              </div>
            </div>
        )
    }
}

MenuCard.propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}