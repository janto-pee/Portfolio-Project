import { HeartIcon } from "@heroicons/react/24/outline"
import { BlogList } from "../../data/data"

const Blog = () => {
  return (
    <div id="blog" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto py-10 px-4 lg:px-8 xl:px-16 text-center border-b border-black">
        <h3 className="text-secondary-500 text-lg uppercase">visit my blog</h3>
        <h2 className="mt-8 mb-16 uppercase text-neutral-300 text-3xl xl:text-6xl font-semibold">My Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {
            BlogList.map((item, index) => (
              <div key={index} className="group p-6 bg-[#202328] rounded-lg button-box-shadow">
                <img src={item.image} alt={item.title} className="w-full text-secondary-900 rounded-md" />
                <div className="flex items-center justify-between gap-2 my-6 ">
                  <span className="text-secondary-500 text-lg ">{item.stack}</span>
                  <p className="flex items-center gap-4 text-neutral-400">
                    <HeartIcon className="w-4" />
                    <span>{item.views}</span>
                  </p>
                </div>
                <h3 className="my-4 text-left text-2xl text-neutral-400">{item.title}</h3>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Blog