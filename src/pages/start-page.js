// import React from "react";
// import logo from "./cssFolder/Images/logo-main.png";
// import place2 from "./cssFolder/Images/place 2.png";
// import place1 from "./cssFolder/Images/place1.png";
// import place3 from "./cssFolder/Images/place3.png";
// import clipart1 from "./cssFolder/Images/75h@2x_0.png";
// import clipart2 from "./cssFolder/Images/75h@2x.png";
// import clipart from "./cssFolder/Images/clipart.png";
// import datecalendar from "./cssFolder/Images/date-calendar.png";
// //import "./jj.css";
// import "../../styles.module.css"

// const ccc = () => {

//   if (typeof window !== "undefined") {
//     require("@fortawesome/fontawesome-free/css/all.css");
//     require("bootstrap-css-only/css/bootstrap.min.css");
//     require("mdbreact/dist/css/mdb.css");
//     require("bootstrap/dist/css/bootstrap.min.css");
//     require("react-toastify/dist/ReactToastify.css");
//   }

//   return (
//     <div>
//       <>
//         {/* Influincer tag Influence our roadmap  */}
//         <div classNameName="containernew">
//           <div classNameName="roadmap_full_contentnew">
//             <div tabIndex={0} classNameName="content_influence_our_roadmapnew">
//               <label classNameName="btn_influence_our_roadmap_label">
//                 Influence our roadmap
//               </label>
//             </div>
//           </div>
//         </div>
//         <div
//           classNameName="dialog-off-canvas-main-canvas"
//           data-off-canvas-main-canvas=""
//         >
//           <div classNameName="page">
//             {/* Navabar */}
//             {/* <nav classNameName="navbar navbar-expand-lg justify-content-between navbar- sticky-top">
//               <div classNameName="container-fluid">
//                 <div classNameName="block block--cvs-branding">
//                   <Link
//                     to="#"
//                     classNameName="navbar-brand d-flex align-items-center"
//                     aria-label=""
//                   >
//                     <img
//                       src={logo}
//                       width={30}
//                       height="auto"
//                       alt="Roboust Api Hub"
//                       classNameName="mr-2"
//                     />
//                   </Link>
//                 </div>
//                 <button
//                   classNameName="navbar-toggler"
//                   type="button"
//                   data-toggle="collapse"
//                   data-target=".navbar-collapse"
//                   aria-controls="navbar-collapse"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span classNameName="navbar-toggler-icon">
//                     <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
//                       <path
//                         stroke="currentColor"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeMiterlimit={10}
//                       />
//                     </svg>
//                   </span>
//                 </button>
//                 <div classNameName="collapse navbar-collapse">
//                   <div classNameName="mr-auto">
//                     <div classNameName="block block--cvs-main-menu">
//                       <ul classNameName="nav navbar-nav">
//                         <li classNameName="nav-item active">
//                           <Link to="#" classNameName="nav-link is-active">
//                             Home
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item">
//                           <Link to="#" classNameName="nav-link">
//                             Products
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item">
//                           <Link to="#" classNameName="nav-link">
//                             Help
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item">
//                           <Link to="#" classNameName="nav-link">
//                             FAQs
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item">
//                           <Link to="#" classNameName="sign-in nav-link">
//                             Sign in
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </nav> */}

