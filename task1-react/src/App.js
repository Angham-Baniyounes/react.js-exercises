import './App.css';
import React from 'react';
import './component/Card.css';
import Trainee from './component/Traniees';
import DataTrainees from './component/DataTrainees';


const DataStd = DataTrainees.map(trainee => <Trainee name={trainee.name} profileImg={trainee.profileImg} address={trainee.address} jobDescribtion={trainee.jobDescribtion} brief={trainee.brief} githubAccount={trainee.githubAccount} linkedInAccount={trainee.githubAccount} facebookAccount={trainee.facebookAccount}/>);
function App() {
  return (
    <div className="App">
      {DataStd}
    </div>
  );
}
export default App;