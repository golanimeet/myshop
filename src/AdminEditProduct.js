import AdminSidebar from "./AdminSidebar";
export default function AdminEditProduct() {
    return (<div className="container-scroller">
        <AdminSidebar />
        <div className="container-fluid page-body-wrapper">
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-12 grid-margin">
                            <div className="card shadow">
                                <div className="card-header bg-primary d-flex justify-content-between align-items-center">
                                    <h2>Edit Product</h2>
                                    <a href="admin_products.html" className="btn btn-light">
                                        BACK <i className="fa fa-arrow-left" />
                                    </a>
                                </div>
                                <div className="card-body bg-white alltext">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <div className="form-floating mb-3">
                                                            <select
                                                                className="form-select"
                                                                aria-label="Default select"
                                                                name="category"
                                                                id="category"
                                                            >
                                                                <option selected="" value="">
                                                                    Select
                                                                </option>
                                                                <option value={1}>One</option>
                                                                <option value={2}>Two</option>
                                                                <option value={3}>Three</option>
                                                            </select>
                                                            <label htmlFor="categoryId">
                                                                Edit Product Category
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="title"
                                                                name="title"
                                                                placeholder="product name"
                                                            />
                                                            <label htmlFor="title">Editn Product Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="price"
                                                                name="price"
                                                                placeholder="price"
                                                            />
                                                            <label htmlFor="price">Edit Price</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                id="stock"
                                                                name="stock"
                                                                placeholder="stock"
                                                            />
                                                            <label htmlFor="stock">Edit Stock</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="weight"
                                                                name="weight"
                                                                placeholder="weight"
                                                            />
                                                            <label htmlFor="weight">Edit Weight</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <div className="form-floating mb-3">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="size"
                                                                name="size"
                                                                placeholder="Size"
                                                            />
                                                            <label htmlFor="size">Edit Size</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-6 col-sm-6 col-12">
                                                        <div className="form-floating">
                                                            <textarea
                                                                className="form-control"
                                                                placeholder="Leave a comment here"
                                                                id="details"
                                                                name="details"
                                                                style={{ height: 100 }}
                                                                defaultValue={""}
                                                            />
                                                            <label htmlFor="details">Edit Details</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                                        <sapn className="text-black">Is this category Live?</sapn>
                                                        <div className="form-check d-flex">
                                                            <input
                                                                className="form-check-input "
                                                                type="radio"
                                                                name="is Live?"
                                                                id="Yes"
                                                                style={{ float: "none" }}
                                                            />
                                                            <label
                                                                className="form-check-label text-black"
                                                                htmlFor="Yes"
                                                            >
                                                                Yes
                                                            </label>
                                                        </div>
                                                        <div className="form-check d-flex">
                                                            <input
                                                                className="form-check-input "
                                                                type="radio"
                                                                name="is Live?"
                                                                id="NO"
                                                                style={{ float: "none" }}
                                                            />
                                                            <label
                                                                className="form-check-label text-black"
                                                                htmlFor="NO"
                                                            >
                                                                NO
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                        <label htmlFor="photo" className="form-label">
                                                            Change Product Photo
                                                        </label>
                                                        <input
                                                            type="file"
                                                            className="form-control"
                                                            id="photo"
                                                            name="photo"
                                                        />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4 p-2 justify-content-end d-flex">
                                                        <button type="submit" className="btn btn-primary">
                                                            Save changes
                                                        </button>
                                                        &nbsp;&nbsp;
                                                        <button type="reset" className="btn btn-danger">
                                                            Clear all
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-3 text-dark">
                                            <b>Current Photo</b>
                                            <img
                                                src="https://picsum.photos/300?random=1"
                                                alt=""
                                                className="img-fluid img-thumbnail shadow mt-2"
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