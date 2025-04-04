import React from 'react';
import './Achievements.css';
import '../components/shared.css';

function Achievements() {
  const achievements = [
    {
      title: "International",
      items: [
        "2 times Asia West Finalist(2021, 2022)",
        "10th place in a Codeforces Division-2 round among worldwide 7000+ contestants",
        "3rd place in a Codechef Division-1 round",
        "Meta HackerCup Awardee (2024), top 4%"
      ]
    },
    {
      title: "ICPC Achievements",
      items: [
        "5th place, ICPC Regional Dhaka Site 2021",
        "7th place, ICPC Regional Dhaka Site 2024",
        "7th place, ICPC Regional Dhaka Site 2022"
      ]
    },
    {
      title: "National Contests",
      items: [
        "5th place, SUST Inter University Programming Contest 2024",
        "5th place, IUT Inter University Programming Contest 2024",
        "Top 10 ranks in many other Inter University Programming Contests" 
      ]
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">Achievements</h2>
        </div>
        
        <div className="achievements-grid">
          {achievements.map((category, index) => (
            <div className="achievement-card" key={index}>
              <h3 className="achievement-title">{category.title}</h3>
              <ul className="achievement-items">
                {category.items.map((item, itemIndex) => {
                  const highlightedItem = item.replace(
                    /(\d+(?:st|nd|rd|th) place|Top \d+|Asia West Finalist)/g,
                    '<span class="highlight">$1</span>'
                  );
                  return (
                    <li 
                      key={itemIndex}
                      dangerouslySetInnerHTML={{ __html: highlightedItem }}
                    />
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements; 