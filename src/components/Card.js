import React from 'react';
import sun from '../images/sun.png';
import rain from '../images/rain.png';
import cloud from '../images/cloud.png';
import wtf from '../images/eclipse.png';

export default class Card extends React.Component{
    render(){
        const {main: {temp_min, temp_max, humidity},
        weather, coord:{lat, lon}, clouds, wind: {speed}, dt} = this.props.data;

        const weatherState = weather[0].main;
        const weatherDescription = weather[0].description;

        var img;
        switch (weatherState) {
            case 'Clear':
                img = sun;
                break;
            case 'Clouds':
                img = cloud;
                break;
            case 'Rain' || 'Drizzle':
                img = rain;
                break;
            default:
                img = wtf;
                break;
        }

        console.log(this.props.data)

        return (
            <div className="card col-12 col-sm-10 col-md-8 col-lg-6 mt-4 text-center">
                <div className='row no-gutters'>
                    <div className="col-12 col-sm-6 col-md-6 col-xl-4 p-4">
                        <img src={ img } className="card-img" alt="..." />
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-xl-8 p-4'>
                        <div className="card-body">
                            <div className='card-text'>Time: { (new Date(dt * 1000)).toLocaleTimeString() }</div>
                            <div className='card-text'>Coords: {`${lat}, ${lon}`}</div>
                            <div className='card-text'>Weather: { weatherDescription }</div>
                            <div className='card-text'>
                                <span>Max: { Math.floor(temp_max - 273) + '℃' } </span>
                                <span className='text-muted'>Min: { Math.floor(temp_min - 273) + '℃' } </span>
                            </div>
                            <div className='card-text'>
                                Humidity: <span>{ humidity + '%' } </span>
                            </div>
                            <div className='card-text'>
                                Clouds: <span>{ clouds.all + '%' } </span>
                            </div>
                            <div className='card-text'>
                                Wind speed: <span>{ speed + ' m/s' } </span>
                            </div>
                        </div>    
                    </div>
                    
                </div>
                
            </div>
        )
    }
}