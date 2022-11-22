import React from 'react';
// import Navbar from '../components/_App/Navbar';
import PageBanner from '@/components/Common/PageBanner';
 
// import Footer from '../components/_App/Footer';

const EditPassword = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            <PageBanner 
                pageTitle="Edit Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Edit Password" 
            />  

            <div className="ptb-100">
                <div className="container">
                    <div className="border-box">
                        <form>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" id="email" />
                            </div> 

                            <div className="form-group">
                                <label>Reset Password</label>
                                <input type="password" className="form-control" id="email" />
                            </div>

                            <button type="submit" className="default-btn mt-10">
                                <i className='flaticon-right-chevron'></i> Update

                                <span></span>
                            </button> 
                        </form>
                    </div>
                </div>
            </div>
          
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default EditPassword;