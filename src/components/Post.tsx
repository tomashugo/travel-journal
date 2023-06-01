type PostProps = {
  img: string;
  country: string;
  location: string;
  period: string;
  description: string;
};

const Post: React.FunctionComponent<PostProps> = ({img, country, location, period, description}) => {
  return (
    <div className='post'>
      <img src={img} />
      <div className='content'>
        <div className='title'>
          <h3><i className="fa-solid fa-location-dot location-red"></i> {country}</h3> <p>View on Google Maps</p>
        </div>
        <h2>{location}</h2>
        <h3>{period}</h3>
        <p>{description}</p>
      </div>
    </div>    
  )
}

export default Post