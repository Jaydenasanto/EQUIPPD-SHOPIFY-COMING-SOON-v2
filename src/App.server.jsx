import React from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import {
  Router,
  FileRoutes,
  ShopifyProvider,
  CartProvider,
} from "@shopify/hydrogen";
import { Suspense } from "react";
import "../src/assets/CSS/main.scss";

function App({ routes }) {
  return (
    <Suspense fallback={null}>
      <ShopifyProvider>
        <CartProvider>
          <Router>
            <FileRoutes routes={routes} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
