import React from 'react';
import Card from './Card';

export default class Index extends React.Component{
  render(){
    const {error, isLoading, response} = this.props.data;
    if (error){
      return <h1 className='text-center display-4 pt-4 col-6'>Error: {error.message}</h1>
    }

    else if (isLoading){
      return <div className='text-center pt-4 col-6'><div className="spinner-border text-dark"></div></div>
    }

    else if (response.cod !== 200){
      return <h1 className='text-center display-4 pt-4 col-6'>Cod {response.cod}: {response.message}</h1>
    }

    else {
      return (
        <Card data={response} />
      );
    }
    
  }
    
}