import AdminSidebar from "./AdminSidebar";
export default function AdminOrder() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-header bg-primary d-flex justify-content-between">
                                    <h3 className="m-0 fw-bold">Orders</h3>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="table-responsive">
                                        <table className="table table-sm table-striped table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th>Customer</th>
                                                    <th>Payment</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Sat 06-02-2024</td>
                                                    <td>125000</td>
                                                    <td>
                                                        Ram Patel - 364001
                                                    </td>
                                                    <td>Recived - Online</td>
                                                    <td>Confirmed</td>
                                                    <td>
                                                        <a href="admin_view_order_detail.html">
                                                            <i className="fa fa-eye fa-2x" />
                                                        </a>
                                                    </td>
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