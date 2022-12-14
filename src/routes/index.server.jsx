import { Suspense } from "react";

import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}
