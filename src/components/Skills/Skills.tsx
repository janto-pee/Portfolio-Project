import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { SkillsList } from "../../data/data"

const Skills = () => {
  return (
    <div id="skills" className="bg-neutral-900">
      <div className="text-center max-w-7xl mx-auto py-16 xl:py-20 px-4 lg:px-8 xl;px-16 border-b border-black">
        <h3 className="text-secondary-500 text-lg">👔 SKILLS</h3>
        <h2 className="my-8 uppercase text-neutral-200 text-3xl xl:text-6xl font-semibold">what i do</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl;gap-12">
          {
            SkillsList.map((item, index) => (
              <div key={index} className="group text-start lg:text-center px-6 lg:px-14 py-10 bg-[#202328] button-box-shadow">
                <p className="flex lg:justify-center ">
                  <item.icon className="h-12 w-12 text-secondary-900 group-hover:text-secondary-500 transition ease-in-out delay-300" />
                </p>
                <h3 className="my-6 text-2xl lg:text-3xl text-neutral-300">{item.title}</h3>
                <p className="mb-4 text-neutral-400 lowercase">
                  {item.content}
                </p>
                <p className="flex justify-center">
                  <ArrowLongRightIcon className="opacity-0  w-12 group-hover:opacity-100 text-secondary-500 transition ease-in-out delay-300" />
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills