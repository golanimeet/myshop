import AdminSidebar from "./AdminSidebar";
export default function AdminViewOrder() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-header bg-primary justify-content-between">

                                    <div className="row d-flex">
                                        <div className="col-lg-6">
                                            <h3 className="m-0 fw-bold">Bill</h3>
                                        </div>
                                        <div className="col-lg-6 d-flex justify-content-end align-items-end">
                                            <a href="admin_order_print.html" className="btn btn-light">Print</a>&nbsp; &nbsp;
                                            <a href="admin_orders.html" className="btn btn-light">BACK <i className="fa fa-arrow-left" /></a>&nbsp;
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="table-responsive">
                                        <table className="table table-sm table-striped table-striped-columns table-bordered">
                                            <tbody><tr>
                                                <td width="25%">ID</td>
                                                <td width="25%" />
                                                <td width="25%">Name</td>
                                                <td width="25%" />
                                            </tr>
                                                <tr>
                                                    <td width="25%">Date</td>
                                                    <td width="25%" />
                                                    <td width="25%">Address 1</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Amount</td>
                                                    <td width="25%" />
                                                    <td width="25%">Address 2</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Status</td>
                                                    <td width="25%" />
                                                    <td width="25%">City</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Payment Mode</td>
                                                    <td width="25%" />
                                                    <td width="25%">Pincode</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Payment Status</td>
                                                    <td width="25%" />
                                                    <td width="25%">Mobile</td>
                                                    <td width="25%" />
                                                </tr>
                                                <tr>
                                                    <td width="25%">Remarks</td>
                                                    <td colSpan={3} />
                                                </tr>
                                            </tbody></table>
                                        <h3 className="text-dark pt-3">Products</h3>
                                        <table className="table table-sm table-striped table-striped-columns table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Sr.No</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Qty</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Iphone 16</td>
                                                    <td>1,60,000</td>
                                                    <td>3</td>
                                                    <td>4,80,000</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}