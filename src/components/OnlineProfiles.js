import React from 'react';
import './OnlineProfiles.css';
import '../components/shared.css';

function OnlineProfiles() {
  const codingProfiles = [
    {
      platform: "CodeForces",
      rank: "Master",
      totalUsers: "750,000+",
      percentile: "Top 1.5%",
      handle: "UshanGhosh",
      link: "https://codeforces.com/profile/UshanGhosh",
      logo: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png",
      color: "#FF8C00",
      rankColor: "#FF8C00"
    },
    {
      platform: "CodeChef",
      rank: "6★",
      totalUsers: "1,000,000+",
      percentile: "Top 1%",
      handle: "ushan_ghosh_00",
      link: "https://www.codechef.com/users/ushan_ghosh_00",
      logo: "https://cdn.codechef.com/images/cc-logo.svg",
      color: "#FFB100",
      rankColor: "#FFB100"
    },
    {
      platform: "Total Problems Solved",
      rank: "3000+",
      description: "Competitive Programming Problems",
      subDescription: "(Algorithmic, Data Structure Based and Others)",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
      color: "#00ADB5",
      rankColor: "#00ADB5",
      logoClass: "problem-count-logo"
    }
  ];

  return (
    <section id="profiles-section" className="online-profiles">
      <div className="section-container">
        <div className="title-container">
          <h2 className="section-title">Online Profiles & Statistics</h2>
        </div>
        <div className="profile-cards">
          {codingProfiles.map((profile, index) => (
            <div className="profile-card" key={index}>
              <img 
                src={profile.logo} 
                alt={`${profile.platform} Logo`} 
                className={profile.logoClass || 'platform-logo'}
              />
              <h4>{profile.platform}</h4>
              {profile.handle ? (
                <>
                  <div className="rank" style={{ color: profile.rankColor }}>{profile.rank}</div>
                  <p className="percentile">
                    {profile.percentile} among {profile.totalUsers} users worldwide
                  </p>
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="profile-link"
                  >
                    <div className="handle-link" style={{ borderColor: profile.color }}>
                      <span className="handle-text" style={{ color: profile.color }}>
                        {profile.handle}
                      </span>
                      <span className="link-arrow">→</span>
                    </div>
                  </a>
                </>
              ) : (
                <>
                  <div className="rank problems-count" style={{ color: profile.rankColor }}>
                    {profile.rank}
                  </div>
                  <p className="problem-description">{profile.description}</p>
                  <p className="problem-subdescription">{profile.subDescription}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OnlineProfiles; 