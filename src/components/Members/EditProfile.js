import React from "react";
import Layout from "../Layout";
import MemberButton from "./MemberButton";

const EditProfile = () => {
  return (
    <Layout>
      <MemberButton />
      <div
        className="dialog-off-canvas-main-canvas"
        data-off-canvas-main-canvas=""
      >
        <div className="page user-edit">
          <div className="container">
            <h2>Edit Profile</h2>
            <header className="page__header">
              <div className="region region-header">
                <div
                  id="block-adminimal-theme-page-title--2"
                  className="block block-core block-page-title-block"
                >
                  <h1 className="js-quickedit-page-title page-title">
                    kpatel@starbucks.com
                  </h1>
                </div>
                <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=adminimal_theme_primary_local_tasks&args%5B1%5D=full&args%5B2%5D&token=3w6tD5gBLvpMvrRJQu4RJQdcYxhi3Ol7JBsSTj7VCMQ" />
              </div>
            </header>
          </div>
          <div className="layout-container container">
            <div className="region region-pre-content">
              <span data-big-pipe-placeholder-id="callback=Drupal%5Cblock%5CBlockViewBuilder%3A%3AlazyBuilder&args%5B0%5D=adminimal_theme_secondary_local_tasks&args%5B1%5D=full&args%5B2%5D&token=lT9AGO9V1MGL0nm4z-B8gbyqgwpQmh0kezQfsji3NQQ" />
            </div>
            <main className="page-content clearfix" role="main">
              <div className="visually-hidden">
                <a id="main-content" tabIndex={-1} />
              </div>
              <div className="region region-highlighted">
                <div data-drupal-messages-fallback="" className="hidden" />
                <span data-big-pipe-placeholder-id="callback=Drupal%5CCore%5CRender%5CElement%5CStatusMessages%3A%3ArenderMessages&args%5B0%5D&token=_HAdUpwWmet0TOTe2PSiJuMntExoshbm1kh2wQzzzAA" />
              </div>
              <div className="help" />
              <div className="region region-content">
                <div
                  id="block-adminimal-theme-content"
                  className="block block-system block-system-main-block"
                >
                  <form
                    className="user-form"
                    data-drupal-selector="user-form"
                    encType="multipart/form-data"
                    action="/user/5945/edit"
                    method="post"
                    id="user-form"
                    acceptCharset="UTF-8"
                  >
                    <div
                      className="field--type-string field--name-first-name field--widget-string-textfield js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-first-name-wrapper"
                      id="edit-first-name-wrapper"
                    >
                      <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-first-name-0-value form-item-first-name-0-value">
                        <label
                          htmlFor="edit-first-name-0-value"
                          className="js-form-required form-required"
                        >
                          First name
                        </label>
                        <input
                          className="js-text-full text-full form-text required"
                          data-drupal-selector="edit-first-name-0-value"
                          aria-describedby="edit-first-name-0-value--description"
                          type="text"
                          id="edit-first-name-0-value"
                          name="first_name[0][value]"
                          defaultValue="Kushal"
                          size={60}
                          maxLength={64}
                          placeholder=""
                          required="required"
                          aria-required="true"
                        />
                        <div
                          id="edit-first-name-0-value--description"
                          className="description"
                        >
                          Your first name.
                        </div>
                      </div>
                    </div>
                    <input
                      autoComplete="off"
                      data-drupal-selector="form-aqx5y3-q8ulm6kbqqvo1quxeptcwycofzktaxmc8-u0"
                      type="hidden"
                      name="form_build_id"
                      defaultValue="form-AQX5y3_Q8ulM6KbQQVo1quXEpTCWycOfzkTaXmC8_u0"
                    />
                    <input
                      data-drupal-selector="edit-user-form-form-token"
                      type="hidden"
                      name="form_token"
                      defaultValue="VnXGdM81l3ApexQq8azDcroFnPqheag7P9iXQ9dw2vE"
                    />
                    <input
                      data-drupal-selector="edit-user-form"
                      type="hidden"
                      name="form_id"
                      defaultValue="user_form"
                    />
                    <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-user-5945 form-item-user-5945">
                      <label htmlFor="edit-user-5945">
                        Your current logout threshold
                      </label>
                      <input
                        data-drupal-selector="edit-user-5945"
                        aria-describedby="edit-user-5945--description"
                        type="text"
                        id="edit-user-5945"
                        name="user_5945"
                        defaultValue=""
                        size={8}
                        maxLength={128}
                        className="form-text"
                      />
                      <div
                        id="edit-user-5945--description"
                        className="description"
                      >
                        The length of inactivity time, in seconds, before
                        automated log out. Must be between 60 and 172800
                        seconds.
                      </div>
                    </div>
                    <div
                      className="field--type-string field--name-last-name field--widget-string-textfield js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-last-name-wrapper"
                      id="edit-last-name-wrapper"
                    >
                      <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-last-name-0-value form-item-last-name-0-value">
                        <label
                          htmlFor="edit-last-name-0-value"
                          className="js-form-required form-required"
                        >
                          Last name
                        </label>
                        <input
                          className="js-text-full text-full form-text required"
                          data-drupal-selector="edit-last-name-0-value"
                          aria-describedby="edit-last-name-0-value--description"
                          type="text"
                          id="edit-last-name-0-value"
                          name="last_name[0][value]"
                          defaultValue="Patel"
                          size={60}
                          maxLength={64}
                          placeholder=""
                          required="required"
                          aria-required="true"
                        />
                        <div
                          id="edit-last-name-0-value--description"
                          className="description"
                        >
                          Your last name.
                        </div>
                      </div>
                    </div>
                    <div
                      data-drupal-selector="edit-account"
                      id="edit-account"
                      className="js-form-wrapper form-wrapper"
                    >
                      <div className="js-form-item form-item js-form-type-email form-type-email js-form-item-mail form-item-mail">
                        <label
                          htmlFor="edit-mail"
                          className="js-form-required form-required"
                        >
                          Email address
                        </label>
                        <input
                          autoComplete="off"
                          data-drupal-selector="edit-mail"
                          aria-describedby="edit-mail--description"
                          type="email"
                          id="edit-mail"
                          name="mail"
                          defaultValue="kpatel@starbucks.com"
                          size={60}
                          maxLength={254}
                          className="form-email required"
                          required="required"
                          aria-required="true"
                        />
                        <div
                          id="edit-mail--description"
                          className="description"
                        >
                          A valid email address. All emails from the system will
                          be sent to this address. The email address is not made
                          public and will only be used if you wish to receive a
                          new password or wish to receive certain news or
                          notifications by email.
                        </div>
                      </div>
                      <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-name form-item-name">
                        <label
                          htmlFor="edit-name"
                          className="js-form-required form-required"
                        >
                          Username
                        </label>
                        <input
                          className="username form-text required"
                          autoCorrect="off"
                          autoCapitalize="none"
                          spellCheck="false"
                          autoComplete="off"
                          data-drupal-selector="edit-name"
                          aria-describedby="edit-name--description"
                          type="text"
                          id="edit-name"
                          name="name"
                          defaultValue="kpatel@starbucks.com"
                          size={60}
                          maxLength={60}
                          required="required"
                          aria-required="true"
                        />
                        <div
                          id="edit-name--description"
                          className="description"
                        >
                          Several special characters are allowed, including
                          space, period (.), hyphen (-), apostrophe ('),
                          underscore (_), and the @ sign.
                        </div>
                      </div>
                      <div
                        id="edit-pass"
                        className="js-form-item form-item js-form-type-password-confirm form-type-password-confirm js-form-item-pass form-item-pass form-no-label"
                      >
                        <div className="js-form-item form-item js-form-type-password form-type-password js-form-item-pass-pass1 form-item-pass-pass1">
                          <label htmlFor="edit-pass-pass1">Password</label>
                          <input
                            className="password-field js-password-field form-text"
                            autoComplete="new-password"
                            data-drupal-selector="edit-pass-pass1"
                            type="password"
                            id="edit-pass-pass1"
                            name="pass[pass1]"
                            size={25}
                            maxLength={128}
                          />
                        </div>
                        <div className="js-form-item form-item js-form-type-password form-type-password js-form-item-pass-pass2 form-item-pass-pass2">
                          <label htmlFor="edit-pass-pass2">
                            Confirm password
                          </label>
                          <input
                            className="password-confirm js-password-confirm form-text"
                            autoComplete="new-password"
                            data-drupal-selector="edit-pass-pass2"
                            type="password"
                            id="edit-pass-pass2"
                            name="pass[pass2]"
                            size={25}
                            maxLength={128}
                          />
                        </div>
                        <div
                          id="edit-pass--description"
                          className="description"
                        >
                          To change the current user password, enter the new
                          password in both fields.
                        </div>
                      </div>
                      <fieldset
                        data-drupal-selector="edit-status"
                        id="edit-status--wrapper"
                        className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper"
                      >
                        <legend>
                          <span className="fieldset-legend">Status</span>
                        </legend>
                        <div className="fieldset-wrapper">
                          <div id="edit-status" className="form-radios">
                            <div className="js-form-item form-item js-form-type-radio form-type-radio js-form-item-status form-item-status">
                              <input
                                data-drupal-selector="edit-status-0"
                                type="radio"
                                id="edit-status-0"
                                name="status"
                                defaultValue={0}
                                className="form-radio"
                              />
                              <label htmlFor="edit-status-0" className="option">
                                Blocked
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-radio form-type-radio js-form-item-status form-item-status">
                              <input
                                data-drupal-selector="edit-status-1"
                                type="radio"
                                id="edit-status-1"
                                name="status"
                                defaultValue={1}
                                defaultChecked="checked"
                                className="form-radio"
                              />
                              <label htmlFor="edit-status-1" className="option">
                                Active
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset
                        data-drupal-selector="edit-roles"
                        id="edit-roles--wrapper"
                        className="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper"
                      >
                        <legend>
                          <span className="fieldset-legend">Roles</span>
                        </legend>
                        <div className="fieldset-wrapper">
                          <div id="edit-roles" className="form-checkboxes">
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-authenticated form-item-roles-authenticated form-disabled">
                              <input
                                data-drupal-selector="edit-roles-authenticated"
                                disabled="disabled"
                                type="checkbox"
                                id="edit-roles-authenticated"
                                name="roles[authenticated]"
                                defaultValue="authenticated"
                                defaultChecked="checked"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-authenticated"
                                className="option"
                              >
                                authenticated user
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-administrator form-item-roles-administrator">
                              <input
                                data-drupal-selector="edit-roles-administrator"
                                type="checkbox"
                                id="edit-roles-administrator"
                                name="roles[administrator]"
                                defaultValue="administrator"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-administrator"
                                className="option"
                              >
                                administrator
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-team-administrator form-item-roles-team-administrator">
                              <input
                                data-drupal-selector="edit-roles-team-administrator"
                                type="checkbox"
                                id="edit-roles-team-administrator"
                                name="roles[team_administrator]"
                                defaultValue="team_administrator"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-team-administrator"
                                className="option"
                              >
                                team administrator
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-technical-account-manager form-item-roles-technical-account-manager">
                              <input
                                data-drupal-selector="edit-roles-technical-account-manager"
                                type="checkbox"
                                id="edit-roles-technical-account-manager"
                                name="roles[technical_account_manager]"
                                defaultValue="technical_account_manager"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-technical-account-manager"
                                className="option"
                              >
                                technical account manager
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-product-manager form-item-roles-product-manager">
                              <input
                                data-drupal-selector="edit-roles-product-manager"
                                type="checkbox"
                                id="edit-roles-product-manager"
                                name="roles[product_manager]"
                                defaultValue="product_manager"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-product-manager"
                                className="option"
                              >
                                product manager
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-api-developer form-item-roles-api-developer">
                              <input
                                data-drupal-selector="edit-roles-api-developer"
                                type="checkbox"
                                id="edit-roles-api-developer"
                                name="roles[api_developer]"
                                defaultValue="api_developer"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-api-developer"
                                className="option"
                              >
                                API developer
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-app-developer form-item-roles-app-developer">
                              <input
                                data-drupal-selector="edit-roles-app-developer"
                                type="checkbox"
                                id="edit-roles-app-developer"
                                name="roles[app_developer]"
                                defaultValue="app_developer"
                                defaultChecked="checked"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-app-developer"
                                className="option"
                              >
                                app developer
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-starbucks-viewer form-item-roles-starbucks-viewer">
                              <input
                                data-drupal-selector="edit-roles-starbucks-viewer"
                                type="checkbox"
                                id="edit-roles-starbucks-viewer"
                                name="roles[starbucks_viewer]"
                                defaultValue="starbucks_viewer"
                                defaultChecked="checked"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-starbucks-viewer"
                                className="option"
                              >
                                Starbucks Viewer
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-company-manager form-item-roles-company-manager">
                              <input
                                data-drupal-selector="edit-roles-company-manager"
                                type="checkbox"
                                id="edit-roles-company-manager"
                                name="roles[company_manager]"
                                defaultValue="company_manager"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-company-manager"
                                className="option"
                              >
                                company manager
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-content-editor form-item-roles-content-editor">
                              <input
                                data-drupal-selector="edit-roles-content-editor"
                                type="checkbox"
                                id="edit-roles-content-editor"
                                name="roles[content_editor]"
                                defaultValue="content_editor"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-content-editor"
                                className="option"
                              >
                                content editor
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-platform-owner form-item-roles-platform-owner">
                              <input
                                data-drupal-selector="edit-roles-platform-owner"
                                type="checkbox"
                                id="edit-roles-platform-owner"
                                name="roles[platform_owner]"
                                defaultValue="platform_owner"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-platform-owner"
                                className="option"
                              >
                                platform owner
                              </label>
                            </div>
                            <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-roles-view-extensive-teams-list form-item-roles-view-extensive-teams-list">
                              <input
                                data-drupal-selector="edit-roles-view-extensive-teams-list"
                                type="checkbox"
                                id="edit-roles-view-extensive-teams-list"
                                name="roles[view_extensive_teams_list]"
                                defaultValue="view_extensive_teams_list"
                                className="form-checkbox"
                              />
                              <label
                                htmlFor="edit-roles-view-extensive-teams-list"
                                className="option"
                              >
                                View extensive teams list
                              </label>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div
                      data-drupal-selector="edit-language"
                      id="edit-language"
                      className="js-form-wrapper form-wrapper"
                    />
                    <div
                      className="field--type-string field--name-field-first-name field--widget-string-textfield js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-field-first-name-wrapper"
                      id="edit-field-first-name-wrapper"
                    >
                      <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-field-first-name-0-value form-item-field-first-name-0-value">
                        <label
                          htmlFor="edit-field-first-name-0-value"
                          className="js-form-required form-required"
                        >
                          First Name
                        </label>
                        <input
                          className="js-text-full text-full form-text required"
                          data-drupal-selector="edit-field-first-name-0-value"
                          type="text"
                          id="edit-field-first-name-0-value"
                          name="field_first_name[0][value]"
                          defaultValue="Kushal"
                          size={60}
                          maxLength={255}
                          placeholder=""
                          required="required"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div
                      className="field--type-string field--name-field-last-name field--widget-string-textfield js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-field-last-name-wrapper"
                      id="edit-field-last-name-wrapper"
                    >
                      <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-field-last-name-0-value form-item-field-last-name-0-value">
                        <label
                          htmlFor="edit-field-last-name-0-value"
                          className="js-form-required form-required"
                        >
                          Last Name
                        </label>
                        <input
                          className="js-text-full text-full form-text required"
                          data-drupal-selector="edit-field-last-name-0-value"
                          type="text"
                          id="edit-field-last-name-0-value"
                          name="field_last_name[0][value]"
                          defaultValue="Patel"
                          size={60}
                          maxLength={255}
                          placeholder=""
                          required="required"
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <details
                      data-drupal-selector="edit-contact"
                      id="edit-contact"
                      className="js-form-wrapper form-wrapper seven-details"
                      open="open"
                    >
                      <summary
                        role="button"
                        aria-controls="edit-contact"
                        aria-expanded="true"
                        aria-pressed="true"
                        className="seven-details__summary"
                      >
                        <span>Contact settings</span>
                      </summary>
                      <div className="seven-details__wrapper details-wrapper">
                        <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-contact form-item-contact">
                          <input
                            data-drupal-selector="edit-contact"
                            aria-describedby="edit-contact--2--description"
                            type="checkbox"
                            id="edit-contact--2"
                            name="contact"
                            defaultValue={1}
                            defaultChecked="checked"
                            className="form-checkbox"
                          />
                          <label htmlFor="edit-contact--2" className="option">
                            Personal contact form
                          </label>
                          <div
                            id="edit-contact--2--description"
                            className="description"
                          >
                            Allow other users to contact you via a personal
                            contact form which keeps your email address hidden.
                            Note that some privileged users such as site
                            administrators are still able to contact you even if
                            you choose to disable this feature.
                          </div>
                        </div>
                      </div>
                    </details>
                    <details
                      data-drupal-selector="edit-timezone"
                      id="edit-timezone"
                      className="js-form-wrapper form-wrapper seven-details"
                      open="open"
                    >
                      <summary
                        role="button"
                        aria-controls="edit-timezone"
                        aria-expanded="true"
                        aria-pressed="true"
                        className="seven-details__summary"
                      >
                        <span>Locale settings</span>
                      </summary>
                      <div className="seven-details__wrapper details-wrapper">
                        <div className="js-form-item form-item js-form-type-select form-type-select js-form-item-timezone form-item-timezone">
                          <label htmlFor="edit-timezone--2">Time zone</label>
                          <select
                            data-drupal-selector="edit-timezone"
                            aria-describedby="edit-timezone--2--description"
                            id="edit-timezone--2"
                            name="timezone"
                            className="form-select"
                          >
                            <option value="">- None selected -</option>
                            <optgroup label="Africa">
                              <option value="Africa/Abidjan">Abidjan</option>
                              <option value="Africa/Accra">Accra</option>
                              <option value="Africa/Addis_Ababa">
                                Addis Ababa
                              </option>
                              <option value="Africa/Algiers">Algiers</option>
                              <option value="Africa/Asmara">Asmara</option>
                              <option value="Africa/Bamako">Bamako</option>
                              <option value="Africa/Bangui">Bangui</option>
                              <option value="Africa/Banjul">Banjul</option>
                              <option value="Africa/Bissau">Bissau</option>
                              <option value="Africa/Blantyre">Blantyre</option>
                              <option value="Africa/Brazzaville">
                                Brazzaville
                              </option>
                              <option value="Africa/Bujumbura">
                                Bujumbura
                              </option>
                              <option value="Africa/Cairo">Cairo</option>
                              <option value="Africa/Casablanca">
                                Casablanca
                              </option>
                              <option value="Africa/Ceuta">Ceuta</option>
                              <option value="Africa/Conakry">Conakry</option>
                              <option value="Africa/Dakar">Dakar</option>
                              <option value="Africa/Dar_es_Salaam">
                                Dar es Salaam
                              </option>
                              <option value="Africa/Djibouti">Djibouti</option>
                              <option value="Africa/Douala">Douala</option>
                              <option value="Africa/El_Aaiun">El Aaiun</option>
                              <option value="Africa/Freetown">Freetown</option>
                              <option value="Africa/Gaborone">Gaborone</option>
                              <option value="Africa/Harare">Harare</option>
                              <option value="Africa/Johannesburg">
                                Johannesburg
                              </option>
                              <option value="Africa/Juba">Juba</option>
                              <option value="Africa/Kampala">Kampala</option>
                              <option value="Africa/Khartoum">Khartoum</option>
                              <option value="Africa/Kigali">Kigali</option>
                              <option value="Africa/Kinshasa">Kinshasa</option>
                              <option value="Africa/Lagos">Lagos</option>
                              <option value="Africa/Libreville">
                                Libreville
                              </option>
                              <option value="Africa/Lome">Lome</option>
                              <option value="Africa/Luanda">Luanda</option>
                              <option value="Africa/Lubumbashi">
                                Lubumbashi
                              </option>
                              <option value="Africa/Lusaka">Lusaka</option>
                              <option value="Africa/Malabo">Malabo</option>
                              <option value="Africa/Maputo">Maputo</option>
                              <option value="Africa/Maseru">Maseru</option>
                              <option value="Africa/Mbabane">Mbabane</option>
                              <option value="Africa/Mogadishu">
                                Mogadishu
                              </option>
                              <option value="Africa/Monrovia">Monrovia</option>
                              <option value="Africa/Nairobi">Nairobi</option>
                              <option value="Africa/Ndjamena">Ndjamena</option>
                              <option value="Africa/Niamey">Niamey</option>
                              <option value="Africa/Nouakchott">
                                Nouakchott
                              </option>
                              <option value="Africa/Ouagadougou">
                                Ouagadougou
                              </option>
                              <option value="Africa/Porto-Novo">
                                Porto-Novo
                              </option>
                              <option value="Africa/Sao_Tome">Sao Tome</option>
                              <option value="Africa/Tripoli">Tripoli</option>
                              <option value="Africa/Tunis">Tunis</option>
                              <option value="Africa/Windhoek">Windhoek</option>
                            </optgroup>
                            <optgroup label="America">
                              <option value="America/Adak">Adak</option>
                              <option value="America/Anchorage">
                                Anchorage
                              </option>
                              <option value="America/Anguilla">Anguilla</option>
                              <option value="America/Antigua">Antigua</option>
                              <option value="America/Araguaina">
                                Araguaina
                              </option>
                              <option value="America/Aruba">Aruba</option>
                              <option value="America/Asuncion">Asuncion</option>
                              <option value="America/Atikokan">Atikokan</option>
                              <option value="America/Bahia">Bahia</option>
                              <option value="America/Bahia_Banderas">
                                Bahia Banderas
                              </option>
                              <option value="America/Barbados">Barbados</option>
                              <option value="America/Belem">Belem</option>
                              <option value="America/Belize">Belize</option>
                              <option value="America/North_Dakota/Beulah">
                                Beulah (North Dakota)
                              </option>
                              <option value="America/Blanc-Sablon">
                                Blanc-Sablon
                              </option>
                              <option value="America/Boa_Vista">
                                Boa Vista
                              </option>
                              <option value="America/Bogota">Bogota</option>
                              <option value="America/Boise">Boise</option>
                              <option value="America/Argentina/Buenos_Aires">
                                Buenos Aires (Argentina)
                              </option>
                              <option value="America/Cambridge_Bay">
                                Cambridge Bay
                              </option>
                              <option value="America/Campo_Grande">
                                Campo Grande
                              </option>
                              <option value="America/Cancun">Cancun</option>
                              <option value="America/Caracas">Caracas</option>
                              <option value="America/Argentina/Catamarca">
                                Catamarca (Argentina)
                              </option>
                              <option value="America/Cayenne">Cayenne</option>
                              <option value="America/Cayman">Cayman</option>
                              <option value="America/North_Dakota/Center">
                                Center (North Dakota)
                              </option>
                              <option value="America/Chicago">Chicago</option>
                              <option value="America/Chihuahua">
                                Chihuahua
                              </option>
                              <option value="America/Argentina/Cordoba">
                                Cordoba (Argentina)
                              </option>
                              <option value="America/Costa_Rica">
                                Costa Rica
                              </option>
                              <option value="America/Creston">Creston</option>
                              <option value="America/Cuiaba">Cuiaba</option>
                              <option value="America/Curacao">Curacao</option>
                              <option value="America/Danmarkshavn">
                                Danmarkshavn
                              </option>
                              <option value="America/Dawson">Dawson</option>
                              <option value="America/Dawson_Creek">
                                Dawson Creek
                              </option>
                              <option value="America/Denver">Denver</option>
                              <option value="America/Detroit">Detroit</option>
                              <option value="America/Dominica">Dominica</option>
                              <option value="America/Edmonton">Edmonton</option>
                              <option value="America/Eirunepe">Eirunepe</option>
                              <option value="America/El_Salvador">
                                El Salvador
                              </option>
                              <option value="America/Fort_Nelson">
                                Fort Nelson
                              </option>
                              <option value="America/Fortaleza">
                                Fortaleza
                              </option>
                              <option value="America/Glace_Bay">
                                Glace Bay
                              </option>
                              <option value="America/Goose_Bay">
                                Goose Bay
                              </option>
                              <option value="America/Grand_Turk">
                                Grand Turk
                              </option>
                              <option value="America/Grenada">Grenada</option>
                              <option value="America/Guadeloupe">
                                Guadeloupe
                              </option>
                              <option value="America/Guatemala">
                                Guatemala
                              </option>
                              <option value="America/Guayaquil">
                                Guayaquil
                              </option>
                              <option value="America/Guyana">Guyana</option>
                              <option value="America/Halifax">Halifax</option>
                              <option value="America/Havana">Havana</option>
                              <option value="America/Hermosillo">
                                Hermosillo
                              </option>
                              <option value="America/Indiana/Indianapolis">
                                Indianapolis (Indiana)
                              </option>
                              <option value="America/Inuvik">Inuvik</option>
                              <option value="America/Iqaluit">Iqaluit</option>
                              <option value="America/Jamaica">Jamaica</option>
                              <option value="America/Argentina/Jujuy">
                                Jujuy (Argentina)
                              </option>
                              <option value="America/Juneau">Juneau</option>
                              <option value="America/Indiana/Knox">
                                Knox (Indiana)
                              </option>
                              <option value="America/Kralendijk">
                                Kralendijk
                              </option>
                              <option value="America/La_Paz">La Paz</option>
                              <option value="America/Argentina/La_Rioja">
                                La Rioja (Argentina)
                              </option>
                              <option value="America/Lima">Lima</option>
                              <option
                                value="America/Los_Angeles"
                                selected="selected"
                              >
                                Los Angeles
                              </option>
                              <option value="America/Kentucky/Louisville">
                                Louisville (Kentucky)
                              </option>
                              <option value="America/Lower_Princes">
                                Lower Princes
                              </option>
                              <option value="America/Maceio">Maceio</option>
                              <option value="America/Managua">Managua</option>
                              <option value="America/Manaus">Manaus</option>
                              <option value="America/Indiana/Marengo">
                                Marengo (Indiana)
                              </option>
                              <option value="America/Marigot">Marigot</option>
                              <option value="America/Martinique">
                                Martinique
                              </option>
                              <option value="America/Matamoros">
                                Matamoros
                              </option>
                              <option value="America/Mazatlan">Mazatlan</option>
                              <option value="America/Argentina/Mendoza">
                                Mendoza (Argentina)
                              </option>
                              <option value="America/Menominee">
                                Menominee
                              </option>
                              <option value="America/Merida">Merida</option>
                              <option value="America/Metlakatla">
                                Metlakatla
                              </option>
                              <option value="America/Mexico_City">
                                Mexico City
                              </option>
                              <option value="America/Miquelon">Miquelon</option>
                              <option value="America/Moncton">Moncton</option>
                              <option value="America/Monterrey">
                                Monterrey
                              </option>
                              <option value="America/Montevideo">
                                Montevideo
                              </option>
                              <option value="America/Kentucky/Monticello">
                                Monticello (Kentucky)
                              </option>
                              <option value="America/Montserrat">
                                Montserrat
                              </option>
                              <option value="America/Nassau">Nassau</option>
                              <option value="America/North_Dakota/New_Salem">
                                New Salem (North Dakota)
                              </option>
                              <option value="America/New_York">New York</option>
                              <option value="America/Nipigon">Nipigon</option>
                              <option value="America/Nome">Nome</option>
                              <option value="America/Noronha">Noronha</option>
                              <option value="America/Nuuk">Nuuk</option>
                              <option value="America/Ojinaga">Ojinaga</option>
                              <option value="America/Panama">Panama</option>
                              <option value="America/Pangnirtung">
                                Pangnirtung
                              </option>
                              <option value="America/Paramaribo">
                                Paramaribo
                              </option>
                              <option value="America/Indiana/Petersburg">
                                Petersburg (Indiana)
                              </option>
                              <option value="America/Phoenix">Phoenix</option>
                              <option value="America/Port_of_Spain">
                                Port of Spain
                              </option>
                              <option value="America/Port-au-Prince">
                                Port-au-Prince
                              </option>
                              <option value="America/Porto_Velho">
                                Porto Velho
                              </option>
                              <option value="America/Puerto_Rico">
                                Puerto Rico
                              </option>
                              <option value="America/Punta_Arenas">
                                Punta Arenas
                              </option>
                              <option value="America/Rainy_River">
                                Rainy River
                              </option>
                              <option value="America/Rankin_Inlet">
                                Rankin Inlet
                              </option>
                              <option value="America/Recife">Recife</option>
                              <option value="America/Regina">Regina</option>
                              <option value="America/Resolute">Resolute</option>
                              <option value="America/Rio_Branco">
                                Rio Branco
                              </option>
                              <option value="America/Argentina/Rio_Gallegos">
                                Rio Gallegos (Argentina)
                              </option>
                              <option value="America/Argentina/Salta">
                                Salta (Argentina)
                              </option>
                              <option value="America/Argentina/San_Juan">
                                San Juan (Argentina)
                              </option>
                              <option value="America/Argentina/San_Luis">
                                San Luis (Argentina)
                              </option>
                              <option value="America/Santarem">Santarem</option>
                              <option value="America/Santiago">Santiago</option>
                              <option value="America/Santo_Domingo">
                                Santo Domingo
                              </option>
                              <option value="America/Sao_Paulo">
                                Sao Paulo
                              </option>
                              <option value="America/Scoresbysund">
                                Scoresbysund
                              </option>
                              <option value="America/Sitka">Sitka</option>
                              <option value="America/St_Barthelemy">
                                St Barthelemy
                              </option>
                              <option value="America/St_Johns">St Johns</option>
                              <option value="America/St_Kitts">St Kitts</option>
                              <option value="America/St_Lucia">St Lucia</option>
                              <option value="America/St_Thomas">
                                St Thomas
                              </option>
                              <option value="America/St_Vincent">
                                St Vincent
                              </option>
                              <option value="America/Swift_Current">
                                Swift Current
                              </option>
                              <option value="America/Tegucigalpa">
                                Tegucigalpa
                              </option>
                              <option value="America/Indiana/Tell_City">
                                Tell City (Indiana)
                              </option>
                              <option value="America/Thule">Thule</option>
                              <option value="America/Thunder_Bay">
                                Thunder Bay
                              </option>
                              <option value="America/Tijuana">Tijuana</option>
                              <option value="America/Toronto">Toronto</option>
                              <option value="America/Tortola">Tortola</option>
                              <option value="America/Argentina/Tucuman">
                                Tucuman (Argentina)
                              </option>
                              <option value="America/Argentina/Ushuaia">
                                Ushuaia (Argentina)
                              </option>
                              <option value="America/Vancouver">
                                Vancouver
                              </option>
                              <option value="America/Indiana/Vevay">
                                Vevay (Indiana)
                              </option>
                              <option value="America/Indiana/Vincennes">
                                Vincennes (Indiana)
                              </option>
                              <option value="America/Whitehorse">
                                Whitehorse
                              </option>
                              <option value="America/Indiana/Winamac">
                                Winamac (Indiana)
                              </option>
                              <option value="America/Winnipeg">Winnipeg</option>
                              <option value="America/Yakutat">Yakutat</option>
                              <option value="America/Yellowknife">
                                Yellowknife
                              </option>
                            </optgroup>
                            <optgroup label="Antarctica">
                              <option value="Antarctica/Casey">Casey</option>
                              <option value="Antarctica/Davis">Davis</option>
                              <option value="Antarctica/DumontDUrville">
                                DumontDUrville
                              </option>
                              <option value="Antarctica/Macquarie">
                                Macquarie
                              </option>
                              <option value="Antarctica/Mawson">Mawson</option>
                              <option value="Antarctica/McMurdo">
                                McMurdo
                              </option>
                              <option value="Antarctica/Palmer">Palmer</option>
                              <option value="Antarctica/Rothera">
                                Rothera
                              </option>
                              <option value="Antarctica/Syowa">Syowa</option>
                              <option value="Antarctica/Troll">Troll</option>
                              <option value="Antarctica/Vostok">Vostok</option>
                            </optgroup>
                            <optgroup label="Arctic">
                              <option value="Arctic/Longyearbyen">
                                Longyearbyen
                              </option>
                            </optgroup>
                            <optgroup label="Asia">
                              <option value="Asia/Aden">Aden</option>
                              <option value="Asia/Almaty">Almaty</option>
                              <option value="Asia/Amman">Amman</option>
                              <option value="Asia/Anadyr">Anadyr</option>
                              <option value="Asia/Aqtau">Aqtau</option>
                              <option value="Asia/Aqtobe">Aqtobe</option>
                              <option value="Asia/Ashgabat">Ashgabat</option>
                              <option value="Asia/Atyrau">Atyrau</option>
                              <option value="Asia/Baghdad">Baghdad</option>
                              <option value="Asia/Bahrain">Bahrain</option>
                              <option value="Asia/Baku">Baku</option>
                              <option value="Asia/Bangkok">Bangkok</option>
                              <option value="Asia/Barnaul">Barnaul</option>
                              <option value="Asia/Beirut">Beirut</option>
                              <option value="Asia/Bishkek">Bishkek</option>
                              <option value="Asia/Brunei">Brunei</option>
                              <option value="Asia/Chita">Chita</option>
                              <option value="Asia/Choibalsan">
                                Choibalsan
                              </option>
                              <option value="Asia/Colombo">Colombo</option>
                              <option value="Asia/Damascus">Damascus</option>
                              <option value="Asia/Dhaka">Dhaka</option>
                              <option value="Asia/Dili">Dili</option>
                              <option value="Asia/Dubai">Dubai</option>
                              <option value="Asia/Dushanbe">Dushanbe</option>
                              <option value="Asia/Famagusta">Famagusta</option>
                              <option value="Asia/Gaza">Gaza</option>
                              <option value="Asia/Hebron">Hebron</option>
                              <option value="Asia/Ho_Chi_Minh">
                                Ho Chi Minh
                              </option>
                              <option value="Asia/Hong_Kong">Hong Kong</option>
                              <option value="Asia/Hovd">Hovd</option>
                              <option value="Asia/Irkutsk">Irkutsk</option>
                              <option value="Asia/Jakarta">Jakarta</option>
                              <option value="Asia/Jayapura">Jayapura</option>
                              <option value="Asia/Jerusalem">Jerusalem</option>
                              <option value="Asia/Kabul">Kabul</option>
                              <option value="Asia/Kamchatka">Kamchatka</option>
                              <option value="Asia/Karachi">Karachi</option>
                              <option value="Asia/Kathmandu">Kathmandu</option>
                              <option value="Asia/Khandyga">Khandyga</option>
                              <option value="Asia/Kolkata">Kolkata</option>
                              <option value="Asia/Krasnoyarsk">
                                Krasnoyarsk
                              </option>
                              <option value="Asia/Kuala_Lumpur">
                                Kuala Lumpur
                              </option>
                              <option value="Asia/Kuching">Kuching</option>
                              <option value="Asia/Kuwait">Kuwait</option>
                              <option value="Asia/Macau">Macau</option>
                              <option value="Asia/Magadan">Magadan</option>
                              <option value="Asia/Makassar">Makassar</option>
                              <option value="Asia/Manila">Manila</option>
                              <option value="Asia/Muscat">Muscat</option>
                              <option value="Asia/Nicosia">Nicosia</option>
                              <option value="Asia/Novokuznetsk">
                                Novokuznetsk
                              </option>
                              <option value="Asia/Novosibirsk">
                                Novosibirsk
                              </option>
                              <option value="Asia/Omsk">Omsk</option>
                              <option value="Asia/Oral">Oral</option>
                              <option value="Asia/Phnom_Penh">
                                Phnom Penh
                              </option>
                              <option value="Asia/Pontianak">Pontianak</option>
                              <option value="Asia/Pyongyang">Pyongyang</option>
                              <option value="Asia/Qatar">Qatar</option>
                              <option value="Asia/Qostanay">Qostanay</option>
                              <option value="Asia/Qyzylorda">Qyzylorda</option>
                              <option value="Asia/Riyadh">Riyadh</option>
                              <option value="Asia/Sakhalin">Sakhalin</option>
                              <option value="Asia/Samarkand">Samarkand</option>
                              <option value="Asia/Seoul">Seoul</option>
                              <option value="Asia/Shanghai">Shanghai</option>
                              <option value="Asia/Singapore">Singapore</option>
                              <option value="Asia/Srednekolymsk">
                                Srednekolymsk
                              </option>
                              <option value="Asia/Taipei">Taipei</option>
                              <option value="Asia/Tashkent">Tashkent</option>
                              <option value="Asia/Tbilisi">Tbilisi</option>
                              <option value="Asia/Tehran">Tehran</option>
                              <option value="Asia/Thimphu">Thimphu</option>
                              <option value="Asia/Tokyo">Tokyo</option>
                              <option value="Asia/Tomsk">Tomsk</option>
                              <option value="Asia/Ulaanbaatar">
                                Ulaanbaatar
                              </option>
                              <option value="Asia/Urumqi">Urumqi</option>
                              <option value="Asia/Ust-Nera">Ust-Nera</option>
                              <option value="Asia/Vientiane">Vientiane</option>
                              <option value="Asia/Vladivostok">
                                Vladivostok
                              </option>
                              <option value="Asia/Yakutsk">Yakutsk</option>
                              <option value="Asia/Yangon">Yangon</option>
                              <option value="Asia/Yekaterinburg">
                                Yekaterinburg
                              </option>
                              <option value="Asia/Yerevan">Yerevan</option>
                            </optgroup>
                            <optgroup label="Atlantic">
                              <option value="Atlantic/Azores">Azores</option>
                              <option value="Atlantic/Bermuda">Bermuda</option>
                              <option value="Atlantic/Canary">Canary</option>
                              <option value="Atlantic/Cape_Verde">
                                Cape Verde
                              </option>
                              <option value="Atlantic/Faroe">Faroe</option>
                              <option value="Atlantic/Madeira">Madeira</option>
                              <option value="Atlantic/Reykjavik">
                                Reykjavik
                              </option>
                              <option value="Atlantic/South_Georgia">
                                South Georgia
                              </option>
                              <option value="Atlantic/St_Helena">
                                St Helena
                              </option>
                              <option value="Atlantic/Stanley">Stanley</option>
                            </optgroup>
                            <optgroup label="Australia">
                              <option value="Australia/Adelaide">
                                Adelaide
                              </option>
                              <option value="Australia/Brisbane">
                                Brisbane
                              </option>
                              <option value="Australia/Broken_Hill">
                                Broken Hill
                              </option>
                              <option value="Australia/Darwin">Darwin</option>
                              <option value="Australia/Eucla">Eucla</option>
                              <option value="Australia/Hobart">Hobart</option>
                              <option value="Australia/Lindeman">
                                Lindeman
                              </option>
                              <option value="Australia/Lord_Howe">
                                Lord Howe
                              </option>
                              <option value="Australia/Melbourne">
                                Melbourne
                              </option>
                              <option value="Australia/Perth">Perth</option>
                              <option value="Australia/Sydney">Sydney</option>
                            </optgroup>
                            <optgroup label="Europe">
                              <option value="Europe/Amsterdam">
                                Amsterdam
                              </option>
                              <option value="Europe/Andorra">Andorra</option>
                              <option value="Europe/Astrakhan">
                                Astrakhan
                              </option>
                              <option value="Europe/Athens">Athens</option>
                              <option value="Europe/Belgrade">Belgrade</option>
                              <option value="Europe/Berlin">Berlin</option>
                              <option value="Europe/Bratislava">
                                Bratislava
                              </option>
                              <option value="Europe/Brussels">Brussels</option>
                              <option value="Europe/Bucharest">
                                Bucharest
                              </option>
                              <option value="Europe/Budapest">Budapest</option>
                              <option value="Europe/Busingen">Busingen</option>
                              <option value="Europe/Chisinau">Chisinau</option>
                              <option value="Europe/Copenhagen">
                                Copenhagen
                              </option>
                              <option value="Europe/Dublin">Dublin</option>
                              <option value="Europe/Gibraltar">
                                Gibraltar
                              </option>
                              <option value="Europe/Guernsey">Guernsey</option>
                              <option value="Europe/Helsinki">Helsinki</option>
                              <option value="Europe/Isle_of_Man">
                                Isle of Man
                              </option>
                              <option value="Europe/Istanbul">Istanbul</option>
                              <option value="Europe/Jersey">Jersey</option>
                              <option value="Europe/Kaliningrad">
                                Kaliningrad
                              </option>
                              <option value="Europe/Kiev">Kiev</option>
                              <option value="Europe/Kirov">Kirov</option>
                              <option value="Europe/Lisbon">Lisbon</option>
                              <option value="Europe/Ljubljana">
                                Ljubljana
                              </option>
                              <option value="Europe/London">London</option>
                              <option value="Europe/Luxembourg">
                                Luxembourg
                              </option>
                              <option value="Europe/Madrid">Madrid</option>
                              <option value="Europe/Malta">Malta</option>
                              <option value="Europe/Mariehamn">
                                Mariehamn
                              </option>
                              <option value="Europe/Minsk">Minsk</option>
                              <option value="Europe/Monaco">Monaco</option>
                              <option value="Europe/Moscow">Moscow</option>
                              <option value="Europe/Oslo">Oslo</option>
                              <option value="Europe/Paris">Paris</option>
                              <option value="Europe/Podgorica">
                                Podgorica
                              </option>
                              <option value="Europe/Prague">Prague</option>
                              <option value="Europe/Riga">Riga</option>
                              <option value="Europe/Rome">Rome</option>
                              <option value="Europe/Samara">Samara</option>
                              <option value="Europe/San_Marino">
                                San Marino
                              </option>
                              <option value="Europe/Sarajevo">Sarajevo</option>
                              <option value="Europe/Saratov">Saratov</option>
                              <option value="Europe/Simferopol">
                                Simferopol
                              </option>
                              <option value="Europe/Skopje">Skopje</option>
                              <option value="Europe/Sofia">Sofia</option>
                              <option value="Europe/Stockholm">
                                Stockholm
                              </option>
                              <option value="Europe/Tallinn">Tallinn</option>
                              <option value="Europe/Tirane">Tirane</option>
                              <option value="Europe/Ulyanovsk">
                                Ulyanovsk
                              </option>
                              <option value="Europe/Uzhgorod">Uzhgorod</option>
                              <option value="Europe/Vaduz">Vaduz</option>
                              <option value="Europe/Vatican">Vatican</option>
                              <option value="Europe/Vienna">Vienna</option>
                              <option value="Europe/Vilnius">Vilnius</option>
                              <option value="Europe/Volgograd">
                                Volgograd
                              </option>
                              <option value="Europe/Warsaw">Warsaw</option>
                              <option value="Europe/Zagreb">Zagreb</option>
                              <option value="Europe/Zaporozhye">
                                Zaporozhye
                              </option>
                              <option value="Europe/Zurich">Zurich</option>
                            </optgroup>
                            <optgroup label="Indian">
                              <option value="Indian/Antananarivo">
                                Antananarivo
                              </option>
                              <option value="Indian/Chagos">Chagos</option>
                              <option value="Indian/Christmas">
                                Christmas
                              </option>
                              <option value="Indian/Cocos">Cocos</option>
                              <option value="Indian/Comoro">Comoro</option>
                              <option value="Indian/Kerguelen">
                                Kerguelen
                              </option>
                              <option value="Indian/Mahe">Mahe</option>
                              <option value="Indian/Maldives">Maldives</option>
                              <option value="Indian/Mauritius">
                                Mauritius
                              </option>
                              <option value="Indian/Mayotte">Mayotte</option>
                              <option value="Indian/Reunion">Reunion</option>
                            </optgroup>
                            <optgroup label="Pacific">
                              <option value="Pacific/Apia">Apia</option>
                              <option value="Pacific/Auckland">Auckland</option>
                              <option value="Pacific/Bougainville">
                                Bougainville
                              </option>
                              <option value="Pacific/Chatham">Chatham</option>
                              <option value="Pacific/Chuuk">Chuuk</option>
                              <option value="Pacific/Easter">Easter</option>
                              <option value="Pacific/Efate">Efate</option>
                              <option value="Pacific/Fakaofo">Fakaofo</option>
                              <option value="Pacific/Fiji">Fiji</option>
                              <option value="Pacific/Funafuti">Funafuti</option>
                              <option value="Pacific/Galapagos">
                                Galapagos
                              </option>
                              <option value="Pacific/Gambier">Gambier</option>
                              <option value="Pacific/Guadalcanal">
                                Guadalcanal
                              </option>
                              <option value="Pacific/Guam">Guam</option>
                              <option value="Pacific/Honolulu">Honolulu</option>
                              <option value="Pacific/Kanton">Kanton</option>
                              <option value="Pacific/Kiritimati">
                                Kiritimati
                              </option>
                              <option value="Pacific/Kosrae">Kosrae</option>
                              <option value="Pacific/Kwajalein">
                                Kwajalein
                              </option>
                              <option value="Pacific/Majuro">Majuro</option>
                              <option value="Pacific/Marquesas">
                                Marquesas
                              </option>
                              <option value="Pacific/Midway">Midway</option>
                              <option value="Pacific/Nauru">Nauru</option>
                              <option value="Pacific/Niue">Niue</option>
                              <option value="Pacific/Norfolk">Norfolk</option>
                              <option value="Pacific/Noumea">Noumea</option>
                              <option value="Pacific/Pago_Pago">
                                Pago Pago
                              </option>
                              <option value="Pacific/Palau">Palau</option>
                              <option value="Pacific/Pitcairn">Pitcairn</option>
                              <option value="Pacific/Pohnpei">Pohnpei</option>
                              <option value="Pacific/Port_Moresby">
                                Port Moresby
                              </option>
                              <option value="Pacific/Rarotonga">
                                Rarotonga
                              </option>
                              <option value="Pacific/Saipan">Saipan</option>
                              <option value="Pacific/Tahiti">Tahiti</option>
                              <option value="Pacific/Tarawa">Tarawa</option>
                              <option value="Pacific/Tongatapu">
                                Tongatapu
                              </option>
                              <option value="Pacific/Wake">Wake</option>
                              <option value="Pacific/Wallis">Wallis</option>
                            </optgroup>
                            <option value="UTC">UTC</option>
                          </select>
                          <div
                            id="edit-timezone--2--description"
                            className="description"
                          >
                            Select the desired local time and time zone. Dates
                            and times throughout this site will be displayed
                            using this time zone.
                          </div>
                        </div>
                      </div>
                    </details>
                    <div
                      className="field--type-path field--name-path field--widget-path js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-path-wrapper"
                      id="edit-path-wrapper"
                    >
                      <div className="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-path-0-pathauto form-item-path-0-pathauto">
                        <input
                          data-drupal-selector="edit-path-0-pathauto"
                          aria-describedby="edit-path-0-pathauto--description"
                          type="checkbox"
                          id="edit-path-0-pathauto"
                          name="path[0][pathauto]"
                          defaultValue={1}
                          defaultChecked="checked"
                          className="form-checkbox"
                        />
                        <label
                          htmlFor="edit-path-0-pathauto"
                          className="option"
                        >
                          Generate automatic URL alias
                        </label>
                        <div
                          id="edit-path-0-pathauto--description"
                          className="description"
                        >
                          Uncheck this to create a custom alias below.
                          <a href="/admin/config/search/path/patterns">
                            Configure URL alias patterns.
                          </a>
                        </div>
                      </div>
                      <div className="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-path-0-alias form-item-path-0-alias">
                        <label htmlFor="edit-path-0-alias">URL alias</label>
                        <input
                          data-drupal-selector="edit-path-0-alias"
                          aria-describedby="edit-path-0-alias--description"
                          type="text"
                          id="edit-path-0-alias"
                          name="path[0][alias]"
                          defaultValue="/users/a4682443-39fd-47ea-85ce-6cbc8280215b-7"
                          size={60}
                          maxLength={255}
                          className="form-text"
                          data-drupal-states='{"disabled":{"input[name=\u0022path[0][pathauto]\u0022]":{"checked":true}}}'
                        />
                        <div
                          id="edit-path-0-alias--description"
                          className="description"
                        >
                          Specify an alternative path by which this data can be
                          accessed. For example, type "/about" when writing an
                          about page.
                        </div>
                      </div>
                    </div>
                    <div
                      className="field--type-image field--name-user-picture field--widget-image-image js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-user-picture-wrapper"
                      id="edit-user-picture-wrapper"
                    >
                      <div id="ajax-wrapper">
                        <div className="js-form-item form-item js-form-type-managed-file form-type-managed-file js-form-item-user-picture-0 form-item-user-picture-0">
                          <label
                            htmlFor="edit-user-picture-0-upload"
                            id="edit-user-picture-0--label"
                          >
                            Picture
                          </label>
                          <div className="image-widget js-form-managed-file form-managed-file clearfix">
                            <div className="image-widget-data">
                              <input
                                accept="image/*"
                                data-drupal-selector="edit-user-picture-0-upload"
                                type="file"
                                id="edit-user-picture-0-upload"
                                name="files[user_picture_0]"
                                size={22}
                                className="js-form-file form-file"
                              />
                              <input
                                className="js-hide button js-form-submit form-submit"
                                data-drupal-selector="edit-user-picture-0-upload-button"
                                formNoValidate="formnovalidate"
                                type="submit"
                                id="edit-user-picture-0-upload-button"
                                name="user_picture_0_upload_button"
                                defaultValue="Upload"
                              />
                              <input
                                data-drupal-selector="edit-user-picture-0-fids"
                                type="hidden"
                                name="user_picture[0][fids]"
                              />
                              <input
                                data-drupal-selector="edit-user-picture-0-display"
                                type="hidden"
                                name="user_picture[0][display]"
                                defaultValue={1}
                              />
                            </div>
                          </div>
                          <div
                            id="edit-user-picture-0--description"
                            className="description"
                          >
                            Your virtual face or picture.
                            <br />
                            One file only.
                            <br />
                            30 KB limit.
                            <br />
                            Allowed types: png gif jpg jpeg.
                            <br />
                            Images larger than <strong>85x85</strong> pixels
                            will be resized.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="field--type-entity-reference field--name-og-user-node1 field--widget-entity-reference-autocomplete js-form-wrapper form-wrapper"
                      data-drupal-selector="edit-og-user-node1-wrapper"
                      id="edit-og-user-node1-wrapper"
                    >
                      <div id="og-user-node1-add-more-wrapper">
                        <div
                          data-drupal-selector="edit-og-user-node1"
                          className="js-form-item form-item"
                        >
                          <table
                            id="og-user-node1-values"
                            className="field-multiple-table responsive-enabled"
                            data-striping={1}
                          >
                            <thead>
                              <tr>
                                <th colSpan={2} className="field-label">
                                  <h4 className="label">Group membership</h4>
                                </th>
                                <th>Order</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="draggable odd">
                                <td className="field-multiple-drag" />
                                <td>
                                  <div className="js-form-item form-item js-form-type-entity-autocomplete form-type-entity-autocomplete js-form-item-og-user-node1-0-target-id form-item-og-user-node1-0-target-id form-no-label">
                                    <label
                                      htmlFor="edit-og-user-node1-0-target-id"
                                      className="visually-hidden"
                                    >
                                      Group membership (value 1)
                                    </label>
                                    <input
                                      data-drupal-selector="edit-og-user-node1-0-target-id"
                                      className="form-autocomplete form-text"
                                      data-autocomplete-path="/entity_reference_autocomplete/node/default%3Anode/geFf3TLJrX_bZU9TNkzuTEvbUEcZ1WrRr1NyEF-2M6M"
                                      type="text"
                                      id="edit-og-user-node1-0-target-id"
                                      name="og_user_node1[0][target_id]"
                                      defaultValue=""
                                      size={60}
                                      maxLength={1024}
                                      placeholder=""
                                    />
                                  </div>
                                </td>
                                <td className="delta-order">
                                  <div className="js-form-item form-item js-form-type-select form-type-select js-form-item-og-user-node1-0--weight form-item-og-user-node1-0--weight form-no-label">
                                    <label
                                      htmlFor="edit-og-user-node1-0-weight"
                                      className="visually-hidden"
                                    >
                                      Weight for row 1
                                    </label>
                                    <select
                                      data-drupal-selector="edit-og-user-node1-0-weight"
                                      className="og_user_node1-delta-order form-select"
                                      id="edit-og-user-node1-0-weight"
                                      name="og_user_node1[0][_weight]"
                                    >
                                      <option value={0} selected="selected">
                                        0
                                      </option>
                                    </select>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="clearfix">
                            <input
                              className="field-add-more-submit button js-form-submit form-submit"
                              data-drupal-selector="edit-og-user-node1-add-more"
                              formNoValidate="formnovalidate"
                              type="submit"
                              id="edit-og-user-node1-add-more"
                              name="og_user_node1_add_more"
                              defaultValue="Add another item"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-drupal-selector="edit-actions"
                      className="form-actions js-form-wrapper form-wrapper"
                      id="edit-actions"
                    >
                      <button
                        data-drupal-selector="edit-submit"
                        type="submit"
                        id="edit-submit"
                        name="op"
                        defaultValue="Save"
                        className="button button--primary js-form-submit form-submit"
                      >
                        Save
                      </button>
                      <button
                        to="/members"
                        className="button button--danger"
                        data-drupal-selector="edit-delete"
                        id="edit-delete"
                        hrefLang="en"
                      >
                        Cancel account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditProfile;
