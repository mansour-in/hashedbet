import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getChatbotById, getClientById } from './AppActions';

// import $ from 'jquery';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

import { getUser, getBotId, getClientId, getBotName, getClientName } from './AppReducer';

// Import Actions
// import { toggleAddPost } from './AppActions';
// import { switchLanguage } from '../../modules/Intl/IntlActions';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = { isMounted: false };
    }

    componentWillMount() {
        this.props.getChatbotById();
        this.props.getClientById();
        this.props.fetchProfile();
    }
    componentDidMount() {
        this.setState({isMounted: true}); // eslint-disable-line
        // this.plot();
        // Close ibox function
        $('.close-link').click(() => {
            const content = $(this).closest('div.x_panel');
            content.remove();
        });

        // Collapse ibox function
        $('.collapse-link').click(() => {
            const xPanel = $(this).closest('div.x_panel');
            const button = $(this).find('i');
            const content = xPanel.find('div.x_content');
            content.slideToggle(200);
            if (xPanel.hasClass('fixed_height_390')) {
                xPanel.toggleClass('').toggleClass('fixed_height_390');
            }
            if (xPanel.hasClass('fixed_height_320')) {
                xPanel.toggleClass('').toggleClass('fixed_height_320');
            }
            button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
            setTimeout(() => {
                xPanel.resize();
            }, 50);
        });
    }

    // toggleAddPostSection = () => {
    //   this.props.dispatch(toggleAddPost());
    // };

    // SideBar

    setContentHeight() {
        // reset height
        $('.right_col').css('min-height', $(window).height());

        const bodyHeight = $('body').outerHeight();
        const footerHeight = $('body').hasClass('footer_fixed') ? -10 : $('footer').height();
        const leftColHeight = $('.left_col').eq(1).height() + $('.sidebar-footer').height();
        let contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= $('.nav_menu').height() + footerHeight;

        $('.right_col').css('min-height', contentHeight);
    }

    // Header
    toggleSidebar() {
        // toggle small or large menu
        if ($('body').hasClass('nav-md')) {
            $('#sidebar-menu').find('li.active ul').hide();
            $('#sidebar-menu')
                .find('li.active')
                .addClass('active-sm')
                .removeClass('active');
        } else {
            $('#sidebar-menu').find('li.active-sm ul').show();
            $('#sidebar-menu')
                .find('li.active-sm')
                .addClass('active')
                .removeClass('active-sm');
        }
        $('body').toggleClass('nav-md nav-sm');
    }

    profilePhoto() {
        if (this.props.userData.avatar) {
            return this.props.userData.avatar;
        }
        return '/assets/img/empty.png';
    }

    render() {
        return (
            <div>
                {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}

                <div>
                    <Helmet
                      title="Clever Chatbot"
                      titleTemplate="%s - App"
                      meta={[
                        { charset: 'utf-8' },
                          {
                              'http-equiv': 'X-UA-Compatible',
                              content: 'IE=edge',
                          },
                          {
                              name: 'viewport',
                              content: 'width=device-width, initial-scale=1',
                          },
                      ]}
                    />
                    <Sidebar
                      user={this.props.user}
                      photo={this.profilePhoto()}
                      location={this.props.location.pathname}
                      clientId={this.props.clientId}
                      botId={this.props.botId}
                      userData={this.props.userData}
                    />
                    <Header
                      toggleSidebar={this.toggleSidebar}
                      user={this.props.user}
                      photo={this.profilePhoto()}
                      location={this.props.location.pathname}
                      clientId={this.props.clientId}
                      clientName={this.props.clientName}
                      botName={this.props.botName}
                      botId={this.props.botId}
                      userData={this.props.userData}
                    />
                    {this.props.children}
                    <Footer />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    clientId: PropTypes.string.isRequired,
    botName: PropTypes.object.isRequired,
    clientName: PropTypes.string.isRequired,
    getChatbotById: PropTypes.string.isRequired,
    getClientById: PropTypes.string.isRequired,
    botId: PropTypes.string.isRequired,
    userData: PropTypes.array.isRequired,
    fetchProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
    return {
        getChatbotById: () => {
            dispatch(getChatbotById());
        },
        getClientById: () => {
            dispatch(getClientById());
        },
        fetchProfile: () => {
            dispatch(fetchProfile());
        },
    };
};

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        user: getUser(store),
        botId: getBotId(store),
        clientId: getClientId(store),
        botName: getBotName(store),
        clientName: getClientName(store),
        userData: getProfile(store),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
