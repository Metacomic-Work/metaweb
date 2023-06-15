import { apple, google, tel } from "../assets";
import styles, { layout } from "../style";

const Software = () => (
  <section id="product" className={layout.sectionReverse} style={{paddingTop:'0px'}}>
    <div className={layout.sectionImgReverse}>
      <img src={tel} alt="billing" className="w-[80%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
     Telematic Solutions for a Connected World
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
      With our comprehensive telematics solutions, we help businesses harness the power of telecommunications, informatics, and data analytics. Our telematics expertise enables organizations to monitor and manage assets, optimize logistics, improve safety, and gain valuable insights through real-time data analysis. Whether you need fleet management systems, vehicle tracking solutions, or remote asset monitoring, we provide tailored telematics solutions that streamline operations, reduce costs, and drive productivity.
      </p>


    </div>
  </section>
);

export default Software;
