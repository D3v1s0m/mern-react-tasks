import Link from "next/link";
import styles from "./style.module.css"

export default function Page() {
  return (
    <div>
      <h1>MERN React Tasks</h1>
      <ul className={styles.taskList}>
        <li className={styles.taskLink}>
          <Link href="/task1">Task 1
          </Link>
        </li>
        <li className={styles.taskLink}>
          <Link href="/task2">
            Task 2
          </Link>
        </li>
        <li className={styles.taskLink}>
          <Link href="/task3">
            Task 3
          </Link>
        </li>
        <li className={styles.taskLink}>
          <Link href="/task4">
            Task 4
          </Link>
        </li>
        <li className={styles.taskLink}>
          <Link href="/task5">
            Task 5
          </Link>
        </li>
        <li className={styles.taskLink}>
          <Link href="/task6">
            Task 6
          </Link>
        </li>
      </ul>
    </div>
  );
}