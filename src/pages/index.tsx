import type { NextPage } from "next";
import React from "react";
import styles from "../../styles/Home.module.css";
// @ts-ignore
import Button from "task_tracker_components/Button";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Test</Button>
    </div>
  );
};

export default Home;
