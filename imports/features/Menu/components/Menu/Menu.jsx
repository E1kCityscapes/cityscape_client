import React, {
  Component
}
from 'react';
import PropTypes from 'prop-types';
import { FlowRouter } from 'meteor/kadira:flow-router';

import MenuCard from '../MenuCard'

export default class Menu extends Component {
  selectChapter(id) {
    FlowRouter.go("/chapters/"+id);
  }
  
  render() {
    
    return (
      <div className="duany-coverblock">
      <div className="ui two column grid">
        <div className="duany-headerblock column">
          <hr className="duany-hstripe"/>
          <h1 className="duany-title">Welcome to the City</h1>
        </div>
      </div>

      <div className="ui three cards duany-unitcards">
        {
          this.props.chapters.map((chapter, index) => (
            <MenuCard onClick={this.selectChapter.bind(null, chapter.id)} name={chapter.info.name} num={index + 1} thumbnailUrl={chapter.info.thumbnail} key={chapter.id} />
          ))
        }
      </div>
    </div>
    )
  }
}

Menu.propTypes = {
  loading: React.PropTypes.bool,
  chapters: React.PropTypes.array
}