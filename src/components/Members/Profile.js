import React from "react";
import Layout from "../Layout";
import MemberButton from "./MemberButton";

const profile = () => {
  return (
    <Layout>
    <MemberButton/>
      <div
        id="toolbar-administration"
        role="group"
        aria-label="Site administration toolbar"
        className="toolbar"
      />
      <div
        className="dialog-off-canvas-main-canvas"
        data-off-canvas-main-canvas=""
      >
        <div className="page">
          <header className="page__header">
            <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=starbucks_tabs&args%5B1%5D=full&args%5B2%5D&token=MEkI12DtyJlNIxuOGvgD3VFvH_cZWONfyjuDDe873eY" />
          </header>
          <div className="page__content-above">
            <div className="container-fluid px-0">
              <div className="contextual-region block block--pagetitle bg-lighter py-4">
                <div
                  data-contextual-id="block:block=pagetitle:langcode=en"
                  data-contextual-token="JWbfFvQC8xC4unlMvQKgq1Qc29aLahBItOfax5aiGxo"
                />
                <div className="container">
                  <h1 className="js-quickedit-page-title page__title mb-0">
                    kpatel@starbucks.com
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <main className="main" role="main">
            <a id="main-content" tabIndex={-1} />
            <div className="page-layout-sidebar-default">
              <div className="container py-5">
                <div className="row">
                  <div className="page__content col-md">
                    <div data-drupal-messages-fallback="" className="hidden" />
                    <span data-big-pipe-placeholder-id="callback=Drupal%5CCore%5CRender%5CElement%5CStatusMessages%3A%3ArenderMessages&args%5B0%5D&token=_HAdUpwWmet0TOTe2PSiJuMntExoshbm1kh2wQzzzAA" />
                    <article
                      data-quickedit-entity-id="user/5945"
                      className="contextual-region user user--full"
                      typeof="schema:Person"
                      about="/users/a4682443-39fd-47ea-85ce-6cbc8280215b-7"
                    >
                      <h3>Profile Details</h3>
                      <div className="bg-lighter p-4 rounded-sm">
                        <div className="field field-display-name">
                          <div className="field__label">Name:</div>
                          <div>Kushal Patel</div>
                        </div>
                        <div className="field field-username">
                          <div className="field__label">Username:</div>
                          <div>kpatel@starbucks.com</div>
                        </div>
                        <div className="field field-email">
                          <div className="field__label">Email:</div>
                          <div>kpatel@starbucks.com</div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer footer-fixed-bottom">
            <div className="container">
              <div className="footer__wrapper">
                <div className="footer__links">
                  <ul className="footer__links-list">
                    <li>
                      <a href="/terms-use">Terms of Use</a>
                    </li>
                    <li>
                      <a href="mailto:APIGatewaySupport@starbucks.com">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__copyright">
                  <span className="copyright">
                    © 2022 Starbucks Corporation. All rights reserved
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default profile;
