import { sectionClass } from "./About";
import images from "../assets";
import { contact } from "../constants";
const Contact = () => {
  return (
    <div className="overflow-hidden md:pr-7 md:py-2 max-md:w-full">
      <div className="bg-color-secondary rounded-xl max-md:ml-0 p-2 mb-2 overflow-x-hidden md:h-[96vh] w-full overflow-y-auto">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center text-center mb-20 max-md:mb-10">
          <h4 className="h4 font-code flex items-center gap-2">
            <img src={images.blend} alt="Blend logo" width={25} />
            <span>Don&apos;t hesitate to</span>
          </h4>
          <h3 className="h3">
            <span className="text-cyan-400 font-bold animate-pulse">
              Contact
            </span>{" "}
            Me
          </h3>
        </div>
        <div className="mb-10 max-md:mb-5">
          <h2 className={sectionClass}>
            Send me a <span className="text-cyan-400">message</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-between gap-y-4">
          {contact.map((item) => (
            <a
              key={item.id}
              href={`${
                item.title == "Phone"
                  ? `tel:${item.link}`
                  : item.title == "E-mail"
                  ? `mailto:${item.link}`
                  : item.link
              }`}
              className="w-[45%] p-5 max-[1040px]:w-full rounded-2xl bg-color-primary flex gap-4 items-center"
            >
              <div>
                <img src={item.icon} alt="" width={35} />
              </div>
              <div className="overflow-auto">
                <h5 className="h5 font-code font-bold text-xl">{item.title}</h5>
                <span className="text-cyan-400 font-mono mt-2 break-words">
                  {item.contactInfo}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
