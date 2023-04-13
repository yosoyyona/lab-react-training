function Greetings(props) {

  return (
    <div>
      {props.lang == "de" && <div> Hallo {props.children}</div>}
      {props.lang == "fr" && <div> Bonjour {props.children}</div>}
    </div>
  )
}

export default Greetings