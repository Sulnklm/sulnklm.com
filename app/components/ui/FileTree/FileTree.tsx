import { File, Tree, Folder } from "@/components/ui/magicui/file-tree";

export function FileTree() {
  return (
    <div className="relative  flex h-[480px] w-full lg:w-fit flex-col items-center justify-center rounded-lg overflow-y-hidden border pointer-events-none">
      <Tree
        className="rounded-md p-2"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14"
        ]}
        elements={ELEMENTS}
      >
        <Folder element="src" value="1">
          
          <Folder value="1" element="pages">
              <File value="2">
                <p className="text-base">Home.jsx</p>
              </File>
              <File value="3" className="!text-[#ef8151]">
                <p className="text-base !text-[#ef8151] font-[400]">MovieDetails.jsx</p>
              </File>
              <File value="4">
                <p className="text-base">Search.jsx</p>
              </File>
              <File value="5">
                <p className="text-base">Favorite.jsx</p>
              </File>
          </Folder>

          <Folder value="6" element="components">
            <Folder value="7" element="ui">
              <File value="8">
                <p className="text-base">Favorite.jsx</p>
              </File>
              <File value="9">
                <p className="text-base">MovieCard.jsx</p>
              </File>
              <File value="10">
                <p className="text-base">...</p>
              </File>
            </Folder>
            <File value="11">
              <p className="text-base">header.jsx</p>
            </File>
            <File value="12">
              <p className="text-base">footer.jsx</p>
            </File>
          </Folder>
          <Folder value="13" element="utils">
            <File value="14">
              <p className="text-base">storage.js</p>
            </File>
            <File value="14">
              <p className="text-base">...</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t dark:from-black from-background to-transparent blur-[1px]"
      />
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "pages",
        children: [
          { id: "3", isSelectable: true, name: "Home.jsx" },
          { id: "4", isSelectable: true, name: "MovieDetails.jsx" },
          { id: "5", isSelectable: true, name: "Search.jsx" },
          { id: "6", isSelectable: true, name: "Favorite.jsx" },
        ],
      },
      {
        id: "7",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "8",
            isSelectable: true,
            name: "ui",
            children: [
              { id: "9", isSelectable: true, name: "Favorite.jsx" },
              { id: "10", isSelectable: true, name: "MovieCard.jsx" },
              { id: "11", isSelectable: true, name: "..." },
            ],
          },
          { id: "12", isSelectable: true, name: "header.jsx" },
          { id: "13", isSelectable: true, name: "footer.jsx" },
        ],
      },
      {
        id: "14",
        isSelectable: true,
        name: "utils",
        children: [
          { id: "15", isSelectable: true, name: "storage.js" },
        ],
      },
    ],
  },
];