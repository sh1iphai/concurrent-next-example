"use client";
import { useState } from "react";
import { TabButton } from "./TabButton";
import { AboutTab } from "./AboutTab";
import { PostsTab } from "./PostsTab";
import { ContactTab } from "./ContactTab";
import { Suspense } from "react";
import styles from "./page.module.css";

type TabType = "about" | "posts" | "contact";

const Home = () => {
  const [tab, setTab] = useState<TabType>("about");
  const selectTab = (nextTab: TabType) => {
    setTab(nextTab);
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.tabList}>
        <TabButton
          isActive={tab === "about"}
          onClick={() => selectTab("about")}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === "posts"}
          onClick={() => selectTab("posts")}
        >
          Posts (slow)
        </TabButton>
        <TabButton
          isActive={tab === "contact"}
          onClick={() => selectTab("contact")}
        >
          Contact
        </TabButton>
      </div>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </Suspense>
  );
};

export default Home;
