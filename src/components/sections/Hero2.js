import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

import ReactPlayer from "react-player";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">Featured Content</span>
            </h1>
            <div
              className="container-xs"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              ></p>
              <h3>
                Obama's Speeches<a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=GJN-IT7VNbs&t=19s" />
              <h3>
                The Renaissance <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=ekegMvw9fYs" />
              <h3>
                The House of Medici <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=he8XpO_7AoM" />
              <h3>
                The Napoleonic Code <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=d35XK74e95A" />
              <h3>
                Frankenstein <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=EGL7UNIne8Q" />
              <h3>
                The French Revolution{" "}
                <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=QT8ld3spSa4&t=63s" />
              <h3>
                Computer Science <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=jVjfj7UM_8M&t=1614s" />
              <h3>
                World Religions <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=ZDyExQ_cCdM&t=18061s" />
              <h3>
                The Great Gatsby <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=Ja7nXBPZq2E&t=10s" />
              <h3>
                AWS Nimble Studio <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=9MdGVk7-Wo0&t=52s" />
              <h3>
                Ulysses <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=mS36mc8obf0" />
              <h3>
                The Scientific Method{" "}
                <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=CoOC7RDyJ_o" />
              <h3>
                The Google File System{" "}
                <a href="https://www.youtube.com/watch?v=QVsn8ejXdkU"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=QVsn8ejXdkU" />
              <h3>
                Deep Work
                <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=47a_rHvz1Tw" />
              <h3>
                AWS <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=ux6iuBeqmqU&t=54s" />
              <h3>
                Philosophy{" "}
                <a href="https://www.youtube.com/watch?v=r8_nzhggJJk"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=bEt-2bGNyJY" />
              <h3>
                Civilization <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=M36G4VWyVEE" />
              <h3>
                Astronomy <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=tRTY6MTKhAQ" />
              <h3>
                Ancient Egypt <a href="https://www.cluemediator.com"></a>
              </h3>
              <ReactPlayer url="https://www.youtube.com/watch?v=nopBvxVQ_1E" />

              <div className="reveal-from-bottom" data-reveal-delay="600"></div>
            </div>
          </div>
          <div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            ></a>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
