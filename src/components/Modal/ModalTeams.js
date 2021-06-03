import React from 'react';
import './ModalTeams.css';
// import TestDetails from '../Tests/TestList/TestItem/TestDetails';

const modalTeams = props => {
  let tempYOffset = (window.pageYOffset + 50) + "px"
  const styles = { top: tempYOffset }
  console.log(props)


  return (
    <div className="modal-teams" style={styles}>

      <header className="modal__header">Searching teams for: <span className='uppercase'>{props.title}</span></header>
      <section className="modal__content"></section>
      {/* {props.loading && <Spinner />} */}

      {props.teams.map(team => {
        return (
          <div key={team._id} className='tooltip'>
            <span className='tooltiptext'>Select {team.name} Group</span>
            <div className="blog clickable tooltip no-border" onClick={props.handleClick.bind(this, 'team', team.name, team._id)}>
              <h3 className="post-title">{team.name}</h3>
              <p><span className="description">{team.description}</span><br /></p>
              <div className="blog-main">
                <div className='bold large'>Groups</div>
                {team.groups.map(group => {
                  return (
                    <div >
                      <ul key={group._id}>
                        <li><span className='bold'>Group Name: </span> {group.name}</li>
                        <li><span className='bold'>Group Description: </span>{group.description}</li>
                        <li><span className='bold'>Group Locations: </span>
                          {group.locations.map(location => {
                            return (
                              <ul style={{ margin: "0 1rem 0.5rem" }} key={location._id}>
                                <li><span className='bold'>Organization:</span> {location.business}</li>
                                <li><span className='bold'>Name:</span> {location.name}</li>
                                <li><span className='bold'>Street:</span> {location.street}</li>
                              </ul>
                            )
                          })}
                        </li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
      {/* <Spinner /> */}
      {/* pass the content in dynmically -> props.children -> slot react solution, can pass anything between our modaljs tags and that will be rendered*/}
      {props.children}
      {/* {props.tests  ? (
                <TestList tests={props.tests} />) : (
                <TestList tests={["Not Found"]} /> )
            } */}
      <section className="modal__actions">
        <button className="btn" onClick={props.onNext}>Next</button>
      </section>
    </div>

  )
}
export default modalTeams;
