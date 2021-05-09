import * as styles from './App.module.css';
import React from "react";
import Layout from "./Layout";
import PostItem from "./PostItem";
import WorkItem from "./WorkItem";

const App = (props) => {
  return (
    <Layout>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.profile}>
        見習いAIエンジニアのおっちゃんです。
        よろしくお願いします。
      </p>
      <h2 className={styles.heading}>Posts</h2>
      {props.posts.map((post) => {
        return <PostItem post={post} key={post.title} />;
      })}
      <h2 className={styles.heading}>Works</h2>
      <div className={styles.WorkItems}></div>
    </Layout>
  );
};

export default App;