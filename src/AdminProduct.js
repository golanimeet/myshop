import AdminSidebar from "./AdminSidebar";
export default function AdminProduct() {
    return (
        <div className="container-scroller">
            <AdminSidebar />
            <div className="container-fluid page-body-wrapper">
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row ">
                            <div className="col-12 grid-margin">
                                <div className="card shadow">
                                    <div className="card-header bg-primary d-flex justify-content-between">
                                        <h3 className="m-0 fw-bold">Products</h3>
                                        <a href="admin_add_product.html" className="btn btn-light">
                                            Add Products
                                        </a>
                                    </div>
                                    <div className="card-body bg-white">
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Category</th>
                                                    <th>Name</th>
                                                    <th>Photo</th>
                                                    <th>Price</th>
                                                    <th>Stock</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Phone</td>
                                                    <td>IPhone - 15</td>
                                                    <td>
                                                        <img src="assets/images/Tyres.png" className="img-fluid " alt="" />
                                                    </td>
                                                    <td>125000</td>
                                                    <td>10</td>
                                                    <td width="10%">
                                                        <a href="">
                                                            <i className="fa fa-trash fa-2x" />
                                                        </a>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <a href="admin_edit_product.html">
                                                            <i className="fa fa-pencil fa-2x" />
                                                        </a>
                                                        &nbsp;&nbsp;&nbsp;
                                                        <a href="admin_view_product.html">
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

    );
}