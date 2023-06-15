
import { send } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section} style={{ paddingTop: '0px' }}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Software Solutions for a Digital World.
      </h2>
      <p className={`${styles.paragraph} max-w-[750px] mt-5`}>
      Our experienced software development team designs and develops custom software solutions tailored to your unique business requirements. We leverage a wide range of programming languages, frameworks, and emerging technologies to deliver scalable, robust, and user-friendly applications. From enterprise resource planning (ERP) systems and customer relationship management (CRM) platforms to mobile apps and web applications, we provide end-to-end software development services that transform your business processes and enhance your customer experiences.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={layout.sectionImg}>
      <img src={send} alt="billing" className="w-[75%] h-[100%]"  style={{paddingBottom:'60px'}}/>
    </div>
  </section>
);

export default CardDeal;
