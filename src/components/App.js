import React from 'react';
import Index from './Index';

export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isComponentActive: false,
      city: '',
      error: null,
      isLoading: false,
      response: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();

    const {city} = this.state;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=6132c3489f0e8f14f8be55cd68ff7506`;

    this.setState({
      isLoading: true
    })

    fetch(url)
      .then(response => {
        this.setState({
          isLoading: false
        })
        return response.json();
      },
      error => {
        this.setState({
          error,
          isComponentActive: true
        });
      })
      .then(JsonResponse => {
        this.setState({
          response: JsonResponse,
          isComponentActive: true
        })
      })
  }

  render(){
    return (
      <div className='row justify-content-center no-gutters'>
        <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
          <h1 className='text-center display-4 mt-2'>Weather forecast</h1>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Your city</span>
            </div>
            <input type="text" aria-label="city" className="form-control" onChange={(e) => this.setState({city: e.target.value})} value={this.state.city}/>
          </div>
          <button type="button" className="btn btn-light btn-block mt-4" onClick={this.handleClick}>Find!</button>
        </div>
        <div className='col-12' />
        {this.state.isComponentActive && 
          <Index data={this.state} />
        }
      </div>
    )
  }
}