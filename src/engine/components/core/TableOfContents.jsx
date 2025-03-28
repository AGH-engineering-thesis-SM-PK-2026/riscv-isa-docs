import { For } from "solid-js";
import { useTableOfContentsContext } from "../../context/TableOfContentProvider";
import { extraCSS } from "./css";

const entryIndents = {
  'xl': 'fs-la',
  'md': 'fs-md m-08-l',
  'sm': 'fs-sm m-20-l'
};

const TableOfContents = (props) => {
  const [tocEnties, _] = useTableOfContentsContext();
  const entryIndent = (entry) => entryIndents[entry.size];
  const scrollToEntry = (entry) => () => {
    entry.elem.scrollIntoView();
  };

  return (
    <>
      <For each={tocEnties()}>
        {(it, _) => (
          <div class='m-05-v'>
            <a
              class={extraCSS('ct-2 bg-3 i-click h-font-i-1 sp-02', entryIndent(it))}
              onClick={scrollToEntry(it)}
            >{it.title}</a>
          </div>
        )}
      </For>
    </>
  );
};

export default TableOfContents;
