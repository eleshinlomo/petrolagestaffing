import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Services = () => {
  return (
    <>
      <section id="features" className="py-2 md:py-2 lg:py-2">
        <div className="container">
          <SectionTitle
            title="Services"
            paragraph="We pride ourself to offer unmatched staffing services in Nigeria."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((service) => (
              <SingleFeature key={service.id} feature={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
