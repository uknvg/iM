import React from "react";
import '../pages-design/Overview.css';

const Overview = () => {
    return (
        <div className="overview">
            {/* Help Section */}
            <div className="help-section">
                <div className="gethelp">
                    <i className='bx bx-support'></i>
                    <h1>Get Help</h1>
                    <p>Join our support server to get help</p>
                </div>
                <div className="getcoins">
                    <i className='bx bxs-coin-stack'></i>
                    <h1>Get Coins</h1>
                    <p>Buy the coins to add more protection to your server</p>
                </div>
            </div>

            {/* Mod Section */}
            <div className="mod">
                {/* Coins Section */}
                <div className="coins">
                    <h1>Coins</h1>
                    <p>100</p>
                    <i className='bx bx-bitcoin'></i>
                </div>

                {/* Type Section */}
                <div className="type">
                    <h1>Type</h1>
                    <p>Member</p>
                    <i className='bx bxs-user'></i>
                </div>

                {/* Wallet Section */}
                <div className="wallet">
                    <h1>Wallet</h1>
                    <p>42$</p>
                    <i className='bx bxs-wallet bx-wallet'></i>
                </div>

                {/* Payments Table */}
                <div className="payment-table-container">
                    <table className="payment-table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Coins</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1/3/2025</td>
                                <td>32$</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>15/6/2024</td>
                                <td>20$</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>10/1/2024</td>
                                <td>10$</td>
                                <td>25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Overview;