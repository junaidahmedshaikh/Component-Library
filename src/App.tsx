import "./App.css";
import { TreeView } from "./components/TreeView/TreeView";
import { Tabs } from "./components/Tabs/Tabs";
import { Accordion } from "./components/Accordion/Accordion";
import { sampleTree, tabItems } from "../src/constant";
import { Pagination } from "./components/Pagination/Pagination";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="flex gap-4">
        <h3>
          <b>Components:</b>{" "}
        </h3>
        <h3> Accordion</h3>
        <h3>Tree View</h3>
      </div>
      <div className="w-full h-full p-5 border-2 border-gray-200 rounded-lg">
        {/* <Accordion items={data} />
         */}
        {/* <Tabs tabs={tabItems} orientation="horizontal" size="md" /> */}
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Current Page: {page}</h2>
          <Pagination
            totalPages={20}
            currentPage={page}
            onPageChange={setPage}
            orientation="horizontal"
            size="md"
            maxVisible={5}
          />
        </div>
      </div>

      {/* <TreeView data={sampleTree} /> */}
    </>
  );
}

export default App;
