export default function AdminLogin() {
    return (<div className="container">
        <div className="row d-flex mt-5 justify-content-center">
            <div className="col-lg-6">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-lg-6">
                <div className="card mt-5 shadow">
                    <div className="card-header bg-primary">
                        <h2>Change Password</h2>
                    </div>
                    <div className="card-body bg-light alltext">
                        <form action='#'>
                            <div className="p-2">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                            </div>
                            <div className="input-group p-2">
                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2">@gmail.com</span>
                            </div>

                            <div className="p-2">
                                <label htmlFor="psw">Password:</label>
                                <input type="password" name="psw" id="psw" className="form-control" placeholder="Enter your password" required />
                            </div>
                            <div className="d-flex justify-content-end pt-3">
                                <input type="submit" defaultValue="Submit" className="btn btn-primary" />&nbsp;
                                <input type="reset" defaultValue="Clear All" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}