import React from "react";

const HomeFeaturedProjects = () => {
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 767px) {
            .vap-btn {
              position: relative !important;
              padding: 2em !important;
            }
            .view-all-projects-btn {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding: 0 23%;
              padding-bottom: 1.7em;
            }
          }
          .colItem:hover .p_line {
            width: 30px;
          }
        `}
      </style>
      <div className="row">
        <div id="relatedProjectsId" className="relatedProjects-home col-md-12">
          <h2 style={{ opacity: 1 }}>Featured Projects</h2>

          <div className="colBox">
            <div
              className="colItem col-md-6"
              style={{ opacity: 1, paddingRight: "2em" }}
            >
              <a href="https://hbaarchitecture.com/2022/project/chedi-xinchang-resort">
                <img
                  src="/images/uploads/projects_images/338_01-Chedi-Resort-Hotel_project-thumb.jpg"
                  alt=""
                  className="visual img-responsive"
                />

                <div className="desc-home col-xs-7 col-sm-8 col-md-7 col-lg-8">
                  <p>Hospitality/Resorts </p>
                  <h3 className="heading_style">Chedi Xinchang Resort</h3>
                  <p className="city">China</p>
                </div>

                <div
                  className="col-xs-5 col-sm-4 col-md-5 col-lg-4 pull-right"
                  style={{ padding: 0 }}
                >
                  <div className="viewHover" style={{ marginTop: "3.35em" }}>
                    <div className="p_line view_project project_info_line"></div>

                    <p
                      className="View-Project_subtitle project_info_link"
                      style={{
                        textAlign: "right",
                        height: "22px",
                        fontFamily: "BauerBodoniStd-Roman",
                        fontSize: "18px",
                        textTransform: "unset",
                        textTransform: "unset",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      View Project &nbsp;
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="colItem col-md-6"
              style={{ opacity: 1, paddingLeft: "2em" }}
            >
              <a href="https://hbaarchitecture.com/2022/project/mandarin-oriental-bosphorus">
                <img
                  src="/images/uploads/projects_images/288_01-Mandarin-Oriental-Istanbul_project-thumb.jpg"
                  alt=""
                  className="visual img-responsive"
                />

                <div className="desc-home col-xs-7 col-sm-8 col-md-7 col-lg-8">
                  <p>Hospitality/Resorts </p>
                  <h3 className="heading_style">Mandarin Oriental Bosphorus</h3>
                  <p className="city">Turkey</p>
                </div>

                <div
                  className="col-xs-5 col-sm-4 col-md-5 col-lg-4 pull-right"
                  style={{ padding: 0 }}
                >
                  <div className="viewHover" style={{ marginTop: "3.35em" }}>
                    <div className="p_line view_project project_info_line"></div>

                    <p
                      className="View-Project_subtitle project_info_link"
                      style={{
                        textAlign: "right",
                        height: "22px",
                        fontFamily: "BauerBodoniStd-Roman",
                        fontSize: "18px",
                        textTransform: "unset",
                        textTransform: "unset",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      View Project &nbsp;
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="colItem col-md-6"
              style={{ opacity: 1, paddingRight: "2em" }}
            >
              <a href="https://hbaarchitecture.com/2022/project/xinlong-lake-mixed-use">
                <img
                  src="/images/uploads/projects_images/247_Xinlonghu-1_project-thumb.jpg"
                  alt=""
                  className="visual img-responsive"
                />

                <div className="desc-home col-xs-7 col-sm-8 col-md-7 col-lg-8">
                  <p>Commercial Mixed-Use </p>
                  <h3 className="heading_style">Xinlong Lake Mixed-Use</h3>
                  <p className="city">China</p>
                </div>

                <div
                  className="col-xs-5 col-sm-4 col-md-5 col-lg-4 pull-right"
                  style={{ padding: 0 }}
                >
                  <div className="viewHover" style={{ marginTop: "3.35em" }}>
                    <div className="p_line view_project project_info_line"></div>

                    <p
                      className="View-Project_subtitle project_info_link"
                      style={{
                        textAlign: "right",
                        height: "22px",
                        fontFamily: "BauerBodoniStd-Roman",
                        fontSize: "18px",
                        textTransform: "unset",
                        textTransform: "unset",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      View Project &nbsp;
                    </p>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="colItem col-md-6"
              style={{ opacity: 1, paddingLeft: "2em" }}
            >
              <a href="https://hbaarchitecture.com/2022/project/only-henan-hotel">
                <img
                  src="/images/uploads/projects_images/312_01-Unique-Henan-Hotel_project-thumb.jpg"
                  alt=""
                  className="visual img-responsive"
                />

                <div className="desc-home col-xs-7 col-sm-8 col-md-7 col-lg-8">
                  <p>Hospitality/Resorts </p>
                  <h3 className="heading_style">Unique Henan Hotel</h3>
                  <p className="city">China</p>
                </div>

                <div
                  className="col-xs-5 col-sm-4 col-md-5 col-lg-4 pull-right"
                  style={{ padding: 0 }}
                >
                  <div className="viewHover" style={{ marginTop: "3.35em" }}>
                    <div className="p_line view_project project_info_line"></div>

                    <p
                      className="View-Project_subtitle project_info_link"
                      style={{
                        textAlign: "right",
                        height: "22px",
                        fontFamily: "BauerBodoniStd-Roman",
                        fontSize: "18px",
                        textTransform: "unset",
                        textTransform: "unset",
                        fontWeight: "normal",
                        letterSpacing: "normal",
                      }}
                    >
                      View Project &nbsp;
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="row vap-btn">
        <div
          className="custom-page services-page pull-right"
          style={{ paddingRight: "6.3%" }}
        >
          <div
            className="col-xs-12 col-sm-6 col-md-6 view-all-projects-btn"
            id="view_all_projects_button"
            style={{ opacity: 1 }}
          >
            <a
              href="https://hbaarchitecture.com/2022/project"
              className="btn form-request-btn all-page-heading contact-form-popup"
            >
              View All projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeaturedProjects;
