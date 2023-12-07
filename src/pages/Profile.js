import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/profileStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userType = localStorage.getItem("User type")
      axios
        .get(`http://127.0.0.1:8000/api/${userType}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user", error);
        });
  }, []);

  return (
    <div className="container bootstrap snippets bootdeys">
      <div className="row">
        <div className="col-xs-12 col-sm-9">
          <form className="form-horizontal">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  className="img-circle profile-avatar"
                  alt="User avatar"
                />
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Contact info</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">Prenome</label>
                  <div className="col-sm-10">
                    <input type="tel" className="form-control" value={user.first_name}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">nome</label>
                  <div className="col-sm-10">
                    <input type="tel" className="form-control" value={user.last_name}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">E-mail address</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" value={user.email}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Security</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">Current password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">New password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-default">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
