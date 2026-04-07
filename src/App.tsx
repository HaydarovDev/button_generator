import { useState, type JSX } from "react";
import type { Tab } from "./types/tab";
import ColorsTab from "./components/tabs/ColorsTab";
import BorderTab from "./components/tabs/BorderTab";
import ContentTab from "./components/tabs/ContentTab";
import ShadowTab from "./components/tabs/ShadowTab";
import OutputCode from "./components/OutputCode";
import useStyles from "./hooks/useStyles";
import { TABS } from "./constants/tabs";
import ButtonPreview from "./components/ButtonPreview";
import Button from "./components/ui/Button";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("content");

  const {
    border,
    colors,
    shadow,
    content,
    computedStyles,
  } = useStyles();

  const tabMapper: Record<Tab, JSX.Element> = {
    content: <ContentTab content={content} />,
    border: <BorderTab border={border} />,
    colors: <ColorsTab colors={colors} />,
    shadow: <ShadowTab shadow={shadow} />,
  };

  return (
    <section
      className="w-full flex items-center justify-center"
    >
      <div className="flex items-center flex-col">
        <header className="flex w-75 justify-between my-2">
          {TABS.map(tab =>
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              active={activeTab === tab}
            >
              {tab}
            </Button>
          )}
        </header>

        <article className="w-75 m-auto text-white flex flex-col gap-2">
          {tabMapper[activeTab]}
        </article>
        <OutputCode {...computedStyles} />
      </div>

      <ButtonPreview {...computedStyles} />
    </section>
  );
}