//             <main classNameName="main" role="main">
//               <Link tabIndex={-1} />
//               <div classNameName="page-layout-sidebar-bottom">
//                 <div classNameName="page-layout-sidebar-bottom__top">
//                   <div classNameName="page__content">
//                     <div classNameName="hidden" />
//                     <Linkrticle
//                       role="article"
//                       about="/home"
//                       classNameName="node landing landing--full"
//                     >
//                       <div classNameName="paragraph hero hero--default bg-light">
//                         <div classNameName="hero__wrapper">
//                           <div classNameName="hero__content py-9 py-md-0">
//                             <div classNameName="containernew">
//                               <div classNameName="row">
//                                 <div classNameName="col-md-6">
//                                   <h1 classNameName="hero__title">Build with us</h1>
//                                   <div classNameName="field field--hidden hero__field-text">
//                                     <p>
//                                       Connect with a suite of CVS
//                                       Health®&nbsp;services to help
//                                       <br />
//                                       put your users on the path to better
//                                       health.
//                                     </p>
//                                   </div>
//                                   <div classNameName="hero__buttons mt-5">
//                                     <div classNameName="buttons buttons--hero">
//                                       <span classNameName="buttons__item">
//                                         <Link classNameName="" to="#">
//                                           View Products
//                                         </Link>
//                                       </span>
//                                       <span classNameName="buttons__item">
//                                         <Link classNameName="" to="#">
//                                           Create account
//                                         </Link>
//                                       </span>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div classNameName="col-md-6">
//                                   <div classNameName="field field--hidden hero__field-media">
//                                     <div classNameName="media media--type-image media--view-mode-hero-squared">
//                                       <div classNameName="field field--hidden image__field-media-image">
//                                         <img
//                                           loading="lazy"
//                                           src={place1}
//                                           width={513}
//                                           height={468}
//                                           alt="hero"
//                                           typeof="foaf:Image"
//                                           classNameName="img-fluid"
//                                         />
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div classNameName="paragraph card-group--default py-7 bg-light">
//                         <div classNameName="containernew">
//                           <h2 classNameName="card-group__title text-center pb-5">
//                             Get started with the APIs in minutes
//                           </h2>
//                           <div classNameName="card-decknew">
//                             <div classNameName="card has-hover-shadow paragraph card--default">
//                               <Link to="#">
//                                 <div classNameName="card-block">
//                                   <div classNameName="card-body">
//                                     <h3 classNameName="card-title">Get Started</h3>
//                                     <div classNameName="field field--hidden card__field-text">
//                                       <p>
//                                         Creating an account is easy. Spend less
//                                         time registering and more time building.
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div classNameName="card-img-top sdd">
//                                     <div classNameName="field field--hidden card__field-image">
//                                       <div classNameName="media media--type-image media--view-mode-default">
//                                         <div classNameName="field field--hidden image__field-media-image">
//                                           <img
//                                             loading="lazy"
//                                             src={clipart}
//                                             width={500}
//                                             height={500}
//                                             alt="get started"
//                                             typeof="foaf:Image"
//                                             classNameName="img-fluid"
//                                           />
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div classNameName="card-footer">
//                                   <span />
//                                   <span>
//                                     Create account
//                                     {/* <svg
//                             className="svg-inline--fa fa-angle-right fa-w-8"
//                             aria-hidden="true"
//                             focusable="false"
//                             data-prefix="fas"
//                             data-icon="angle-right"
//                             role="img"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 256 512"
//                             data-fa-i2svg=""
//                           >
//                             <path
//                               fill="currentColor"
//                               d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
//                             ></path></svg> */}
//                                   </span>
//                                 </div>
//                               </Link>
//                             </div>
//                             <div classNameName="card has-hover-shadow paragraph card--default">
//                               <Link to="#">
//                                 <div classNameName="card-block">
//                                   <div classNameName="card-body">
//                                     <h3 classNameName="card-title">Products</h3>
//                                     <div classNameName="field field--hidden card__field-text">
//                                       <p>
//                                         Learn about our APIs and try them out
//                                         for yourself.
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div classNameName="card-img-top sdd">
//                                     <div classNameName="field field--hidden card__field-image">
//                                       <div classNameName="media media--type-image media--view-mode-default">
//                                         <div classNameName="field field--hidden image__field-media-image">
//                                           <img
//                                             loading="lazy"
//                                             src={clipart2}
//                                             width={118}
//                                             height={157}
//                                             alt="products"
//                                             typeof="foaf:Image"
//                                             classNameName="img-fluid"
//                                           />
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div classNameName="card-footer">
//                                   <span />
//                                   <span>
//                                     All APIs
//                                     {/* <svg
//                             className="svg-inline--fa fa-angle-right fa-w-8"
//                             aria-hidden="true"
//                             focusable="false"
//                             data-prefix="fas"
//                             data-icon="angle-right"
//                             role="img"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 256 512"
//                             data-fa-i2svg=""
//                           >
//                             <path
//                               fill="currentColor"
//                               d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
//                             ></path></svg> */}
//                                     {/* <i className="fas fa-angle-right"></i> */}
//                                   </span>
//                                 </div>
//                               </Link>
//                             </div>
//                             <div classNameName="card has-hover-shadow paragraph card--default">
//                               <Link to="#">
//                                 <div classNameName="card-block">
//                                   <div classNameName="card-body">
//                                     <h3 classNameName="card-title">Learn more</h3>
//                                     <div classNameName="field field--hidden card__field-text">
//                                       <p>
//                                         Need help? Check out our support
//                                         resouces to realize the full potential
//                                         of your ideas.
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <div classNameName="card-img-top sdd">
//                                     <div classNameName="field field--hidden card__field-image">
//                                       <div classNameName="media media--type-image media--view-mode-default">
//                                         <div classNameName="field field--hidden image__field-media-image">
//                                           <img
//                                             loading="lazy"
//                                             src={clipart1}
//                                             width={159}
//                                             height={159}
//                                             alt="user guide"
//                                             typeof="foaf:Image"
//                                             classNameName="img-fluid"
//                                           />
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div classNameName="card-footer">
//                                   <span />
//                                   <span>
//                                     Register
//                                     {/* <svg
//                             className="svg-inline--fa fa-angle-right fa-w-8"
//                             aria-hidden="true"
//                             focusable="false"
//                             data-prefix="fas"
//                             data-icon="angle-right"
//                             role="img"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 256 512"
//                             data-fa-i2svg=""
//                           >
//                             <path
//                               fill="currentColor"
//                               d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
//                             ></path></svg> */}
//                                     {/* <i className="fas fa-angle-right"></i> */}
//                                   </span>
//                                 </div>
//                               </Link>
//                             </div>
//                           </div>
//                           <div classNameName="card-group__buttons text-center pt-5">
//                             <div classNameName="buttons buttons--card-group" />
//                           </div>
//                         </div>
//                       </div>
//                       <div classNameName="paragraph callout-group callout-group--default text-center pt-7 pb-5">
//                         <div classNameName="containernew">
//                           <h2 classNameName="callout-group__title text-center pb-5">
//                             How it works
//                           </h2>
//                           <div classNameName="field field--hidden callout-group__intro">
//                             <p>
//                               Getting started is easy. Follow these 3 steps.
//                             </p>
//                           </div>
//                           <div classNameName="row">
//                             <div classNameName="col-md">
//                               <div classNameName="paragraph callout callout--default">
//                                 <h3 classNameName="callout__title">
//                                   Create an account
//                                 </h3>
//                                 <div classNameName="field field--hidden callout__field-text">
//                                   <p>
//                                     We'll get you set up and ready to go in
//                                     minutes.
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div classNameName="col-md">
//                               <div classNameName="paragraph callout callout--default">
//                                 <h3 classNameName="callout__title">Experiment</h3>
//                                 <div classNameName="field field--hidden callout__field-text">
//                                   <p>
//                                     Test your code in our sandbox. Use our
//                                     support resources to bring your ideas to
//                                     life.
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                             <div classNameName="col-md">
//                               <div classNameName="paragraph callout callout--default">
//                                 <h3 classNameName="callout__title">Get access</h3>
//                                 <div classNameName="field field--hidden callout__field-text">
//                                   <p>
//                                     Connect to our live services and start
//                                     making your users'&nbsp;lives a little
//                                     healthier!
//                                   </p>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                           <div classNameName="callout-group__buttons text-center pt-5">
//                             <div classNameName="buttons buttons--callout-group">
//                               <span classNameName="buttons__item">
//                                 <Link classNameName="btn btn-primary" to="#">
//                                   Create account
//                                 </Link>
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div classNameName="paragraph views-block views-block--default">
//                         <div classNameName="containernew">
//                           <h2 classNameName="card-group__title text-center">
//                             <div classNameName="field field--hidden views-block__field-intro-text">
//                               We offer a variety of APIs, including the
//                               following categories:
//                             </div>
//                           </h2>
//                           <div classNameName="card-group__description text-center" />
//                           <div classNameName="card-deck pt-5">
//                             <div classNameName="field field--hidden views-block__field-views-block">
//                               <div classNameName="views-element-container block block--views-block--api-categories-block-1">
//                                 <div>
//                                   <div classNameName="view view-api-categories view-api-categories--block-1 view-id-api_categories view-display-id-block_1 js-view-dom-id-fba349cdd881250540a883e806224441faff83c917a58f0b9aca6cdcf925677a">
//                                     <div classNameName="view-content">
//                                       <div classNameName="card text-center">
//                                         <div classNameName="views-field views-field-field-category-image">
//                                           <div classNameName="field-content mb-3">
//                                             <img
//                                               loading="lazy"
//                                               src={place2}
//                                               width={165}
//                                               height={123}
//                                               alt="authentication"
//                                               typeof="foaf:Image"
//                                               classNameName="img-fluid"
//                                             />
//                                           </div>
//                                         </div>
//                                         <div classNameName="views-field views-field-name">
//                                           <span classNameName="field-content">
//                                             Authentication
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-description__value">
//                                           <span classNameName="field-content">
//                                             Authentication APIs
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-nothing">
//                                           <span classNameName="field-content">
//                                             <Link
//                                               to="#"
//                                               label="Authentication  APIs"
//                                             >
//                                               Authentication APIs
//                                             </Link>
//                                           </span>
//                                         </div>
//                                       </div>
//                                       <div classNameName="card text-center">
//                                         <div classNameName="views-field views-field-field-category-image">
//                                           <div classNameName="field-content mb-3">
//                                             <img
//                                               loading="lazy"
//                                               src={place2}
//                                               width={165}
//                                               height={123}
//                                               alt="authentication"
//                                               typeof="foaf:Image"
//                                               classNameName="img-fluid"
//                                             />
//                                           </div>
//                                         </div>
//                                         <div classNameName="views-field views-field-name">
//                                           <span classNameName="field-content">
//                                             Claims and EOBs
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-description__value">
//                                           <span classNameName="field-content">
//                                             <p>
//                                               API services that manage claims
//                                               and&nbsp;EOBs.
//                                             </p>
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-nothing">
//                                           <span classNameName="field-content">
//                                             <Link
//                                               to="#"
//                                               label="Claims and EOBs  APIs"
//                                             >
//                                               Claims and EOBs APIs
//                                             </Link>
//                                           </span>
//                                         </div>
//                                       </div>
//                                       <div classNameName="card text-center">
//                                         <div classNameName="views-field views-field-field-category-image">
//                                           <div classNameName="field-content mb-3">
//                                             <img
//                                               loading="lazy"
//                                               src={place2}
//                                               width={165}
//                                               height={123}
//                                               alt="authentication"
//                                               typeof="foaf:Image"
//                                               classNameName="img-fluid"
//                                             />
//                                           </div>
//                                         </div>
//                                         <div classNameName="views-field views-field-name">
//                                           <span classNameName="field-content">
//                                             Covid19
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-description__value">
//                                           <span classNameName="field-content">
//                                             All COVID19 related APIs
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-nothing">
//                                           <span classNameName="field-content">
//                                             <Link to="#" label="Covid19  APIs">
//                                               Covid19 APIs
//                                             </Link>
//                                           </span>
//                                         </div>
//                                       </div>
//                                       <div classNameName="card text-center">
//                                         <div classNameName="views-field views-field-field-category-image">
//                                           <div classNameName="field-content mb-3">
//                                             <img
//                                               loading="lazy"
//                                               src={place2}
//                                               width={165}
//                                               height={123}
//                                               alt="authentication"
//                                               typeof="foaf:Image"
//                                               classNameName="img-fluid"
//                                             />
//                                           </div>
//                                         </div>
//                                         <div classNameName="views-field views-field-name">
//                                           <span classNameName="field-content">
//                                             ExtraCare
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-description__value">
//                                           <span classNameName="field-content">
//                                             Extracare APIs
//                                           </span>
//                                         </div>
//                                         <div classNameName="views-field views-field-nothing">
//                                           <span classNameName="field-content">
//                                             <Link to="#" label="ExtraCare  APIs">
//                                               ExtraCare APIs
//                                             </Link>
//                                           </span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div classNameName="more-link">
//                                       <Link to="#">View all categories</Link>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div classNameName="paragraph views-block views-block--default">
//                         <div classNameName="containernew">
//                           <h2 classNameName="card-group__title text-center">
//                             <div classNameName="field field--hidden views-block__field-intro-text">
//                               Featured APIs
//                             </div>
//                           </h2>
//                           <div classNameName="card-group__description text-center">
//                             <div classNameName="field field--hidden views-block__field-intro-description">
//                               <p>Some of our most popular APIs.</p>
//                             </div>
//                           </div>
//                           <div classNameName="card-deck pt-5">
//                             <div classNameName="field field--hidden views-block__field-views-block">
//                               <div classNameName="views-element-container block block--views-block--apigee-api-catalog-block-1">
//                                 <div>
//                                   <div classNameName="api-catalaog view view-apigee-api-catalog view-apigee-api-catalog--block-1 view-id-apigee_api_catalog view-display-id-block_1 js-view-dom-id-079de87bb1bf9450f644262160185ecd690fac07a711cc3384d04c8df9d64124">
//                                     <div classNameName="view-header" />
//                                     <div classNameName="view-content row">
//                                       <div classNameName="col-md-4 col-sm-6 api-item views-row">
//                                         <div classNameName="views-field views-field-nothing">
//                                           <span classNameName="field-content">
//                                             <div classNameName="content-item">
//                                               <div
//                                                 classNameName="item-body"
//                                                 style={{ minHeight: 230 }}
//                                               >
//                                                 <div classNameName="item-image">
//                                                   <img
//                                                     loading="lazy"
//                                                     src={place3}
//                                                     width={100}
//                                                     height={87}
//                                                     alt="verified"
//                                                     typeof="Image"
//                                                     classNameName="img-fluid"
//                                                   />
//                                                 </div>
//                                                 <div classNameName="item-title">
//                                                   Covid19 Vaccine Availability
//                                                 </div>
//                                                 <div classNameName="item-description">
//                                                   The purpose of this API is to
//                                                   provide a near real-time
//                                                   inventory status of COVID19
//                                                   Vaccine inventory at CVS
//                                                   stores based on state and
//                                                   city.
//                                                 </div>
//                                               </div>
//                                               <div classNameName="item-footer">
//                                                 <div classNameName="item-created">
//                                                   <span>Created </span>02/10/21
//                                                 </div>
//                                                 <div classNameName="item-readmore">
//                                                   <Link
//                                                     to="#"
//                                                     aria-label="more details about Covid19 Vaccine Availability"
//                                                   >
//                                                     More Details
//                                                   </Link>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </span>
//                                         </div>
//                                       </div>
//                                       <div classNameName="col-md-4 col-sm-6 api-item views-row">
//                                         <div classNameName="views-field views-field-nothing">
//                                           <span classNameName="field-content">
//                                             <div classNameName="content-item">
//                                               <div
//                                                 classNameName="item-body"
//                                                 style={{ minHeight: 230 }}
//                                               >
//                                                 <div classNameName="item-image">
//                                                   <img
//                                                     loading="lazy"
//                                                     src={place3}
//                                                     width={100}
//                                                     height={87}
//                                                     alt="verified"
//                                                     typeof="Image"
//                                                     classNameName="img-fluid"
//                                                   />
//                                                 </div>
//                                                 <div classNameName="item-title">
//                                                   Retail Guest Refill APIs
//                                                 </div>
//                                                 <div classNameName="item-description">
//                                                   <p>
//                                                     Retail Guest Refill API
//                                                     Product capability will
//                                                     allow a guest user to check
//                                                     for prescription refill
//                                                     eligibility, earliest pickup
//                                                     date-time, and place
//                                                     prescription order.&nbsp;
//                                                   </p>
//                                                 </div>
//                                               </div>
//                                               <div classNameName="item-footer">
//                                                 <div classNameName="item-created">
//                                                   <span>Created </span>03/29/19
//                                                 </div>
//                                                 <div classNameName="item-readmore">
//                                                   <Link
//                                                     to="#"
//                                                     aria-label="more details about Retail Guest Refill APIs"
//                                                   >
//                                                     More Details
//                                                   </Link>
//                                                 </div>
//                                               </div>
//                                             </div>
//                                           </span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                     <div classNameName="more-link">
//                                       <Link to="#">View all product APIs</Link>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div classNameName="paragraph cta cta--default py-6">
//                         <div classNameName="containernew">
//                           <div classNameName="row d-md-flex align-items-md-center">
//                             <div classNameName="cta__text col-md">
//                               <h2 classNameName="cta__title mb-4">
//                                 Create, innovate and test new concepts.
//                               </h2>
//                               <div classNameName="buttons buttons--cta">
//                                 <span classNameName="buttons__item">
//                                   <Link classNameName="btn btn-primary" to="#">
//                                     Sign up for free
//                                   </Link>
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </article>
//                   </div>
//                 </div>
//               </div>
//             </main>
//             <footer classNameName="page__footer">
//               <div classNameName="footer pt-5 pb-4">
//                 <div classNameName="containernew">
//                   <div classNameName="d-md-flex footer-content">
//                     <div classNameName="block block--cvs-menu-footer">
//                       <ul classNameName="nav">
//                         <li classNameName="nav-item active dropdown">
//                           <Link to="#" classNameName="nav-link is-active">
//                             Home
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item dropdown">
//                           <Link to="#" classNameName="nav-link">
//                             APIs
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item dropdown">
//                           <Link to="#" classNameName="nav-link">
//                             Contact us
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item dropdown">
//                           <Link to="#" classNameName="nav-link">
//                             Legal
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item dropdown">
//                           <Link to="#" classNameName="nav-link">
//                             Privacy policy
//                           </Link>
//                         </li>
//                         <li classNameName="nav-item dropdown">
//                           <Link
//                             to="#"
//                             classNameName="nav-link"
//                             title="View jobs at CVS Health - Digital"
//                           >
//                             We are hiring!!
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </footer>
//           </div>
//         </div>
//         <div classNameName="button_tour" aria-label="Tour" button="">
//           <Link to="#">Tour</Link>
//         </div>
//         <div classNameName="content_feedback_linknew bottom">
//           <Link
//             to="#"
//             classNameName="use-ajax"
//             data-dialog-type="modal"
//             data-dialog-options='{"dialogClass":"token-tree-dialog","draggable":true,"width":"94%"}'
//             data-once="ajax"
//           >
//             Feedback
//           </Link>
//         </div>
//         <div classNameName="ui-front" style={{ display: "none" }} />
//         <div classNameName="visually-hidden" aria-live="polite" aria-busy="false" />
//         <div classNameName="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" />
//         <div>
//           <div
//             classNameName="grecaptcha-badge"
//             style={{
//               width: 256,
//               height: 60,
//               display: "block",
//               transition: "right 0.3s ease 0s",
//               position: "fixed",
//               bottom: 14,
//               right: "-186px",
//               boxShadow: "gray 0px 0px 5px",
//               borderRadius: 2,
//               overflow: "hidden",
//             }}
//           >
//             <div classNameName="grecaptcha-logo">
//               <iframe
//                 title="reCAPTCHA"
//                 width={256}
//                 height={60}
//                 role="presentation"
//                 name="a-c6fmryj9jukb"
//                 frameBorder={0}
//                 scrolling="no"
//               />
//             </div>
//             <div classNameName="grecaptcha-error" />
//             <textarea
//               name="g-recaptcha-response"
//               classNameName="g-recaptcha-response"
//               style={{
//                 width: 250,
//                 height: 40,
//                 border: "1px solid rgb(193, 193, 193)",
//                 margin: "10px 25px",
//                 padding: 0,
//                 resize: "none",
//                 display: "none",
//               }}
//               defaultValue={""}
//             />
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default ccc;

