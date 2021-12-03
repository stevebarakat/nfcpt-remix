import styles from "./sidebar.css";
import { buildUrl } from "cloudinary-build-url";
import coupon from "../images/new-patient-vertical.svg";
import ClaimOfferForm from "./ClaimOfferForm";

const TESTIMONIALS = `
  query GetTestimonials {
    nfcptSettings {
      nfcptSettings {
        testimonials {
          testimonial {
            testimonialAuthor
            testimonialContent
            testimonialPhoto {
              altText
              sourceUrl
              slug
            }
          }
        }
      }
    }
  }
`;

const Sidebar = () => {
  function randomNumber(min = 0, max = 1) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const n = randomNumber(0, 1);

  const testimonialPhotoAltText =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialPhoto.altText;
  const testimonialPhotoUrl =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialPhoto.sourceUrl;
  const testimonialPhotoSlug =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialPhoto.slug;
  const testimonialContent =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialContent;
  const testimonialAuthor =
    data?.nfcptSettings.nfcptSettings.testimonials[n].testimonial
      .testimonialAuthor;

  const urlPixelated = buildUrl(testimonialPhotoSlug, {
    cloud: {
      cloudName: "stevebarakat",
    },
    transformations: {
      effect: {
        name: "pixelate",
      },
    },
  });

  return (
    <aside className="sidebar">
      <div
        className="sidebarWidget"
        style={{ background: "var(--accentGradient)" }}
      >
        <img src={coupon} alt="New Patient Special" />
        <ClaimOfferForm />
      </div>
      <div
        className="sidebarWidget"
        style={{ background: "var(--primaryGradient)" }}
      >
        <div className="testimonialImg">
          {testimonialPhotoUrl && (
            <img src={testimonialPhotoUrl} alt={testimonialPhotoAltText} />
          )}
        </div>
        <div>
          <blockquote>
            <span className="testimonial">{testimonialContent}</span>
          </blockquote>
          <figcaption
            style={{
              color: "var(--grey10)",
              textAlign: "center",
              paddingBottom: "3rem",
            }}
          >
            —{testimonialAuthor}
          </figcaption>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
