import { Button } from '@chakra-ui/react';
import styles from './index.module.css';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome Doodllr 👋
            </h1>
            <Button colorScheme="cyan">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
