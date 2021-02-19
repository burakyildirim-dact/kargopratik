import React, { } from 'react';
import Header2 from '../../../layout/header2';
import Sidebar from '../../../layout/sidebar';
import PageTitle from '../../../partial/customer/dashboard/page-title';
import CreditWarning from '../../../partial/customer/dashboard/credit-warning';
import Footer2 from '../../../layout/footer2';
import RecentShipment from "../../../partial/customer/dashboard/recent-shipment";
import ShipmentList from "../../../component/shipment-list";


function CustomerDashboard() {

    return (
        <>
            <Header2 />
            <Sidebar />
            <PageTitle />
            <CreditWarning />
            <ShipmentList />
            



            <div className="content-body">
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className="col-xl-4 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card info-card">
                                <div className="media gradient">
                                    <div className="media-body">
                                        <h4 className="color-gray-500">Tebrikler Muhammedcim</h4>
                                        <p>Bu ay Kargopratik saysinde <br/><b>12.000 TL</b> tasarruf sağladınız. </p>
                                    </div>
                                    <i className="hand"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card info-card">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Şubat Ayı Kargo Gönderimi</h5>
                                        <span>121</span>
                                        <p className="last-month"><b>+10%</b> Ocak Ayı: 110</p>
                                    </div>
                                    <i className="fa ri-xl ri-truck-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card info-card">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Şubat Ayı Kargo Gönderi Fiyatı</h5>
                                        <span>32.000 ₺</span>
                                        <p className="last-month"><b>+10%</b> Ocak Ayı: 28.800 ₺</p>
                                    </div>
                                    <i className="fa ri-xl ri-money-dollar-circle-fill"></i>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Açık Gönderi</h5>
                                        <span>23</span>
                                    </div>
                                    <i className="fa ri-xl ri-dropbox-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Onay Bekleyen Gönderi</h5>
                                        <span>14</span>
                                    </div>
                                    <i className="fa ri-xl ri-inbox-archive-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-xxl-4">
                            <div className="card balance-widget dashboard-card">
                                <div className="media">
                                    <div className="media-body">
                                        <h5>Toplam Kargo Gönderimi</h5>
                                        <span>2764</span>
                                    </div>
                                    <i className="fa ri-xl ri-honour-fill"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <RecentShipment />

                </div>
            </div>

            <Footer2 />
        </>
    )
}

export default CustomerDashboard;