import React from 'react';
// import { FormattedMessage } from 'react-intl';

// Import Style
// import styles from './Footer.css';

export function Footer() {
    return (
        <footer style={{ position: 'fixed', width: '102%', bottom: '0' }}>
            <div className="pull-right">
                Gentelella - Bootstrap Admin Template by <span>Colorlib</span>
            </div>
            <div className="clearfix"></div>
        </footer>
  );
}

export default Footer;
