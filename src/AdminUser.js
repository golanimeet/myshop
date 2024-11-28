import AdminSidebar from "./AdminSidebar";
export default function AdminUser() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card">
                                <div className="card-header bg-primary">
                                    <h3>Customer</h3>
                                </div>
                                <div className="card-body bg-light alltext">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                <th>Message</th>
                                                <th>Action</th>
                                                <th>View Orders</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>meet@gmail.com</td>
                                                <td>9542013865</td>
                                                <td>
                                                    <a href="admin_user_message.html" className="btn btn-info btn-rounded">
                                                        Message
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="#" className="btn btn-danger btn-rounded">
                                                        Block
                                                    </a>&nbsp;
                                                    <a href="#" className="btn btn-success btn-rounded">
                                                        UnBlock
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="admin_orders.html" className="btn btn-warning btn-rounded">
                                                        View Order
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
    );
}