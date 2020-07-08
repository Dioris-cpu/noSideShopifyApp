import { EmptyState, Layout, Page } from "@shopify/polaris";
import { ResourcePicker, TitleBar } from "@shopify/app-bridge-react";
import { useState } from "react";
import store from "store-js";
import ProductList from "../componets/ProductList";
import axios from "axios";

function Index() {
  const [modal, setModal] = useState({ open: false });
  const emptyState = !store.get("ids");

   function handleSelection(resources) {
    // we are using the product ids to display the items

    const idsFromResources = resources.selection.map((product) => product.id);
    setModal({ open: false });
    store.set("ids", idsFromResources);
    // console.log("this is product ids", store.get("ids"));
    const seletedProducts = resources.selection;

    deleteApiData();

    seletedProducts.map((product) => makeApiCall(product));
  }

  function deleteApiData(){
    var url = "/api/products";

    axios.delete(url)
  }

  async function makeApiCall(products) {
    const url = "/api/products";

    axios
      .post(url, products)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }

  return (
    <Page>
      <TitleBar
        primaryAction={{
          content: "Select New Product",
          onAction: () => setModal({ open: true }),
        }}
      />
      <ResourcePicker
        resourceType="Product"
        showVariants={false}
        open={modal.open}
        onCancel={() => setModal({ open: false })}
        onSelection={(resources) => handleSelection(resources)}
      />
      {emptyState ? (
        <Layout>
          <EmptyState
            heading="Manage your inventory transfers"
            action={{
              content: "Select Products",
              onAction: () => setModal({ open: true }),
            }}
            image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
          >
            <p>Select Products</p>
          </EmptyState>
        </Layout>
      ) : (
        <ProductList />
      )}
    </Page>
  );
}
export default Index;
