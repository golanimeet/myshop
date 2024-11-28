import AdminSidebar from "./AdminSidebar";
export default function AdminEditCategory() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-header bg-primary d-flex justify-content-between">
                                    <h3 className="m-0 fw-bold">Edit Category</h3>
                                    <a href="admin_category.html" className="btn btn-light">
                                        BACK <i className="fa fa-arrow-left" />
                                    </a>
                                </div>
                                <div className="card-body bg-white alltext">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <h4 className="text-black">Edit category</h4>
                                            <form action="">
                                                <div className="mb-3">
                                                    <label htmlFor="title" className="form-label ">
                                                        Edit Title
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
                                                    <label htmlFor="photo" className="form-label">
                                                        Change Photo
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
                                                <b className="border-bottom text-black">is Live?</b>
                                                <div className="form-check d-flex">
                                                    <input
                                                        className="form-check-input text-black "
                                                        type="radio"
                                                        name="is Live?"
                                                        id="Yes"
                                                        style={{ float: "none" }}
                                                    />
                                                    <label
                                                        className="form-check-label text-black "
                                                        htmlFor="Yes"
                                                    >
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
                                                    <label
                                                        className="form-check-label text-black "
                                                        htmlFor="NO"
                                                    >
                                                        NO
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary">
                                                        Save changes
                                                    </button>
                                                    &nbsp;&nbsp;
                                                    <button type="reset" className="btn btn-danger">
                                                        Clear all
                                                    </button>
                                                    {/* <input type="submit" value="Save changes" class="btn btn-primary"> */}
                                                    {/* <input type="reset" value="Clear all" class="btn btn-secondary"> */}
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-4 text-center">
                                            <b>Current Photo</b>
                                            <img
                                                src="https://picsum.photos/300?random=1"
                                                className="img-fluid img-thumbnail shadow"
                                            />
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