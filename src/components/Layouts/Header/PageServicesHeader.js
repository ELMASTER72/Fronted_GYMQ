import React from 'react';

function PageServicesHeader() {
  return (
    <header className="entry-header">
      <h1 className="entry-title">
        Tienda
      </h1>
      <nav
        id="thebase-breadcrumbs"
        aria-label="Breadcrumbs"
        className="thebase-breadcrumbs"
      >
        <div className="thebase-breadcrumb-container">
          <span>
            <a
              href="/"
              itemprop="url"
              className="thebase-bc-home"
            >
              <span>Servicios</span>
            </a>
          </span>{' '}
          <span className="bc-delimiter">/</span>{' '}
          <span className="thebase-bread-current">
            Tienda
          </span>
        </div>
      </nav>
    </header>
  );
}

export default PageServicesHeader;