import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import SideCategoryList from "../sideCategoryList/SideCategoryList";
// deprecated components
// import EditorsPick from '../editorsPick/EditorsPick';
// import MostPopular from '../mostPopular/MostPopular';
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* These are Most Popular Section */}
      <section className={styles.mostPopular}>
        <h3 className={styles.subtitle}>{"What's hot"}</h3>
        <h1 className={styles.title}>Most Popular</h1>
        {/* <MostPopular /> */}
        {/* <MenuPosts /> */}
        <MenuPosts withImage={false} />
      </section>

      {/* Here will be sidebar categories */}
      <section className={styles.sidebarCategories}>
        <h3 className={styles.subtitle}>Discover by topic</h3>
        <h1 className={styles.title}>Categories</h1>
        <SideCategoryList />
      </section>

      {/* This is Editor's pick */}
      <section className={styles.editorsPick}>
        <h3 className={styles.subtitle}>Chosen by the editor</h3>
        <h1 className={styles.title}>Editors Pick</h1>
        {/* <EditorsPick /> */}
        {/* <MenuPosts withImage/> */}
        <MenuPosts withImage={true}/>
      </section>
    </div>
  );
};

export default Menu;
