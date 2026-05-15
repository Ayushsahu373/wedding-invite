import { story } from "../../config/story";

import StoryCard from "./StoryCard";

import "../../styles/components/_story.scss";

const StoryTimeline = () => {
  return (
    <section className="story-section">
      {/* Heading */}
      <div className="story-heading">
        <p>Our Journey</p>

        <h2>A Love Written In Destiny</h2>
      </div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-line" />

        {story.map((item, index) => (
          <StoryCard key={item.id} item={item} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default StoryTimeline;
