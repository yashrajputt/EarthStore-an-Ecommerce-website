import React from 'react'

{/*const About = () => {
  return (
    <div>About</div>
  )
}*/}

class About extends React.Component{
  constructor(props){
      super(props)

      this.state={
        count:1
      }
  }
  
  render(){
    return(
      <div>
        {this.props.name}
        <h1>{this.state.count}</h1>
        <button onClick={()=>{
          this.setState({
            count1:this.state.count+1,
          })
        }}>increment</button>
      </div>
    )
  }
}

export default About