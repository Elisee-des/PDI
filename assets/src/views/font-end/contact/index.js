import React from "react";

const Contact = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="row margin-bottom-40">
            <div className="col-md-12">
              <div className="content-page">
                <div className="row">
                  <div className="col-md-9 col-sm-9">
                    <h2>Nous contacter</h2>
                    <p>
                      Veuillez remplire le formulaire pour nous laisser un
                      message
                    </p>
                    <form action="#" role="form">
                      <div className="form-group">
                        <label htmlFor="contacts-name">NOm</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contacts-name"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="contacts-email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="contacts-email"
                        ></input>
                      </div>
                      <div className="form-group">
                        <label htmlFor="contacts-message">Message</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          id="contacts-message"
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        <i className="icon-ok"></i> Envoyer
                      </button>
                      <button type="button" className="btn btn-default">
                        Annuler
                      </button>
                    </form>
                  </div>

                  <div className="col-md-3 col-sm-3 sidebar2">
                    <h2>Nos Contacts</h2>
                    <address>
                      <strong>Ouagadougou</strong>
                      <br />
                      (Burkina Faso)
                      <br />
                      Charles De Gaule <br />
                      <abbr title="Phone">Tel : </abbr> (226) 55490533
                      <br />
                    </address>
                    <address>
                      <strong>Email</strong>
                      <br />
                      <a href="mailto:info@email.com">
                        infomaformation@email.com
                      </a>
                      <br />
                    </address>
                    <ul className="social-icons margin-bottom-40">
                      <li>
                        <a
                          href="javascript:;"
                          data-original-title="facebook"
                          className="facebook"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          data-original-title="github"
                          className="github"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          data-original-title="Goole Plus"
                          className="googleplus"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          data-original-title="linkedin"
                          className="linkedin"
                        ></a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          data-original-title="rss"
                          className="rss"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
