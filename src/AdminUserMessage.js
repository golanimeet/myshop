import AdminSidebar from "./AdminSidebar";
export default function AdminUserMessage() {
return (<div className="container-scroller">
    <AdminSidebar />
    <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
            <div className="content-wrapper">
                <div className="row ">
                    <div className="col-lg-12 grid-margin">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <h2>Customer (Message)</h2>
                                <a href="admin_users.html" className="btn btn-light">BACK <i
                                        className="fa fa-arrow-left" /></a>
                            </div>
                            <div className="card-body alltext bg-light">
                                <form action="#">
                                    <div className="p-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" name="email" id="email" className="form-control" required
                                            defaultValue="meet@gmail.com" readOnly />
                                    </div>
                                    <div className="p-3">
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input type="text" name="subject" id="subject" required
                                            className="form-control" />
                                    </div>
                                    <div className="p-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea name="message" id="message" className="form-control" rows={10}
                                            defaultValue={""} />
                                    </div>
                                    
                                    <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Send
                                            Message</button>&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-danger">Clear all</button>
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