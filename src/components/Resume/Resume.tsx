import {
  CheckBadgeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = () => {
  return (
    <div id="resume" className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-16 xl:py-20 border-b border-black text-center">
        <h3 className="text-secondary-500 text-lg uppercase">
          7 years of experince
        </h3>
        <h2 className="my-8 uppercase text-neutral-200 text-2xl xl;text-6xl font-semibold">
          My Resume
        </h2>
        <div className="grid mt-20 text-start">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff",
                boxShadow: "rgba(3, 3, 3, 0.48) 6px 2px 8px 0px, rgba(107, 107, 107, 0.8) -1px -1px 4px 1px",
               }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                User Interface, User Experience, Visual Design Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              dateClassName="text-white"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<CheckBadgeIcon />}
             
            >
              
              <h3 className="vertical-timeline-element-title">Backend Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Lagos, Nigeria
              </h4>
              <p>
                Database Design and Development, Relational Database Management systems, Web Application Development
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              dateClassName="text-white"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<CheckBadgeIcon />}
            >
              <h3 className="vertical-timeline-element-title">Frontend UI/UX Design</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              dateClassName="text-white"
              icon={<CheckBadgeIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#ffffff" }}
              icon={<CheckBadgeIcon />}
              contentStyle={{
                background: "rgb(234, 72, 99",
                color: '#fff',
                boxShadow: "rgba(3, 3, 3, 0.48) 6px 2px 8px 0px, rgba(107, 107, 107, 0.8) -1px -1px 4px 1px",
              }}
            >
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
