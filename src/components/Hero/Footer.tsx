import { Link } from "react-router-dom";
import Icon from "./Icon";
import { navigation } from "../../data/data";
import { useForm, ValidationError } from "@formspree/react";

const Footer = () => {
  const [state, handleSubmit] = useForm("xpwadbaw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  const newDate = new Date().getFullYear();
  return (
    <div id="footer" className="w-full bg-neutral-900">
      <div className="w-full p-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* item 1 */}
          <div className="col-span-full lg:col-span-1">
            <div className="flex items-center">
              <img
                src="/light-logo-2.png"
                alt="footer logo"
                className="h-10 me-5 rounded-full"
              />
              <Link
                to={"/"}
                className="flex-none text-3xl font-semibold text-white"
              >
                Janto Pee
              </Link>
            </div>
            <div className="text-white w-48 mt-20">
              <Icon item2 />
            </div>
          </div>

          {/* item 2 */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-100 uppercase">Product</h4>
            <div className="mt-3 grid space-y-3">
              {navigation.solutions.map((item, index) => (
                <p key={index}>
                  <Link
                    to={item.href}
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-neutral-200"
                  >
                    {item.name}
                  </Link>
                </p>
              ))}
            </div>
          </div>

          {/* item 3 */}
          <div className="col-span-1">
            <h4 className="font-semibold text-neutral-100 uppercase">
              Company
            </h4>
            <div className="mt-3 grid space-y-3">
              {navigation.support.map((item, index) => (
                <p key={index}>
                  <Link
                    to={item.href}
                    className="inline-flex gap-x-2 text-neutral-400 hover:text-neutral-200"
                  >
                    {item.name}
                  </Link>
                  {item.info && (
                    <span className="inline ms-1 text-xs bg-secondary-500 text-white py-1 px-2 rounded-lg">
                      {item.info}
                    </span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* item 4 */}
          <div className="col-span-2">
            <h4 className="font-semibold text-neutral-100 uppercase">
              Stay up to date
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mt-4 flex flex-col  items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2">
               <div className="w-full">
               <label htmlFor="footerInput" className="sr-only">
                  Search
                </label>
                <input
                  type="email"
                  id="footerInput"
                  name="footerInput"
                  placeholder="Enter your email"
                  className="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="footerInput"
                errors={state.errors}
              />
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-secondary-500 text-white hover:bg-secondary-800 disabled:opacity-50 disabled:pointer-events-none"
              >
                Subscribe
              </button>
               </div>
            </form>
          </div>
        </div>

        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-neutral-400">
              {newDate} Janto Pee - Terms & Condition & policy
            </p>
          </div>

          <div>
            {navigation.socials.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-primary-500 transition-all duration-300"
              >
                <img src={item.info} alt={item.name} className="text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
