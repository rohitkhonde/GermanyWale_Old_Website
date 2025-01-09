import React from "react";
import "./ChooseUs2.css";
const ChooseUs2 = () => {
  return (
    <div className="choose-us-container">
      <div className="choose-us-heading-outer-container">
        {/* <div className="choose-us-heading-1">Why Choose Us</div> */}
        <div className="text-3xl choose-us-heading-2 ">
          Endless Possibilities Begin Here
        </div>
      </div>
      <div className="choose-us-card-section">
        {/* Card 1 */}
        <div className="card-container cont1">
          {/* Front Side */}
          <div className="card-common shadow-lg">
            {/* Small Card */}
            <div className="small-card">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a8 8 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128m-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24M96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192z"
                  />
                </svg>
              </span>
            </div>
            <span className="card-content">100% Results</span>
            <p>Guaranteed Admissions</p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            <div className="small-card">
              <span className="icon icon2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 10h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v3H2c0-1.414 0-2.121.44-2.56C2.878 19 3.585 19 5 19s2.121 0 2.56.44C8 19.878 8 20.585 8 22v-9c0-1.414 0-2.121.44-2.56C8.878 10 9.585 10 11 10m.146-6.977C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"
                  />
                </svg>
              </span>
            </div>
            <span className="card-content">100% Admits</span>
            <p>Get 100% success rate</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card-container ">
          {/* Front Side */}
          <div className="card-common shadow-lg card-common-2">
            {/* Small Card */}
            <div className="small-card">
              <span className="icon  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={256}
                  height={256}
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m225.27 60.21l-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64L128 36.22L211.35 64Z"
                  ></path>
                </svg>
              </span>{" "}
            </div>
            <span className="card-content">1:1 Mentorship</span>
            <p>Connecting with industry Experts</p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            {/* Small Card */}
            <div className="small-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={256}
                height={256}
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="m225.27 60.21l-96-32a4 4 0 0 0-2.54 0l-96 32A4 4 0 0 0 28 64v80a4 4 0 0 0 8 0V69.55l43.88 14.63a60 60 0 0 0 24.54 91c-20.86 5.74-39 19.13-51.77 38.65a4 4 0 0 0 6.7 4.36C75.17 193.92 100.2 180 128 180s52.83 13.92 68.65 38.18a4 4 0 0 0 6.7-4.36c-12.72-19.52-30.91-32.91-51.77-38.65a60 60 0 0 0 24.54-91l49.15-16.39a4 4 0 0 0 0-7.58ZM180 120a52 52 0 1 1-92.07-33.14l38.8 12.93a3.95 3.95 0 0 0 2.54 0l38.8-12.93A51.85 51.85 0 0 1 180 120m-52-28.22L44.65 64L128 36.22L211.35 64Z"
                ></path>
              </svg>{" "}
            </div>
            <span className="card-content">600+ students</span>
            <p>Growing day by day</p>{" "}
          </div>
        </div>

        {/* Card 3 */}
        <div className="card-container cont3">
          {/* Front Side */}
          <div className="card-common shadow-lg">
            {/* Small Card */}
            <div className="small-card">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a8 8 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128m-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24M96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192z"
                  />
                </svg>
              </span>{" "}
            </div>
            <span className="card-content">Zero Hassle</span>
            <p>Complete Support from scratch</p>
          </div>

          {/* Back Side */}
          <div className="card-back">
            {/* Small Card */}
            <div className="small-card">
              <span className="icon icon2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 10h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v3H2c0-1.414 0-2.121.44-2.56C2.878 19 3.585 19 5 19s2.121 0 2.56.44C8 19.878 8 20.585 8 22v-9c0-1.414 0-2.121.44-2.56C8.878 10 9.585 10 11 10m.146-6.977C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"
                  />
                </svg>
              </span>{" "}
            </div>
            <span className="card-content">100% Admits</span>
            <p>Get 100% sucess rate</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs2;
