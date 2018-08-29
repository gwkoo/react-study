// rcc enter 

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: "Default Name"
    }

    static propTypes = {
        name: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                안녕하세요, 제 이름은 {this.props.name} 입니다.
            </div>
        );
    }
}

// 다른 파일에서 이파일을 import시 위쪽에서 선언한 MyComponent 클래스를 불러오도록 설정한다.
export default MyComponent;

