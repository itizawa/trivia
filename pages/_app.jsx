import "../styles/global.scss";

import Navbar from "@components/commons/Navbar";

function Page(pageProps) {
  return (
    <div className="row no-gutters justify-content-end">
      <div className="col-12 col-md-9 col-xl-10">
        <Navbar {...pageProps} />
        <pageProps.Component {...pageProps} />
      </div>
    </div>
  );
}

export default Page;
