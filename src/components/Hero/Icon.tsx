import {
  AiFillGithub,
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

interface IconInterface {
  item1?: boolean;
  item2?: boolean;
  title1?: boolean;
  title2?: boolean;
}
const Icon = ({ item1, item2, title1, title2 }: IconInterface) => {
  return (
    <>
      {/* first icon group */}
      {item1 && (
        <div>
          <p
            className={`uppercase mt-8 lg:mt-30 mb-8 ${
              title1 ? "block" : "hidden"
            }`}
          >
            find with me
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow">
              <FaFacebook className="text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow">
              <AiOutlineTwitter className="text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow">
              <AiOutlineInstagram className="text-lg" />
            </p>
          </div>
        </div>
      )}

      {/* second item group */}
      {item2 && (
        <div>
          <p
            className={`uppercase mt-8 lg:mt-30 mb-8 ${
              title2 ? "block" : "hidden"
            }`}
          >
            best skills on
          </p>
          <div className="flex items-center justify-between gap-4">
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow">
              <AiFillGithub className="text-yellow-500 text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow">
              <AiOutlineDribbble className="text-green-500 text-lg" />
            </p>
            <p className="p-4 rounded-md border border-neutral-900 button-box-shadow">
              <AiOutlineBehance className="text-purple-500 text-lg" />
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Icon;
