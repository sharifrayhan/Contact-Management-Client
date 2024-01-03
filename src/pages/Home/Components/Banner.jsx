import { styles } from "../../../styles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Connect Smarter, Not Harder"],
    loop: {},
  });

  return (
    <>
      <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
        <div className="mt-[80px] h-[70vh] flex flex-col items-start">
          <h1 className={`${styles.bannerHeadText} text-white`}>
            <span className="">Effortless <br /> Networking <br /> Starts Here</span>
          </h1>
          <p className={`${styles.bannerSubText} mt-2`}>
            {text}
            <Cursor></Cursor>
          </p>
        </div>
      </section>
    </>
  );
};

export default Banner;
