/* eslint-disable react/prop-types */

function Job({ job, onSearch }) {
  return (
    <div className={`job ${job.featured ? "job--featured" : ""}`}>
      <div>
<div className="job__left__side">
      <img className="job__img" src={job.logo} alt="" />

<div>
      <div className="job__top">
        <h2 className="job__company">{job.company}</h2>

        {job.new ? <span className="job__top--new">{job.new ? "NEW!" : ""}</span> : null}
        {job.featured ? <span className="job__top--featured">{job.featured ? "FEATURED" : ""}</span> : null}
      </div>

      <h3 className="job__position">{job.position}</h3>

      <div className="job__data">
        <li>{job.postedAt}</li>&bull;
        <li>{job.contract}</li>&bull;
        <li>{job.location}</li>
      </div>
      </div>
      </div>
      </div>

      <div className="job__mustknow">
        <li onClick={() => onSearch(job.role)}>{job.role}</li>
        <li onClick={() => onSearch(job.level)}>{job.level}</li>
        {job.languages.map((language) => (
          <li onClick={() => onSearch(language)} key={language}>{language}</li>
        ))}
        {job.tools.map((tool) => (
          <li onClick={() => onSearch(tool)} key={tool}>{tool}</li>
        ))}
      </div>
    </div>
  );
}

export default Job;
