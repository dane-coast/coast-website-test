import React from 'react';
import './ModalTeams.css';
// import TestDetails from '../Tests/TestList/TestItem/TestDetails';

const modalTeams = props => {
  let tempYOffset = (window.pageYOffset + 50) + "px"
  const styles = { top: tempYOffset }
  console.log(props)


  return (
    <div className="modal-teams" style={styles}>

      <header className="modal__header">Searching Groups for: <span className='uppercase'>{props.title}</span></header>
      <section className="modal__content"></section>
      {/* {props.loading && <Spinner />} */}

      {props.groups.map(group => {
        return (
          <div key={group._id} className='tooltip'>
            <span className='tooltiptext'>Select {group.name} Team</span>
            <div className="blog clickable tooltip no-border" onClick={props.handleClick.bind(this, 'group', group.name, group._id)}>
              <h3 className="post-title">{group.name}</h3>
              <p><span className="description">{group.description}</span><br /></p>
              <div className="blog-main">
                <div className='bold large'>Locations</div>
                {group.locations.map(location => {
                  return (
                    <ul style={{ margin: "0 1rem 0.5rem" }} key={location._id}>
                      <li><span className='bold'>Organization:</span> {location.business}</li>
                      <li><span className='bold'>Name:</span> {location.name}</li>
                      <li><span className='bold'>Street:</span> {location.street}</li>
                    </ul>
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
