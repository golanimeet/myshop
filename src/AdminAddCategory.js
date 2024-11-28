import AdminSidebar from "./AdminSidebar";
export default function AdminAddCategory() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-header bg-primary d-flex justify-content-between">
                                    <h3 className="m-0 fw-bold">Add Category</h3>
                                    <a href="admin_category.html" className="btn btn-light">
                                        BACK <i className="fa fa-arrow-left" />
                                    </a>
                                </div>
                                <div className="card-body bg-white alltext">
                                    <h4 className="text-black">Add new category</h4>
                                    <form action="">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label ">
                                                Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control "
                                                id="title"
                                                name="title"
                                                required=""
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label ">
                                                Select Photo
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control "
                                                id="photo"
                                                name="photo"
                                                accept="image/*"
                                                required=""
                                            />
                                        </div>
                                        <b className="border-bottom text-black ">is Live?</b>
                                        <div className="form-check d-flex">
                                            <input
                                                className="form-check-input text-black "
                                                type="radio"
                                                name="is Live?"
                                                id="Yes"
                                                style={{ float: "none" }}
                                            />
                                            <label className="form-check-label text-black " htmlFor="Yes">
                                                Yes
                                            </label>
                                        </div>
                                        <div className="form-check d-flex">
                                            <input
                                                className="form-check-input text-black "
                                                type="radio"
                                                name="is Live?"
                                                id="NO"
                                                style={{ float: "none" }}
                                            />
                                            <label className="form-check-label text-black " htmlFor="NO">
                                                NO
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="submit" className="btn btn-primary">
                                                Save
                                            </button>
                                            &nbsp;&nbsp;
                                            <button type="reset" className="btn btn-danger">
                                                Clear all
                                            </button>
                                        </div>
                                    </form>
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