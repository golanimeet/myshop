import AdminSidebar from "./AdminSidebar";
export default function AdminViewProduct() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-header bg-primary d-flex justify-content-between">
                                    <h3 className="m-0 fw-bold">Product (Detail)</h3>
                                    <a href="admin_products.html" className="btn btn-light">BACK <i className="fa fa-arrow-left" /></a>
                                </div>
                                <div className="card-body bg-white">
                                    <div className="row">
                                        <div className="col-4">
                                            <img src="assets/images/123.jpg" alt className="img-fluid" />
                                        </div>
                                        <div className="col-8">
                                            <table className="table table-bordered table-sm">
                                                <tbody><tr>
                                                    <th width="25%">ID</th>
                                                    <td />
                                                </tr>
                                                    <tr>
                                                        <th width="25%">Name</th>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Category</th>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Price</th>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Stock</th>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Weight</th>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Size</th>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Is Live?</th>
                                                        <td>Yes</td>
                                                    </tr>
                                                    <tr>
                                                        <th width="25%">Details</th>
                                                        <td />
                                                    </tr>
                                                </tbody></table>
                                        </div>
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