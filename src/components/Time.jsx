function Time(){
  
  let time = new Date();
  return (
    <div className="time-container lead">
      <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    </div>
  )
}
export default Time;