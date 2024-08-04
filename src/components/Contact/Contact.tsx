import img1 from "../../assets/3.jpg";
import Icon from "../Hero/Icon";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 xl:py-20 text-center border-b border-black">
        <h3 className="text-secondary-500 text-lg uppercase">contact</h3>
        <h2 className="mt-8 mb-16 text-neutral-300 text-2xl xl:text-6xl font-semibold">
          Contact Me Today
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 xl:gap-12">
          <div className="col-span-1 group px-6 py-6 bg-[#202328] rounded-md button-box-shadow">
            <img
              src={img1}
              alt="contact image"
              className="w-full text-secondary-900 rounded-md"
            />
            <div className="flex flex-col gap-2 my-6 text-neutral-500 text-start space-y-4 ">
              <h2 className="text-neutral-400 text-3xl lg:text-4xl font-semibold">
                Janto Pee
              </h2>
              <p className="text-lg">Admin Officer</p>
              <p className="text-lg">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div>
                <p className="text-lg">
                  Phone: <span>+234000000</span>
                </p>
                <p className="text-lg">
                  Email: <span>admin@email.com</span>
                </p>
              </div>
              <Icon item1 title1 />
            </div>
          </div>
          <div className="mt-10 lg:mt-0 col-span-2 px-6 py-6 button-box-shadow rounded-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
