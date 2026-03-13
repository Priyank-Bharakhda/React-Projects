
const Cards = ({CardsData}) => {
    return (
        <>
        {CardsData.map((card, index) => (
         
    <div className="card-container" key={index}>
        <div className="card-full" >
          <div>
            <div className="card-header">
              <div>
                <img
                  className="card-img"
                  src={card.logo}
                  alt=""
                />
              </div>
              <button className="btn-save">
                <span>Save</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            <div className="card-body">
              <div className="card-body-content">
                <span className="card-title">{card.company}</span>
                <span className="posted-time">{card.timePosted}</span>
              </div>
              <div className="card-description">
                <div className="job-role">{card.title}</div>
              </div>
              <div className="post-level">
                <span>{card.type}</span>
                <span>{card.level}</span>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <div>
              <div className="pay-rate">{card.payRate}</div>
              <div className="address">{card.location}</div>
            </div>
            <div>
              <div className="apply-button">Apply Now</div>
            </div>
          </div>
        </div>
      </div>
        ))}
      </>
    );
};

export default Cards;