import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="cta" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
      Unleash the power of Web3, harness the potential of telematics, and unlock your business's true potential with Metacomic Pvt Ltd.      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
