import React, {Component} from 'react';

const ERROR_SPACING = 10;
let ErrorTypeColor = 'red';
let fontSize = '18px';

class FormErrors extends Component {

    render() {
        if (this.props.errorType && this.props.errorType.match(/Success.*/)) {
            ErrorTypeColor = 'green';
        }
        return (
            <div style={{fontSize: fontSize, marginTop: ERROR_SPACING + 'px', color: ErrorTypeColor}}>
                {this.props.errorType}
            </div>
        );
    };
}

export default FormErrors;