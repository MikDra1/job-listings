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
        <div>{job.postedAt}</div>&bull;
        <div>{job.contract}</div>&bull;
        <div>{job.location}</div>
      </div>
      </div>
      </div>
      </div>

      <div className="job__mustknow">
        <div onClick={() => onSearch(job.role)}>{job.role}</div>
        <div onClick={() => onSearch(job.level)}>{job.level}</div>
        {job.languages.map((language) => (
          <div onClick={() => onSearch(language)} key={language}>{language}</div>
        ))}
        {job.tools.map((tool) => (
          <div onClick={() => onSearch(tool)} key={tool}>{tool}</div>
        ))}
      </div>
    </div>
  );
}

export default Job;
