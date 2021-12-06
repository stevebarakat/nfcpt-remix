import { Link } from "remix";
import Button from "./Button";
import ray from "~/images/ray.webp";
import trio from "~/images/trio.webp";

const Blocks = () => {
  return (
    <>
      <div className="wrapper">
        {/* BLOCK 1 */}
        <div className="block1">
          <figure>
            <blockquote className="blockquote">
              <p>
                Keeping my body aligned and free of pain with regular
                chiropractic care is essential.
              </p>
            </blockquote>
            <figcaption>—Alex Ray, professional diver</figcaption>
          </figure>
        </div>

        {/* BLOCK 2 */}
        <div className="contain">
          <div className="block2">
            <figure className="figure">
              <blockquote className="blockquote">
                <p>
                  Keeping my body aligned and free of pain with regular
                  chiropractic care is essential.
                </p>
              </blockquote>
              <figcaption>—Alex Ray, professional diver</figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* BLOCK 3 */}
      <div
        style={{ background: "var(--accentGradient)", color: "white" }}
        className="wrapper"
      >
        <div className="contain" style={{ justifySelf: "flex-end" }}>
          <div className="block3">
            <div className="figure">
              <div className="headline">
                <p>Join The Club!</p>
              </div>
              <p className="description">
                The best way to keep your spine healthy is by taking care of it.
                We offer package deals on regular chiropractic treatments and
                massage therapy to club members.
              </p>
              <Link to="/pricing-plans">
                <Button
                  color="var(--accentColor)"
                  borderColor="var(--grey05)"
                  textColor="white"
                >
                  Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="block4"></div>
      </div>
    </>
  );
};

export default Blocks;
