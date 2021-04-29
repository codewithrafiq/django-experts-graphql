import React from "react";
import "./AppDetailsTabs.css";

const AppDetailsTabs = () => {
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-app-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-app"
            type="button"
            role="tab"
            aria-controls="nav-app"
            aria-selected="true"
          >
            App
          </button>
          <button
            className="nav-link"
            id="nav-database-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-database"
            type="button"
            role="tab"
            aria-controls="nav-database"
            aria-selected="false"
          >
            Database
          </button>
          <button
            className="nav-link"
            id="nav-domain-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-domain"
            type="button"
            role="tab"
            aria-controls="nav-domain"
            aria-selected="false"
          >
            Domain
          </button>
          <button
            className="nav-link"
            id="nav-db-models-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-db-models"
            type="button"
            role="tab"
            aria-controls="nav-db-models"
            aria-selected="false"
          >
            DB Models
          </button>
          <button
            className="nav-link"
            id="nav-env-key-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-env-key"
            type="button"
            role="tab"
            aria-controls="nav-env-key"
            aria-selected="false"
          >
            ENV Key
          </button>
          <button
            className="nav-link"
            id="nav-queries-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-queries"
            type="button"
            role="tab"
            aria-controls="nav-queries"
            aria-selected="false"
          >
            Queries
          </button>
          <button
            className="nav-link"
            id="nav-mutations-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-mutations"
            type="button"
            role="tab"
            aria-controls="nav-mutations"
            aria-selected="false"
          >
            Mutations
          </button>
          <button
            className="nav-link"
            id="nav-access-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-access"
            type="button"
            role="tab"
            aria-controls="nav-access"
            aria-selected="false"
          >
            Access
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-app"
          role="tabpanel"
          aria-labelledby="nav-app-tab"
        >
          <form className="app-details-page-form">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="appNameInput"
                placeholder="App Name (auto check)"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="appURLInput"
                placeholder="App URL"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="countryInput"
                placeholder="Country"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="subscriptionInput"
                placeholder="Subscription"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="secretKeyInput"
                placeholder="Secret Key"
              />
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="nav-database"
          role="tabpanel"
          aria-labelledby="nav-database-tab"
        >
          <p>
            Morbi ultrices ligula ex, consequat porttitor enim sodales a. Donec
            molestie lectus orci, lobortis cursus dui lacinia a. Nullam a
            consectetur lectus. Quisque commodo varius nisl quis pellentesque.
            Morbi leo risus, blandit sed vulputate vitae, tristique in diam.
            Curabitur dictum vehicula est sed mattis. In aliquet eget tellus et
            pretium.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-domain"
          role="tabpanel"
          aria-labelledby="nav-domain-tab"
        >
          <p>
            Donec fermentum risus nulla, vehicula lobortis elit faucibus ut. Nam
            vel vehicula massa. Integer elementum lorem ut congue condimentum.
            Nam non nibh felis. Nunc aliquet tempus elit vel molestie.
            Pellentesque vulputate hendrerit diam, at venenatis nibh dapibus
            sed. Vestibulum et eleifend diam. Mauris placerat lorem tellus, vel
            efficitur mauris maximus sed. Nam ac tortor ac sem fermentum
            tristique. Morbi sagittis urna in risus placerat, non posuere dolor
            aliquam.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-db-models"
          role="tabpanel"
          aria-labelledby="nav-db-models"
        >
          <p>
            Etiam tempus felis tempor dolor pellentesque aliquet. Praesent
            semper odio augue, vitae elementum mauris ullamcorper nec. Nunc et
            sagittis sapien, in varius risus. Proin tempor id orci in ultrices.
            Aenean risus risus, porttitor quis bibendum quis, tristique vel
            tortor. Donec faucibus, velit quis venenatis finibus, nisi est
            dictum metus, quis sollicitudin purus massa vitae sapien. Morbi
            vitae finibus purus, nec volutpat mauris. Donec leo sem, tincidunt
            quis posuere eu, tincidunt ac enim. Praesent nec tristique tortor.
            Cras consequat laoreet metus.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-env-key"
          role="tabpanel"
          aria-labelledby="nav-env-key"
        >
          <p>
            Duis at justo consequat, volutpat metus ut, efficitur quam. Cras sed
            mollis nibh. Maecenas volutpat dolor sit amet lobortis tempus.
            Aenean sed sapien vel mauris accumsan pharetra ac at diam. Morbi a
            vestibulum justo, et aliquet neque. Vestibulum nisl mi, molestie sed
            tortor sit amet, ultrices aliquam ipsum. Sed venenatis consequat
            metus vel blandit. In in turpis non turpis cursus egestas aliquam ac
            sapien. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Etiam eu auctor libero, sit amet
            vehicula elit. Duis dignissim varius maximus. Maecenas et dapibus
            nulla, vel tincidunt purus.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-queries"
          role="tabpanel"
          aria-labelledby="nav-queries"
        >
          <p>
            Donec feugiat lectus nec purus luctus cursus in eget ligula. Sed
            nunc neque, suscipit vel ligula ut, vestibulum interdum tellus.
            Nullam molestie, justo eget lobortis molestie, metus eros placerat
            mi, vel vehicula ligula elit quis ipsum. Mauris eget molestie
            lectus, non lacinia tortor. Proin lorem turpis, rutrum at lacus sit
            amet, suscipit tempor libero. Curabitur at pretium diam. Maecenas
            vel dolor sagittis, finibus velit vel, iaculis est. Nulla dapibus ut
            elit nec rhoncus.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-mutations"
          role="tabpanel"
          aria-labelledby="nav-mutations"
        >
          <p>
            Vivamus laoreet, diam dapibus rutrum malesuada, sem arcu pretium
            tortor, ac faucibus nibh ipsum et sapien. Pellentesque faucibus
            placerat est a suscipit. Phasellus iaculis mattis accumsan. Nunc
            tempor, nibh eget efficitur tempus, eros ipsum dapibus sapien, at
            egestas nibh risus non quam. Donec lacinia non nisl quis efficitur.
            Vivamus metus justo, pellentesque quis aliquet at, venenatis et
            elit. Curabitur molestie ut diam a suscipit. Etiam sodales porta
            mauris, sed fermentum purus sodales gravida. Quisque orci urna,
            fermentum sit amet arcu ut, egestas sodales orci. Etiam
            sollicitudin, orci ut semper vulputate, lorem arcu iaculis metus, a
            imperdiet ipsum justo id justo. Sed sed gravida massa, id posuere
            nunc. Duis non vehicula nibh, sed dignissim dui. Phasellus at ante
            at elit maximus aliquet. Duis congue posuere dui, id sagittis nulla
            faucibus sed.
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="nav-access"
          role="tabpanel"
          aria-labelledby="nav-access"
        >
          <p>
            In hendrerit odio eget nibh porta cursus. Proin ac elit vehicula
            nisi laoreet molestie. Nulla sed odio accumsan, eleifend felis a,
            sagittis nunc. Aenean molestie, mi quis vestibulum gravida, urna
            lorem tincidunt velit, in bibendum justo augue at ligula. Vivamus
            rhoncus arcu leo. Aliquam molestie consectetur tortor suscipit
            condimentum. Curabitur interdum non lacus eleifend cursus. Nam
            eleifend enim vitae lorem scelerisque fermentum. Cras posuere ante
            tellus, at dignissim est commodo at. Aenean efficitur mollis ipsum.
            Aenean pellentesque consectetur orci et placerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetailsTabs;
