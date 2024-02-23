import styles from "./homepage.module.css";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from '../components/cardList/CardList';
import Pagination from '../components/pagination/Pagination';
import Menu from "@/components/menu/Menu";


export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
