import React from "react";
import bike from "../../images/bike.png";
import motorBike from "../../images/motorbike.png";
const Pricing = () => {
  return (
    <section class="bg-light text-center p-5">
      <div class="container-fluid">
        <div class="row text-muted text-center">
          <div class="col m-4">
            <h1 class="display-4 mb-4">Basma code Challenge</h1>
            <div class="underline-dark mb-4"></div>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              minus.
            </p>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="card card-1 text-light py-4 my-4 mx-auto">
              <div class="card-body" id="grey">
                <img class="icon" src={bike} alt="Icon" />
                <br />
                <br />
                <h5 class="text-uppercase font-weight-bold mb-5">BASIC</h5>
                <h1 class="display-4" id="purple">
                  <i class="fas fa-dollar-sign"></i> 49
                </h1>
                <ul class="list-unstyled">
                  <li class="font-weight-bold py-3 card-list-item">
                    5G Linux Web Space
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    5 MYSQL Database
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    24/7 Tech Support
                  </li>
                  <li class="font-weight-bold py-3 card-list-item border-0">
                    Daily Backups
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn p-2 text-uppercase font-weight-bold price-card-button text-light"
                >
                  sign-up!
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card card-3 text-light py-4 my-4 mx-auto">
              <div class="card-body" id="grey">
                <img class="icon" src={motorBike} alt="Icon" />
                <br />
                <br />
                <h5 class="text-uppercase font-weight-bold mb-5">PRO</h5>
                <h1 class="display-4" id="purple">
                  <i class="fas fa-dollar-sign"></i> 149
                </h1>
                <ul class="list-unstyled">
                  <li class="font-weight-bold py-3 card-list-item">
                    10G Linux Web Space
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    50 MYSQL Database
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    Unlimitted Email
                  </li>
                  <li class="font-weight-bold py-3 card-list-item border-0">
                    Daily Backups
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn p-2 text-uppercase font-weight-bold price-card-button text-light"
                >
                  sign-up!
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card card-1 text-light py-4 my-4 mx-auto">
              <div class="card-body" id="grey">
                <img class="icon" src={bike} alt="Icon" />
                <br />
                <br />
                <h5 class="text-uppercase font-weight-bold mb-5">BASIC</h5>
                <h1 class="display-4" id="purple">
                  <i class="fas fa-dollar-sign"></i> 49
                </h1>
                <ul class="list-unstyled">
                  <li class="font-weight-bold py-3 card-list-item">
                    5G Linux Web Space
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    5 MYSQL Database
                  </li>
                  <li class="font-weight-bold py-3 card-list-item">
                    24/7 Tech Support
                  </li>
                  <li class="font-weight-bold py-3 card-list-item border-0">
                    Daily Backups
                  </li>
                </ul>
                <a
                  href="#"
                  class="btn p-2 text-uppercase font-weight-bold price-card-button text-light"
                >
                  sign-up!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <h4 class="text-muted mb-4">Not sure what to choose? Contact Us</h4>
          <i class="fas fa-coffee fa-3x"></i>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
