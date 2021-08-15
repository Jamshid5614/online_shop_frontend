import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ErrorPage ({errorMsg,pageUrl,pageName}) {

    return <>
        <h1>{errorMsg}</h1>
        <Link to={pageUrl}>{pageName}</Link>
    </>
}

ErrorPage.propTypes = {
    errorMsg: PropTypes.string,
    pageUrl: PropTypes.string,
    pageName: PropTypes.string
}

ErrorPage.defaultProps = {
    errorMsg: 'no error was detected',
    pageUrl: '/',
    pageName: 'Home'
}





