import React from 'react'

function Footer() {
  return (
    <>
    <footer className="footer footer-static footer-light">
      <p className="clearfix mb-0">
        <span className="float-md-start d-block d-md-inline-block mt-25">
          COPYRIGHT © 2021
          <a
            className="ms-25"
            href="https://1.envato.market/pixinvent_portfolio"
            target="_blank"
          >
            Pixinvent
          </a>
          <span className="d-none d-sm-inline-block">, All rights Reserved</span>
        </span>
        <span className="float-md-end d-none d-md-block">
          Hand-crafted &amp; Made with
          <i data-feather="heart" />
        </span>
      </p>
    </footer>
    <button className="btn btn-primary btn-icon scroll-top" type="button">
      <i data-feather="arrow-up" />
    </button>
  </>
  
  
//     <div>
//       <footer className="footer">
//   <div className="d-sm-flex justify-content-center justify-content-sm-between">
//     <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
//       Copyright © bootstrapdash.com 2020
//     </span>
//     <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
//       {" "}
//       Free{" "}
//       <a
//         href="https://www.bootstrapdash.com/bootstrap-admin-template/"
        
//       >
//         Bootstrap admin templates
//       </a>{" "}
//       from Bootstrapdash.com
//     </span>
//   </div>
// </footer>

//     </div>
  )
}

export default Footer
