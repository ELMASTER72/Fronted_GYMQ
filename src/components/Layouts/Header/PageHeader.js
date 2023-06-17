import React from 'react';

function PageHeader() {
  return (
    <header className="entry-header">
      <h1 className="entry-title">
        Nosotros
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
              <span>Inicio</span>
            </a>
          </span>{' '}
          <span className="bc-delimiter">/</span>{' '}
          <span className="thebase-bread-current">
            Nosotros
          </span>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
