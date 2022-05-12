import React from "react";
import Script from "next/script";
const AppFooterLocationTop = () => {
  return (
    <>
      <div className="row">
        <div
          id="contact_us_career_in_home"
          className=" col-md-12 text-center contact-link"
          style={{ padding: "4.2em 7%", opacity: 1 }}
        >
          <a href="https://hbaarchitecture.com/2022/contact">Contact Us</a>
          <span className="mid-links">/</span>
          <a href="#" className="form-request-btn career-form-popup">
            Careers
          </a>
        </div>
      </div>

      <div className="row paddTop66" style={{ margin: 0, padding: "0 6%" }}>
        <hr style={{ margin: 0, borderTop: "2px dashed #6a6865" }} />
        <div className="col-md-12 text-center home-sub-heading"></div>
      </div>
      <Script
        id="footer_career_form_scripts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `

      $('.career-form-popup').click(function(e){
            e.preventDefault();
          $('#careerModal').modal('show');
      });
        

      `,
        }}
      ></Script>
    </>
  );
};

export default AppFooterLocationTop;
