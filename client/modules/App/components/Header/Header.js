import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export function Header(props, context) { // eslint-disable-line
    let headerPage;
    const clientsList = (
        <li className="chatbots">
            <Link id="clientsli" to={'/clients'}>Clients </Link>
        </li>
    );
    const chatbotsList = (
        <li className="chatbots">
            <Link className="chatbotsclients active" id="chatbotsli" to={`/chatbots/${props.clientId}`}>{`${props.clientName} Chatbots`} </Link>
        </li>
    );
    let superAdminClients = (props.user.role === 'SUPERADMIN' ? clientsList : null);
    const clients = (
        <ul id="clients" className="breadcrumb" style={{ paddingLeft: '21px' }}>
            <small>You are here: </small>
            <li className="clients">Clients</li>
        </ul>
    );
    const chatbots = (
        <ul id="chatbots" className="breadcrumb" style={{ paddingLeft: '21px' }}>
            <small>You are here: </small>
            {superAdminClients}
            <li>{`${props.clientName} Chatbots`}</li>
        </ul>
    );
    const dashboard = (
        <ul id="dashboard" className="breadcrumb" style={{ paddingLeft: '21px' }}>
            <small>You are here: </small>
            {superAdminClients}
            {chatbotsList}
            <li>{`${props.botName.name} ~> Home`} </li>
        </ul>
    );
    const history = (
        <ul id="history" className="breadcrumb" style={{ paddingLeft: '21px' }}>
            <small>You are here: </small>
            {superAdminClients}
            {chatbotsList}
            <li>{`${props.botName.name} ~> History`}</li>
        </ul>
    );
    const settings = (
        <ul id="settings" className="breadcrumb" style={{ paddingLeft: '21px' }}>
            <small>You are here: </small>
            {superAdminClients}
            {chatbotsList}
            <li>{`${props.botName.name} ~> Settings`} </li>
        </ul>
    );
    const employees = (
        <ul id="employees" className="breadcrumb" style={{ paddingLeft: '21px' }}>
            <small>You are here: </small>
            {superAdminClients}
            <li>{props.clientName} Employees</li>
        </ul>
    );
    const superAdminPage = [clients, chatbots, settings, dashboard, history, employees];
    const pageUrl = window.location.href.toString().split(window.location.host)[1];
    const splitPageUrl = pageUrl.split('/');
    superAdminPage.forEach(key => {
        if (key.props.id === splitPageUrl[1]) {
            headerPage = key;
        }
    });
    return (
        <div className="top_nav">
            <div className="nav_menu">
                <nav>
                    <div className="nav toggle"style={{ paddingTop: '6px', marginTop: '18px' }}>
                        <Link id="menu_toggle" onClick={props.toggleSidebar} style={{ padding: '9px 2px 1px', marginLeft: '10px' }}>
                            <i className="fa fa-bars" style={{ marginTop: '-10px', marginLeft: '0' }}></i>
                        </Link>
                    </div>
                    {headerPage}
                    <ul className="nav navbar-nav navbar-right">
                        <li className="">
                            <Link to={'/'} className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <img src={props.photo} alt="" />{props.userData.name}<span className=" fa fa-angle-down"></span>
                            </Link>
                            <ul className="dropdown-menu dropdown-usermenu pull-right">
                                <li><Link id="profile" to={'/profile'}> Profile</Link></li>
                                {
                                /*
                                <li>
                                    <Link to={'/'}>
                                        <span className="badge bg-red pull-right">50%</span>
                                        <span>Settings</span>
                                    </Link>
                                </li>
                                <li><Link to={'/'}>Help</Link></li>
                                */
                                }
                                <li><a href="/logout"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                            </ul>
                        </li>
                        {/*
                        <li role="presentation" className="dropdown">
                            <Link to={'/'} className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                                <i className="fa fa-envelope-o"></i>
                                <span className="badge bg-green">6</span>
                            </Link>
                            <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                                <li>
                                    <Link>
                                        <span className="image"><img src="assets/img/img.jpg" alt="Profile" /></span>
                                        <span>
                                            <span>John Smith</span>
                                            <span className="time">3 mins ago</span>
                                        </span>
                                        <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="image"><img src="assets/img/img.jpg" alt="Profile" /></span>
                                        <span>
                                            <span>John Smith</span>
                                            <span className="time">3 mins ago</span>
                                        </span>
                                        <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="image"><img src="assets/img/img.jpg" alt="Profile" /></span>
                                        <span>
                                            <span>John Smith</span>
                                            <span className="time">3 mins ago</span>
                                        </span>
                                        <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span className="image"><img src="assets/img/img.jpg" alt="Profile" /></span>
                                        <span>
                                            <span>John Smith</span>
                                            <span className="time">3 mins ago</span>
                                        </span>
                                        <span className="message">
                                        Film festivals used to be do-or-die moments for movie makers. They were where...
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <div className="text-center">
                                        <Link>
                                            <strong>See All Alerts</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        */}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

Header.contextTypes = {
    router: React.PropTypes.object,
};

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    photo: PropTypes.string.isRequired,
    botId: PropTypes.string,
    location: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    botName: PropTypes.object.isRequired,
    clientName: PropTypes.string.isRequired,
    userData: PropTypes.array.isRequired,
};

export default Header;