import React from "react";
import logo from "./cssFolder/Images/logo-main.png";

import i1 from "./cssFolder/Images/i1.jpg";
import i2 from "./cssFolder/Images/i2.jpg";
import i3 from "./cssFolder/Images/i3.jpg";
import i4 from "./cssFolder/Images/i4.jpg";
import i5 from "./cssFolder/Images/i5.jpg";
import bannerpart from "./cssFolder/Images/bannerpart.png";
import place2 from "./cssFolder/Images/place 2.png";
import place1 from "./cssFolder/Images/place1.png";
import place3 from "./cssFolder/Images/place3.png";
import clipart1 from "./cssFolder/Images/75h@2x_0.png";
import clipart2 from "./cssFolder/Images/75h@2x.png";
import clipart from "./cssFolder/Images/clipart.png";
import datecalendar from "./cssFolder/Images/date-calendar.png";
import Header2 from "../components/Header/Header2";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "./jj.css";
import "../style/page.css";

const Startpage = () => {
  if (typeof window !== "undefined") {
    require("@fortawesome/fontawesome-free/css/all.css");
    require("bootstrap-css-only/css/bootstrap.min.css");
    require("mdbreact/dist/css/mdb.css");
    require("bootstrap/dist/css/bootstrap.min.css");
    require("react-toastify/dist/ReactToastify.css");
  }

  return (
    <div style={{ marginTop: "120px" }}>
      <Header2 />
      <main className="main">
        <div className="page-layout-sidebar-bottom">
          <div className="page-layout-sidebar-bottom__top">
            <div className="page__content">
              {/* Section 1 */}

              <div
                className="paragraph hero hero--default bg-light card position-relative d-flex flex-column min-width-0 word-wrap-break-word bg-white bg-clip-border-box border rounded-2 p-4 text-center"
                // style={{ border: "4px solid red" }}
              >
                <div className="hero__wrapper">
                  <div className="hero__content py-9 py-md-0">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6  d-flex justify-content-center align-items-center">
                          <div className="">
                            <h1 className="hero__title  text-center text-md-left">
                              Build with us
                            </h1>
                            <div className="field field--hidden hero__field-text mt-3">
                              <p className="text-left">
                                Connect with a suite of &nbsp;services to help
                                <br />
                                put your users on the path to better health.
                              </p>
                            </div>

                            <div className="hero__buttons mt-5 text-center text-md-left">
                              <div className="buttons buttons--hero">
                                <span className="buttons__item">
                                  <Link className="btn btn-primary" to="#">
                                    View Products
                                  </Link>
                                </span>

                                <span className="buttons__item">
                                  <Link
                                    className="btn btn-primary"
                                    to="https://login.sastoo.com/realms/sastoo/protocol/openid-connect/registrations?client_id=drupal&response_type=code&scope=openid%20email%20profile&redirect_uri=http%3A//userlogin.sastoo.com/openid-connect/generic"
                                  >
                                    Get Started
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="field field--hidden hero__field-media">
                            <div className="media media--type-image media--view-mode-hero-squared">
                              <div className="p-2 field field--hidden image__field-media-image">
                                <img
                                  loading="lazy"
                                  src={bannerpart}
                                  //src="https://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1623282033815-40b05d96c903?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                  //width="713"
                                  //height="668"
                                  alt="hero"
                                  typeof="foaf:Image"
                                  className="img-fluid"
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

              {/* Section 2  */}
              {/* <div
                className="paragraph card-group--default bg-light"
                style={{ border: "4px solid red" }}
              >
                <div className="container">
                  <h2 className="card-group__title text-center pb-1 p-sm-4">
                    Get started with the APIs in minutes
                  </h2>

                  <div className="row">
                    <div className="col-md-4 mb-4 ">
                      <div className="card has-hover-shadow p-1 paragraph card--default border border-danger rounded-4">
                        <Link to="#">
                          <div className="card-block d-flex border-dark text-dark">
                            <div className="card-body">
                              <h3 className="card-title">Get Started</h3>
                              <div className="field field--hidden card__field-text">
                                <p>
                                  Creating an account is easy. Spend less time
                                  registering and more time building.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div style={{ border: "4px solid green" }}>
                                <div className="field field--hidden card__field-image">
                                  <div className="media media--type-image media--view-mode-default">
                                    <div className="field field--hidden image__field-media-image">
                                      <img
                                        loading="lazy"
                                        src={clipart}
                                        width="300"
                                        height="300"
                                        alt="get started"
                                        typeof="foaf:Image"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer bg-white">
                            <span className="text-orange-color">
                              Create account
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-4 mb-4 ">
                      <div className="card has-hover-shadow paragraph card--default p-1">
                        <Link to="#">
                          <div className="card-block d-flex border-dark text-dark">
                            <div className="card-body">
                              <h3 className="card-title">Products</h3>
                              <div className="field field--hidden card__field-text">
                                <p>
                                  Learn about our APIs and try them out for
                                  yourself Learn about our APIs and try them out
                                  for yourself.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div style={{ border: "4px solid green" }}>
                                <div className="field field--hidden card__field-image">
                                  <div className="media media--type-image media--view-mode-default">
                                    <div className="field field--hidden image__field-media-image">
                                      <img
                                        loading="lazy"
                                        src={clipart2}
                                        width="350"
                                        height="300"
                                        alt="get started"
                                        typeof="foaf:Image"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-dark bg-white">
                            <span className="text-orange-color">All APIs</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-4 mb-4">
                      <div className="card has-hover-shadow paragraph card--default p-1">
                        <Link to="#">
                          <div className="card-block d-flex border-dark text-dark">
                            <div className="card-body">
                              <h3 className="card-title">Learn more</h3>
                              <div className="field field--hidden card__field-text">
                                <p>
                                  Need help? Check out our support resources to
                                  realize the full potential of your ideas.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div style={{ border: "4px solid green" }}>
                                <div className="field field--hidden card__field-image">
                                  <div className="media media--type-image media--view-mode-default">
                                    <div className="field field--hidden image__field-media-image">
                                      <img
                                        loading="lazy"
                                        src={clipart1}
                                        width="350"
                                        height="350"
                                        alt="get started"
                                        typeof="foaf:Image"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-dark bg-white">
                            <span className="text-orange-color">Register</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="card-group__buttons text-center pt-5">
                    <div className="buttons buttons--card-group"></div>
                  </div>
                </div>
              </div> */}

              <div
                className="paragraph card-group--default d-flex flex-wrap position-relative"
                // style={{ border: "4px solid red" }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-50  darkBlue-background-color"
                  style={{ zIndex: -1 }}
                ></div>
                {/* <div
                  className="container-fluid position-absolute top-0 start-0 w-100 h-50 bg-green"
                  style={{ border: "10px solid green" }}
                ></div> */}
                <div className="container  ">
                  <h2 className="card-group__title text-center pb-1 p-sm-4 text-white">
                    Get started with the APIs in minutes
                  </h2>

                  <div className="row d-flex flex-wrap justify-content-center ">
                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4">
                      <div
                        className="card has-hover-shadow p-1 paragraph card--default 
                       rounded-4 d-flex"
                      >
                        <Link to="/swaggerui">
                          <div className="card-block d-flex  border-dark text-dark">
                            <div className="card-body">
                              <h3 className="card-title">Products</h3>
                              <div className="field field--hidden card__field-text">
                                <p>
                                  Learn about our APIs and try them out for
                                  yourself Learn about our APIs and try them out
                                  for yourself.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                              <div
                              // style={{ border: "4px solid green" }}
                              >
                                <div className="field field--hidden card__field-image">
                                  <div className="media media--type-image media--view-mode-default">
                                    <div className="field field--hidden image__field-media-image">
                                      <img
                                        loading="lazy"
                                        src={clipart1}
                                        width="350"
                                        height="300"
                                        alt="get started"
                                        typeof="foaf:Image"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-dark bg-white">
                            <span className="text-orange-color">Swagger</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-5 col-xl-4 mb-4">
                      <div className="card has-hover-shadow paragraph card--default p-1">
                        <Link to="#">
                          <div className="card-block d-flex border-dark text-dark">
                            <div className="card-body">
                              <h3 className="card-title">Products</h3>
                              <div className="field field--hidden card__field-text">
                                <p>
                                  Learn about our APIs and try them out for
                                  yourself Learn about our APIs and try them out
                                  for yourself.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div
                              // style={{ border: "4px solid green" }}
                              >
                                <div className="field field--hidden card__field-image">
                                  <div className="media media--type-image media--view-mode-default">
                                    <div className="field field--hidden image__field-media-image">
                                      <img
                                        loading="lazy"
                                        src={clipart}
                                        width="350"
                                        height="300"
                                        alt="get started"
                                        typeof="foaf:Image"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-dark bg-white">
                            <span className="text-orange-color">All APIs</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="col-md-8 col-lg-5 col-xl-4 mb-4">
                      <div className="card has-hover-shadow paragraph card--default p-1">
                        <Link to="#">
                          <div className="card-block d-flex border-dark text-dark">
                            <div className="card-body">
                              <h3 className="card-title">Products</h3>
                              <div className="field field--hidden card__field-text">
                                <p>
                                  Learn about our APIs and try them out for
                                  yourself Learn about our APIs and try them out
                                  for yourself.
                                </p>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                              <div
                              // style={{ border: "4px solid green" }}
                              >
                                <div className="field field--hidden card__field-image">
                                  <div className="media media--type-image media--view-mode-default">
                                    <div className="field field--hidden image__field-media-image">
                                      <img
                                        loading="lazy"
                                        src={clipart2}
                                        width="350"
                                        height="300"
                                        alt="get started"
                                        typeof="foaf:Image"
                                        className="img-fluid"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-footer text-dark bg-white">
                            <span className="text-orange-color">All APIs</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-group__buttons text-center pt-5">
                    <div className="buttons buttons--card-group"></div>
                  </div>
                </div>
              </div>

              {/* Section3  */}
              <div
                className="paragraph callout-group callout-group--default text-center pt-7 pb-5"
                // style={{ border: "4px solid red" }}
              >
                <div className="container">
                  <h2 className="callout-group__title text-center p-4 pb-5">
                    How it works
                  </h2>

                  <div className="field field--hidden callout-group__intro">
                    <p>Getting started is easy. Follow these 3 steps.</p>
                  </div>

                  <div className="row">
                    <div className="col-md">
                      <div className="paragraph callout callout--default">
                        <h1>1</h1>
                        <h3 className="callout__title">Create an account</h3>

                        <div className="field field--hidden callout__field-text">
                          <p>
                            We'll get you set up and ready to go in minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="paragraph callout callout--default">
                        <h1>2</h1>
                        <h3 className="callout__title">Experiment</h3>

                        <div className="field field--hidden callout__field-text">
                          <p>
                            Test your code in our sandbox. Use our support
                            resources to bring your ideas to life.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="paragraph callout callout--default">
                        <h1>3</h1>
                        <h3 className="callout__title">Get access</h3>

                        <div className="field field--hidden callout__field-text">
                          <p>
                            Connect to our live services and start making your
                            users'&nbsp;lives a little healthier!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="callout-group__buttons text-center pt-5">
                    <div className="buttons buttons--callout-group">
                      <span className="buttons__item">
                        <Link
                          className="btn btn-primary"
                          to="https://login.sastoo.com/realms/sastoo/protocol/openid-connect/registrations?client_id=drupal&response_type=code&scope=openid%20email%20profile&redirect_uri=http%3A//userlogin.sastoo.com/openid-connect/generic"
                        >
                          Get Started
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* section4  */}
              <div
                className="paragraph views-block views-block--default  "
                //style={{ border: "4px solid red" }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-50 darkBlue-background-color"
                  style={{ zIndex: -1 }}
                ></div>

                <div className="container">
                  <h3 className="card-group__title text-center m-4 pt-4">
                    <div className="d-none d-sm-block text-white">
                      We offer a variety of APIs, including the following
                      categories:
                    </div>
                  </h3>

                  {/* <div className=" pt-5 d-flex  justify-content-center align-items-center  border border-danger">
                    <div className="container d-flex flex-wrap justify-content-center align-items-center">
                      <div className="  col-md-4 col-lg-5 col-xl-4 mb-4">
                        <div
                          className="card text-center has-hover-shadow   
                       rounded-4 d-flex"
                        >
                          <div className="field-content mb-3  justify-content-center ">
                            <img
                              loading="lazy"
                              src={place2}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3 "
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <span className="field-content">
                              Authentication
                            </span>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing ">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication  APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className=" col-md-4 col-lg-5 col-xl-4 mb-4">
                        <div
                          className="card text-center has-hover-shadow p-1 paragraph card--default 
                       rounded-4 d-flex"
                        >
                          <div className="field-content mb-3  justify-content-center ">
                            <img
                              loading="lazy"
                              src={place2}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3 "
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <span className="field-content">
                              Authentication
                            </span>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing ">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication  APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-4 col-lg-5 col-xl-4 mb-4">
                        <div
                          className="card text-center has-hover-shadow p-1 paragraph card--default 
                       rounded-4 d-flex"
                        >
                          <div className="field-content mb-3  justify-content-center ">
                            <img
                              loading="lazy"
                              src={place2}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3 "
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <span className="field-content">
                              Authentication
                            </span>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing ">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication  APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className=" col-md-4 col-lg-5 col-xl-4 mb-4">
                        <div
                          className="card text-center has-hover-shadow p-1 paragraph card--default 
                       rounded-4 d-flex"
                        >
                          <div className="field-content mb-3  justify-content-center ">
                            <img
                              loading="lazy"
                              src={place2}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3 "
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <span className="field-content">
                              Authentication
                            </span>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing ">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication  APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="pt-5 d-flex justify-content-center align-items-center">
                    <div className="container d-flex flex-wrap  align-items-center">
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="card text-center has-hover-shadow rounded-4 d-flex">
                          <div className="field-content mb-3 justify-content-center">
                            <img
                              loading="lazy"
                              src={i2}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3"
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <div
                              className="field-content bold-text"
                              style={{ fontWeight: "bold", fontSize: "1.5em" }}
                            >
                              Authentication
                            </div>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing py-3 ">
                            <span className="field-content ">
                              <Link
                                to="#"
                                label="Authentication APIs"
                                className="text-orange-color  "
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="card text-center has-hover-shadow rounded-4 d-flex">
                          <div className="field-content mb-3 justify-content-center">
                            <img
                              loading="lazy"
                              src={i3}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3"
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <div
                              className="field-content bold-text"
                              style={{ fontWeight: "bold", fontSize: "1.5em" }}
                            >
                              Authentication
                            </div>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing py-3">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="card text-center has-hover-shadow rounded-4 d-flex">
                          <div className="field-content mb-3 justify-content-center">
                            <img
                              loading="lazy"
                              src={i4}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3"
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <div
                              className="field-content bold-text"
                              style={{ fontWeight: "bold", fontSize: "1.5em" }}
                            >
                              Authentication
                            </div>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing py-3">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div className="card text-center has-hover-shadow rounded-4 d-flex">
                          <div className="field-content mb-3 justify-content-center">
                            <img
                              loading="lazy"
                              src={i5}
                              width="165"
                              height="123"
                              alt="authentication"
                              typeof="foaf:Image"
                              className="img-fluid mx-auto p-3"
                            />
                          </div>

                          <div className="views-field views-field-name py-2">
                            <div
                              className="field-content bold-text"
                              style={{ fontWeight: "bold", fontSize: "1.5em" }}
                            >
                              Authentication
                            </div>
                          </div>
                          <div className="views-field views-field-description__value py-2">
                            <span className="field-content">
                              Authentication APIs
                            </span>
                          </div>
                          <div className="views-field views-field-nothing py-3">
                            <span className="field-content">
                              <Link
                                to="#"
                                label="Authentication APIs"
                                className="text-orange-color"
                              >
                                Authentication APIs
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="p-3 d-flex justify-content-center align-items-center border border-danger">
                    <div className="container">
                      <div className="p-1 row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col ">
                          <div className="card m-2 text-center has-hover-shadow rounded-4 d-flex">
                            <div className="field-content mb-3 justify-content-center">
                              <img
                                loading="lazy"
                                src={place2}
                                width="165"
                                height="123"
                                alt="authentication"
                                typeof="foaf:Image"
                                className="img-fluid mx-auto p-3"
                              />
                            </div>

                            <div className="views-field views-field-name py-2">
                              <span className="field-content">
                                Authentication
                              </span>
                            </div>
                            <div className="views-field views-field-description__value py-2">
                              <span className="field-content">
                                Authentication APIs
                              </span>
                            </div>
                            <div className="views-field views-field-nothing">
                              <span className="field-content">
                                <Link
                                  to="#"
                                  label="Authentication APIs"
                                  className="text-orange-color"
                                >
                                  Authentication APIs
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card m-2 text-center has-hover-shadow rounded-4 d-flex">
                            <div className="field-content mb-3 justify-content-center">
                              <img
                                loading="lazy"
                                src={place2}
                                width="165"
                                height="123"
                                alt="authentication"
                                typeof="foaf:Image"
                                className="img-fluid mx-auto p-3"
                              />
                            </div>

                            <div className="views-field views-field-name py-2">
                              <span className="field-content">
                                Authentication
                              </span>
                            </div>
                            <div className="views-field views-field-description__value py-2">
                              <span className="field-content">
                                Authentication APIs
                              </span>
                            </div>
                            <div className="views-field views-field-nothing">
                              <span className="field-content">
                                <Link
                                  to="#"
                                  label="Authentication APIs"
                                  className="text-orange-color"
                                >
                                  Authentication APIs
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card m-2 text-center has-hover-shadow rounded-4 d-flex">
                            <div className="field-content mb-3 justify-content-center">
                              <img
                                loading="lazy"
                                src={place2}
                                width="165"
                                height="123"
                                alt="authentication"
                                typeof="foaf:Image"
                                className="img-fluid mx-auto p-3"
                              />
                            </div>

                            <div className="views-field views-field-name py-2">
                              <span className="field-content">
                                Authentication
                              </span>
                            </div>
                            <div className="views-field views-field-description__value py-2">
                              <span className="field-content">
                                Authentication APIs
                              </span>
                            </div>
                            <div className="views-field views-field-nothing">
                              <span className="field-content">
                                <Link
                                  to="#"
                                  label="Authentication APIs"
                                  className="text-orange-color"
                                >
                                  Authentication APIs
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card m-2 text-center has-hover-shadow rounded-4 d-flex">
                            <div className="field-content mb-3 justify-content-center">
                              <img
                                loading="lazy"
                                src={place2}
                                width="165"
                                height="123"
                                alt="authentication"
                                typeof="foaf:Image"
                                className="img-fluid mx-auto p-3"
                              />
                            </div>

                            <div className="views-field views-field-name py-2">
                              <span className="field-content">
                                Authentication
                              </span>
                            </div>
                            <div className="views-field views-field-description__value py-2">
                              <span className="field-content">
                                Authentication APIs
                              </span>
                            </div>
                            <div className="views-field views-field-nothing">
                              <span className="field-content">
                                <Link
                                  to="#"
                                  label="Authentication APIs"
                                  className="text-orange-color"
                                >
                                  Authentication APIs
                                </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="d-flex justify-content-center py-4">
                  <div className="more-link btn btn-primary">
                    View All Categories
                  </div>
                </div>
              </div>

              {/* section 5  */}
              <div
                className="p-5 paragraph views-block views-block--default "
                //orange-background-color
                //style={{ border: "4px solid red" }}
              >
                <div className="container ">
                  <h2 className="card-group__title text-center ">
                    <div className="field field--hidden views-block__field-intro-text pt-4">
                      Featured APIs
                    </div>
                  </h2>
                  <div className="card-group__description text-center">
                    <div className="field field--hidden views-block__field-intro-description">
                      <p>Some of our most popular APIs.</p>
                    </div>
                  </div>
                  <div className="card-deck pt-5 d-flex justify-content-center align-items-center  ">
                    <div className="field field--hidden views-block__field-views-block">
                      <div className="views-element-container block block--views-block--apigee-api-catalog-block-1">
                        <div>
                          <div className="api-catalaog view view-apigee-api-catalog view-apigee-api-catalog--block-1 view-id-apigee_api_catalog view-display-id-block_1 js-view-dom-id-079de87bb1bf9450f644262160185ecd690fac07a711cc3384d04c8df9d64124">
                            <div className="view-header"></div>

                            <div className="view-content d-flex flex-wrap row justify-content-center">
                              <div className="p-3  col-lg-4 col-md-6 col-sm-12 api-item views-row justify-content-center mb-4">
                                <div
                                  className="item-body px-4  bg-white rounded"
                                  style={{
                                    //minHeight: "230px",
                                    boxShadow:
                                      "4px 4px 4px 4px rgba(0.3, 0.3, 0.3, 0.3)",
                                  }}
                                >
                                  <div className="item-image p-2">
                                    <img
                                      loading="lazy"
                                      src={i1}
                                      width="100"
                                      height="87"
                                      alt="verified"
                                      typeof="Image"
                                      className="img-fluid mx-auto"
                                    />
                                  </div>
                                  <div
                                    className="item-title py-3"
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "1.1em",
                                    }}
                                  >
                                    Covid19 Vaccine Availability
                                  </div>
                                  <div className="item-description p-2">
                                    The purpose of this API is to provide a near
                                    real-time inventory status of COVID19
                                    Vaccine inventory at CVS stores based on
                                    state and city.
                                  </div>
                                  <div className="item-footer d-flex justify-content-between   py-4 px-0">
                                    <div className="item-created">
                                      <span>Created </span>02/10/21
                                    </div>
                                    <div className="item-readmore">
                                      <Link
                                        to="#"
                                        aria-label="more details about Covid19 Vaccine Availability text-orange-color "
                                        className="text-orange-color"
                                      >
                                        More Details
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="p-3 col-lg-4 col-md-6 col-sm-12 api-item views-row justify-content-center mb-4">
                                <div
                                  className="item-body px-4  bg-white rounded"
                                  style={{
                                    // minHeight: "230px",
                                    boxShadow:
                                      "4px 4px 4px 4px rgba(0.3, 0.3, 0.3, 0.3)",
                                  }}
                                >
                                  <div className="item-image p-2">
                                    <img
                                      loading="lazy"
                                      src={i5}
                                      width="100"
                                      height="87"
                                      alt="verified"
                                      typeof="Image"
                                      className="img-fluid mx-auto"
                                    />
                                  </div>
                                  <div
                                    className="item-title py-3"
                                    style={{
                                      fontWeight: "bold",
                                      fontSize: "1.1em",
                                    }}
                                  >
                                    Covid19 Vaccine Availability
                                  </div>
                                  <div className="item-description p-2">
                                    The purpose of this API is to provide a near
                                    real-time inventory status of COVID19
                                    Vaccine inventory at CVS stores based on
                                    state and city.
                                  </div>
                                  <div className="item-footer d-flex justify-content-between   py-4 px-0">
                                    <div className="item-created">
                                      <span>Created </span>02/10/21
                                    </div>
                                    <div className="item-readmore ">
                                      <Link
                                        className="text-orange-color"
                                        to="#"
                                        aria-label="more details about Covid19 Vaccine Availability  "
                                      >
                                        More Details
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex justify-content-center p-4 ">
                              <div className="more-link btn  bg-white ">
                                <Link to="#" className="text-orange-color">
                                  View all product APIs
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="position-absolute bottom-0 w-100 h-50 h-md-80 h-sm-80 orange-background-color"
                      style={{ zIndex: -4, marginTop: "20%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* section 6  */}
              <div
                className="paragraph cta cta--default py-6 orange-background-color"
                // style={{ border: "4px solid red" }}
              >
                <div className="container">
                  <div className="row d-md-flex align-items-md-center justify-content-center py-4">
                    <div className="row">
                      <div className="col-md d-flex align-items-center">
                        <h4 className="cta__title mb-0 mr-3 text-white">
                          Create, innovate and test new concepts.
                        </h4>
                        <div className="buttons buttons--cta">
                          <span className="buttons__item">
                            <Link
                              className="btn text-white "
                              style={{ border: "2px solid white" }}
                              to="#"
                            >
                              Sign up for free
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        className="page__footer"
        // style={{ border: "4px solid red" }}
      >
        <div className="footer pt-5 pb-5  ">
          <div className="container">
            <div className="d-md-flex footer-content justify-content-center ">
              <div className="block block--cvs-menu-footer">
                <ul className="nav">
                  <li className="nav-item active dropdown">
                    <Link to="#" className="nav-link is-active text-white">
                      Home<span className="mx-3">|</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="#" className="nav-link text-white">
                      APIs<span className="mx-3">|</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="#" className="nav-link text-white">
                      Contact us<span className="mx-3">|</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="#" className="nav-link text-white">
                      Legal<span className="mx-3">|</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="#" className="nav-link text-white">
                      Privacy policy<span className="mx-3">|</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link text-white"
                      title="View jobs at CVS Health - Digital"
                    >
                      We are hiring!!
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Startpage;
