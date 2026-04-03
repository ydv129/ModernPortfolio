import React from "react";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="Services" />
    </h2>
    <div className="row">
      <div className="columns" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-laptop-code"></i>
        <h3>
          <FormattedMessage id="design" defaultMessage="Web development" />
        </h3>
        <p>
          <FormattedMessage
            id="design-info"
            defaultMessage="End-to-end web development focused on responsive, fast, and scalable websites tailored to business goals."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-mobile-alt"></i>
        <h3>
          <FormattedMessage id="development" defaultMessage="App development" />
        </h3>
        <p>
          <FormattedMessage
            id="development-info"
            defaultMessage="Mobile app development with React Native using Expo, optimized for smooth performance on Android and iOS."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-rocket"></i>
        <h3>
          <FormattedMessage
            id="marketing"
            defaultMessage="Web performance optimization"
          />
        </h3>
        <p>
          <FormattedMessage
            id="marketing-info"
            defaultMessage="Optimization of loading speed, Core Web Vitals, and runtime performance for better user retention and SEO outcomes."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="500">
        <i className="fas fa-wrench"></i>
        <h3>
          <FormattedMessage id="maintenance" defaultMessage="Web maintenance" />
        </h3>
        <p>
          <FormattedMessage
            id="maintenance-info"
            defaultMessage="Complete maintenance of web pages to detect and solve errors, update content whether text, photos, web design elements, add new functions, etc."
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="600">
        <i className="fas fa-search"></i>
        <h3>
          <FormattedMessage id="seo" defaultMessage="Web positioning (SEO)" />
        </h3>
        <p>
          <FormattedMessage
            id="seo-info"
            defaultMessage="Web positioning through SEO, so your website appears in the main search results according to your business, both in Google, Bing, or other internet search engines"
          />
        </p>
      </div>
      <div className="columns" data-aos="fade-up" data-aos-delay="700">
        <i className="fas fa-tachometer-alt"></i>
        <h3>
          <FormattedMessage
            id="optimization"
            defaultMessage="Website optimization"
          />
        </h3>
        <p>
          <FormattedMessage
            id="optimization-info"
            defaultMessage="Complete optimization of your web page, improving loading speed, using optimized images, a good URL, to give a better experience to users who visit the website"
          />
        </p>
      </div>
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
