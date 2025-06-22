const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { partial } = this.props;
        const Content = require('./content');
        const Footer = require('./footer');

        return (
            <Fragment>
                <div
                    id="nexmoe-header"
                    dangerouslySetInnerHTML={{
                        __html: partial('_layout/nexmoe/header')
                    }}
                ></div>
                <div id="nexmoe-content">
                    <Content {...this.props} />
                    <div
                        class="nexmoe-post-right"
                        dangerouslySetInnerHTML={{
                            __html: partial('_partial/right')
                        }}
                    ></div>
                </div>
                <div
                    id="nexmoe-pendant"
                    dangerouslySetInnerHTML={{
                        __html: partial('_pendant/index')
                    }}
                ></div>
                <div id="nexmoe-footer">
                    <Footer {...this.props} />
                </div>
            </Fragment>
        );
    }
};
