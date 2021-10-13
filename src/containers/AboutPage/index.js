import React, {Fragment} from 'react';
import Navbar5 from '../../components/Navbar5'
import Breadcrumbs from '../../components/Breadcrumbs'
// import AboutArea3 from '../../components/aboutarea3'


const AboutPage =() => {
    return(
        <Fragment>
            <Navbar5/>
            <Breadcrumbs pageTitle={'About Me'} pageSub={'About'}/>
            {/* <AboutArea3/> */}
            
        </Fragment>
    )
};
export default AboutPage;