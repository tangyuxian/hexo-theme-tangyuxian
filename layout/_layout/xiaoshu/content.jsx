const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { body } = this.props;

        return <div dangerouslySetInnerHTML={{ __html: body }}></div>;
    }
};
