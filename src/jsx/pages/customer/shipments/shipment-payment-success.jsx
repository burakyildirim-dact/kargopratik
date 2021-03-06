import React, { } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import Footer2 from '../../../layout/footer2';



function PaymentSuccess() {

    return (
        <>
            <Header2 />
            <Sidebar />

            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="auth-form card ">
                                <div className="card-body">
                                    <form action="#" className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon-success"><i className=" ri-checkbox-circle-fill"></i></span>
                                            <h4>Kargo ID: 11234</h4>
                                            <p>Ödemeniz başarıyla tamamlandı. Güncel Bakiyeniz 11.780 TL’dir.</p>
                                        </div>

                                        <div className="text-center">
                                            <Link to={'./shipment-detail'} type="submit" className="btn col-12 btn-primary pl-5 pr-5">Devam</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default PaymentSuccess;