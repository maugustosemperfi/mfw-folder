import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Home.module.css";
import dynamic from "next/dynamic";
// @ts-ignore
const Button = dynamic(() => import("task_tracker_components/Button"), { ssr: false });

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Test</Button>
      AAAAAA
    </div>
  );
};

export default Home;
