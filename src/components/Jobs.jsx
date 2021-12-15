import React from 'react';
import {Job} from './Job';
import {NewJobForm} from './NewJobForm';

export class Jobs extends React.Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        {name: 'Frontend JS', company: 'ABC', city: 'La Rioja', country: 'Argentina'},
        {name: 'Frontend React', company: 'DEF', city: 'La Plata', country: 'Argentina'},
        {name: 'Frontend Angular', company: 'GHI', city: 'Benevento', country: 'Italia'}
      ]
    };
  }

  onNewJob = (evt, newJob) => {
    this.setState({
      jobs: [...this.state.jobs, newJob]
    });
  }

  deleteJob = (id) => {
    this.setState({
      jobs: this.state.jobs.filter((job, idx) => idx !== id)
    });
  }

  render() {
    return (
      <div>
        <NewJobForm onNewJobSubmit={this.onNewJob}></NewJobForm>
        <ul>
          {this.state.jobs.map((job, idx) => { 
            return <Job key={idx} elem={job} onDelete={() => this.deleteJob(idx)}></Job> 
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
  }
}