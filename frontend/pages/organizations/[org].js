import Head from "next/head";

import { OrganizationPage } from "../../components";

const Organization = () => {
  return (
    <div>
      <Head>
        <title>Organization 1 | Event Bus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <OrganizationPage />
      </main>
    </div>
  );
};

export default Organization;
