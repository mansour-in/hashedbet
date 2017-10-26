import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export function Sidebar(props, context) { // eslint-disable-line
    const chatbot = (
        <ul className="nav side-menu">
            <li id="homeli-id" className={`child_menu ${props.location.startsWith('/dashboard') ? 'active' : ''}`}>
                <Link id="homeli" to={`/dashboard/${props.clientId}/${props.botId}`}><i className="fa fa-home"></i> Home
                </Link>
            </li>
            <li id="historyli-id" className={`child_menu ${props.location.startsWith('/history') ? 'active' : ''}`}>
                <Link id="historyli" to={`/history/${props.clientId}/${props.botId}`} ><i className="fa fa-comments"></i> History
                </Link>
            </li>
            <li id="settingsli-id" className={`child_menu ${props.location.startsWith('/settings') ? 'active' : ''}`}>
                <Link id="settingsli" to={`/settings/${props.clientId}/${props.botId}`} ><i className="fa fa-edit"></i> Settings
                </Link>
            </li>
        </ul>
    );
    const admin = (
        <ul className="nav side-menu">
            <li id="chatbotslist" className={props.location.startsWith('/chatbots') ? 'active' : ''}>
                <Link className="chatbotsclients active" id="chatbotsli" to={`/chatbots/${props.clientId}`}>
                    <i className="fa fa-edit"></i> Chatbots <span className="fa fa-chevron-up"></span>
                </Link>
            </li>
            {chatbot}
            <li className={props.location.startsWith('/employees') ? 'active' : ''}>
                <Link id="employeesli" to={`/employees/${props.clientId}`} ><i className="fa fa-users"></i> Employees
                </Link>
            </li>
        </ul>
    );
    const employee = (
        <ul className="nav side-menu">
            <li id="chatbotslist" className={props.location.startsWith('/chatbots') ? 'active' : ''}>
                <Link className="chatbotsclients active" id="chatbotsli" to={`/chatbots/${props.clientId}`} >
                    <i className="fa fa-edit"></i> Chatbots <span className="fa fa-chevron-up"></span>
                </Link>
            </li>
            {chatbot}
        </ul>
    );
    const superAdmin =
        (<ul className="nav side-menu">
            <li className={props.location.startsWith('/clientDashboard') ? 'active' : ''}>
                <Link id="clientDashboardli" to={'/clientDashboard'} ><i className="fa fa-home"></i> Super Admin Dashboard
                </Link>
            </li>
            <li>
                <Link id="clientsli" to={'/clients'} ><i className="fa fa-desktop"></i> Clients
                </Link>
            </li>
            <li id="chatbotslist" className={props.location.startsWith('/chatbots') ? 'active' : ''}>
                <Link className="chatbotsclients active" id="chatbotsli" to={`/chatbots/${props.clientId}`} >
                    <i className="fa fa-edit"></i> Chatbots <span className="fa fa-chevron-up"></span>
                </Link>
            </li>
            {chatbot}
            <li className={props.location.startsWith('/employees') ? 'active' : ''}>
                <Link id="employeesli" to={`/employees/${props.clientId}`} ><i className="fa fa-users"></i> Employees
                </Link>
            </li>
        </ul>
    );
    let sidebarList;
    const superAdminSidebar = (
        <ul className="nav side-menu">
            <li className={props.location.startsWith('/clientDashboard') ? 'active' : ''}>
                <Link id="clientDashboardli" to={'/clientDashboard'} ><i className="fa fa-home"></i> Super Admin Dashboard
                </Link>
            </li>
            <li className={props.location.startsWith('/clients') ? 'active' : ''}>
                <Link id="clientsli" to={'/clients'} ><i className="fa fa-desktop"></i> Clients
                </Link>
            </li>
            <li id="chatbotslist" className={props.location.startsWith('/chatbots') ? 'active' : ''}>
                <Link id="chatbotsli" to={`/chatbots/${props.clientId}`} ><i className="fa fa-edit"></i> Chatbots
                </Link>
            </li>
            <li className={props.location.startsWith('/employees') ? 'active' : ''}>
                <Link id="employeesli" to={`/employees/${props.clientId}`} ><i className="fa fa-users"></i> Employees
                </Link>
            </li>
        </ul>
    );
    const profileSidebar = (
        <ul className="nav side-menu">
            <li className={props.location.startsWith('/clientDashboard') ? 'active' : ''}>
                <Link id="clientDashboardli" to={'/clientDashboard'} ><i className="fa fa-home"></i> Super Admin Dashboard
                </Link>
            </li>
            <li className={props.location.startsWith('/clients') ? 'active' : ''}>
                <Link id="clientsli" to={'/clients'} ><i className="fa fa-desktop"></i> Clients
                </Link>
            </li>
        </ul>
    );
    const adminSidebar = (
        <ul className="nav side-menu">
            <li id="chatbotslist" className={props.location.startsWith('/chatbots') ? 'active' : ''}>
                <Link id="chatbotsli" to={`/chatbots/${props.clientId}`} ><i className="fa fa-edit"></i> Chatbots
                </Link>
            </li>
            <li className={props.location.startsWith('/employees') ? 'active' : ''}>
                <Link id="employeesli" to={`/employees/${props.clientId}`} ><i className="fa fa-users"></i> Employees
                </Link>
            </li>
        </ul>
    );
    const employeeSidebar = (
        <ul className="nav side-menu">
            <li id="chatbotslist" className={props.location.startsWith('/chatbots') ? 'active' : ''}>
                <Link id="chatbotsli" to={`/chatbots/${props.clientId}`} ><i className="fa fa-edit"></i> Chatbots
                </Link>
            </li>
        </ul>
    );
    if ((props.location.startsWith('/employees')) || (props.location.startsWith('/chatbots'))) {
        sidebarList = (props.user.role === 'SUPERADMIN' ? superAdminSidebar : [(props.user.role === 'EMPLOYEE' ? employeeSidebar : adminSidebar)]);
    } else if ((props.location.startsWith('/clients')) || (props.location.startsWith('/clientDashboard'))) {
        sidebarList = (
            <ul className="nav side-menu">
                <li className={props.location.startsWith('/clientDashboard') ? 'active' : ''}>
                    <Link id="clientDashboardli" to={'/clientDashboard'} ><i className="fa fa-home"></i> Super Admin Dashboard
                    </Link>
                </li>
                <li className={props.location.startsWith('/clients') ? 'active' : ''}>
                    <Link id="clientsli" to={'/clients'} ><i className="fa fa-desktop"></i> Clients
                    </Link>
                </li>
            </ul>);
    } else if ((props.location.startsWith('/profile'))) {
        sidebarList = (props.user.role === 'SUPERADMIN' ? profileSidebar : [(props.user.role === 'EMPLOYEE' ? employeeSidebar : adminSidebar)]);
    } else {
        sidebarList = (props.user.role === 'SUPERADMIN' ? superAdmin : [(props.user.role === 'EMPLOYEE' ? employee : admin)]);
    }
    return (
        <div className="col-md-3 left_col menu_fixed">
            <div className="left_col scroll-view">
                <div className="navbar nav_title" style={{ border: 0 }}>
                    <div className="site_title">
                        <img id="cleverLogo" src="/assets/img/cleverdashboard.png" alt="" style={{ width: '65px', marginLeft: '-6px' }} />
                        <span style={{ paddingLeft: '10px', fontSize: '17px' }}>Dashboard</span>
                    </div>
                </div>
                <div className="clearfix"></div>

                {/* menu profile quick info*/}
                <div className="profile">
                    <div className="profile_pic">
                        <img src={props.photo} alt="..." className="img-circle profile_img" style={{ height: '60px' }} />
                    </div>
                    <div className="profile_info">
                        <span>Welcome,</span>
                        <h2>{props.userData.name}</h2>
                    </div>
                </div>
                {/* menu profile quick info */}

                <br /> {/* sidebar menu */}
                <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
                    <div className="menu_section">
                        <h3 style={{ opacity: '0' }}>non breakable</h3>
                        {sidebarList}
                    </div>
                </div>
                <div className="sidebar-footer hidden-small" style={{ paddingLeft: '70px', paddingBottom: '20px' }}>Version 1.0.0 </div>
            </div>
        </div>
    );
}

Sidebar.contextTypes = {
    router: React.PropTypes.object,
};

Sidebar.propTypes = {
    user: PropTypes.object.isRequired,
    photo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    botId: PropTypes.string,
    clientId: PropTypes.string.isRequired,
    userData: PropTypes.array.isRequired,
};

export default Sidebar;
