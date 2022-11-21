import Head from "next/head";
import React from "react";
import EventPage from "../../components/events/EventPage";

const Event = () => {
  return (
    <div>
      <Head>
        <title>Event Name | Event Bus</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <EventPage />
      </main>
    </div>
  );
};

export default Event;