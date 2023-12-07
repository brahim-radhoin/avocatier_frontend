import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/alstyle.css";

const AvoList = () => {
  const [avos, setAvos] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/avos`)
      .then((response) => {
        setAvos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching avos", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row ng-scope">
        <div className="col-md-3 col-md-push-9">
          <h4>
            Results <span className="fw-semi-bold">Filtering</span>
          </h4>
          <p className="text-muted fs-mini">Listed content is categorized by the following groups:</p>
          <ul className="nav nav-pills nav-stacked search-result-categories mt">
            <li>
              <a href="#">
                Friends <span className="badge">34</span>
              </a>
            </li>
            <li>
              <a href="#">
                Pages <span className="badge">9</span>
              </a>
            </li>
            <li>
              <a href="#">Images</a>
            </li>
            <li>
              <a href="#">Groups</a>
            </li>
            <li>
              <a href="#">
                Globals <span className="badge">18</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-9 col-md-pull-3">
          {avos.map((avo) => (
            <section className="search-result-item" key={avo.id_av}>
              <a className="image-link" href="#">
                <img className="image" src="https://bootdey.com/img/Content/avatar/avatar8.png" />
              </a>
              <div className="search-result-item-body">
                <div className="row">
                  <div className="col-sm-9">
                    <h4 className="search-result-item-heading">
                      <a href="#">
                        {avo.first_name} {avo.last_name}
                      </a>
                    </h4>
                    <p className="info">{avo.email}</p>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                      ea commodo consequat.
                    </p>
                  </div>
                  <div className="col-sm-3 text-align-center">
                    <p className="value3 mt-sm">$9, 700</p>
                    <p className="fs-mini text-muted">PER WEEK</p>
                    <a className="btn btn-primary btn-info btn-sm" href="#">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
          {/* <div className="text-align-center">
            <ul className="pagination pagination-sm">
              <li className="disabled">
                <a href="#">Prev</a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AvoList;
