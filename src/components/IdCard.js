function IdCard({lastName, firstName, gender, height, birth, picture}) {
  return (
    <div className="row border">
      <div className="col-md-4 picture">
        <img src={picture} alt={firstName} />
      </div>
      <div className="col-md-6 data d-flex flex-column">
        <span>First name: {firstName}</span>
        <span>Last name: {lastName}</span>
        <span>Gender: {gender}</span>
        <span>Height: {height / 100}m</span>
        <span>Birth: {birth.toDateString()}</span>
      </div>
    </div>
  )
}

export default IdCard