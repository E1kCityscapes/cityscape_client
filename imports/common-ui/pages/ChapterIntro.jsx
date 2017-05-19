import React, {
  Component
}
from 'react';
import PropTypes from 'prop-types';

export default class ChapterIntro extends Component {
    render() {
        if (this.props.loading) {
            //TODO
            return (
            <div>
            Loading
            </div>
            )
        }
        
        return (
            <div className="duany-coverblock">
              <div className="ui two column grid">
                <div className="row">
                  <div className="duany-headerblock column">
                    <hr className="duany-hstripe"/>
                    <h1 className="duany-title">{this.props.chapter.info.num}.<br/>{this.props.chapter.info.name}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="duany-sectionblock twelve wide column">
                    <p className="duany-description">
                      {this.props.chapter.info.description}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="duany-sectionblock twelve wide column">
                    <h4 className="duany-subheader">Skills:</h4>
                    <div className="ui list">
                      {
                        this.props.chapter.info.skills.map((skill, index) => (
                          <div className="item duany-description">{skill.name}</div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
    }
}

ChapterIntro.propTypes = {
  loading: React.PropTypes.bool,
  num: PropTypes.number,
  chapter: React.PropTypes.object,
  chapterExists: React.PropTypes.bool
}