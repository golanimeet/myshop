import AdminSidebar from "./AdminSidebar";
export default function AdminCategory() {
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
                                        <h3 className="m-0 fw-bold">Category</h3>
                                        <a href="admin_add_category.html" className="btn btn-light">
                                            Add Category
                                        </a>
                                    </div>
                                    <div className="card-body bg-white">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-sm table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Sr.no</th>
                                                        <th>Title</th>
                                                        <th>Photo</th>
                                                        <th>Is Live</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mobile</td>
                                                        <td>
                                                            <img
                                                                src="assets/images/Batteries.png"
                                                                className="img-fluid"
                                                                alt=""
                                                            />
                                                        </td>
                                                        <td>Yes</td>
                                                        <td>
                                                            <a href="">
                                                                <i className="fa fa-trash fa-2x" />
                                                            </a>{" "}
                                                            &nbsp;&nbsp;
                                                            <a href="admin_edit_category.html">
                                                                <i className="fa fa-pencil fa-2x" />
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