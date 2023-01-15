import styles from "./steps.module.scss";

import Image1 from "./components/image-1";
import Image2 from "./components/image-2";
import Image3 from "./components/image-3";

import Code from "src/components/code";

export default function Steps() {
  return (
    <section className={styles.steps}>
      <div className={styles.step}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Build</h2>
          <p className={styles.text}>
            Build the elements of your user interface.
          </p>
          <Code language="javascript">
            {`const image = canvasUI.view.new("logo-image", "image");\n\nimage.set("size", { width: 50, height: 50 });\nimage.set("src", "../img/logo.svg");`}
          </Code>
        </div>
        <Image1 className={styles.image} />
      </div>
      <div className={styles.step}>
        <Image2 className={styles.image} />
        <div className={styles.content}>
          <h2 className={styles.heading}>Place</h2>
          <p className={styles.text}>
            Place them in the way you want them to be.
          </p>
          <Code language="javascript">
            {`image.layoutParams.set("align", {\n  horizontal: "middle",\n  vertical: "middle",\n});`}
          </Code>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Interact</h2>
          <p className={styles.text}>
            Interact with them to make them do something.
          </p>
          <Code language="javascript">
            {`image.listeners.add("click", function (image) {\n  const size = image.get("size");\n  image.set("size", { width: size.width * 2, height: size.height * 2 });\n});`}
          </Code>
        </div>
        <Image3 className={styles.image} />
      </div>
    </section>
  );
}
