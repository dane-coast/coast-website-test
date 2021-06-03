import React, { Component } from 'react'

import FormInput from '../FormInput/formInput';
import SelectInput from '../FormInput/selectInput';
import ModalTeams from '../../components/Modal/ModalTeams'
import Backdrop from '../../components/Backdrop/Backdrop';
import Spinner from '../../components/Spinner/Spinner';
import ModalGroups from '../../components/Modal/ModalGroups';

const { REACT_APP_BACKEND_LINK } = process.env

class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      userName: '',
      password: '',
      confirmedPassword: '',
      team: '',
      teamId: '',
      group: '',
      groupId: '',
      secRating: [5, 4, 3, 2, 1],
      currentSecRating: 5,
      isLoading: true,
      enumsLoaded: false,
      searching: false,
      offset: 0,
      teams: [],
      groups: [],
      teamSearch: '',
      search: '',
      // showGroups: false,
      // showTeams: false,


      // enum
      userCategory: 'CLIENT',
      userCategories: []
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    this.setState({
      [name]: value
    });
  }
  searchChange = (e) => {
    const { searchName, search } = e.target;
    console.log(searchName, search)
    this.setState({
      [searchName]: search
    })
  }
  nextHandler = () => {
    let currentOffset = this.state.offset;
    const newOffset = currentOffset + 5;
    console.log(newOffset)
    this.setState({
      offset: newOffset,
      backdrop: false,
      showTeams: false,

    });
    console.log(this.state.offset)

    this.setState({ teams: '' })

  }
  findTeams = () => {
    console.log('findTeams fx')
    this.setState({ searching: true });
    console.log(this.state.team)
    const requestBody = {
      query: `
        query {
          teams(limit: 5, offset: 0, filter:{search:{contains: "${this.state.team}"}}) {
            _id
            groups {
              _id
              name
              description
              departments
              locations {
                business
                name
                street
                lat
                lon
              }
            }
            name
            description
          }
        }
      `
    }
    // 'https://mighty-coast-19334.herokuapp.com/graphql'
    fetch(REACT_APP_BACKEND_LINK, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 210) {
          throw new Error('Failed')
        }
        return res.json();
      })
      .then(resData => {
        console.log('resData')
        console.log(resData);
        const teams = resData.data.teams
        console.log(teams)
        this.setState({ teams: teams, isLoading: false })
        this.setState({ backdrop: true })
        this.setState({ showTeams: true })
        // console.log(this.state.contacts)
        // this.fetchTests();
      })
      .catch(err => {
        console.log(err)
      })

  }
  findGroups = () => {
    console.log('write find Groups fetch')
    this.setState({ searching: true });
    console.log(this.state.group)
    const requestBody = {
      query: `
      query {
        findGroups(limit: 5, offset: 0, filter:{search:{contains: "${this.state.group}"}}) {
          _id
          name
          description
          departments
          locations {
            _id
            name
            description
            business
            street
          }
          
        }
      }
      `
    }
    // 'https://mighty-coast-19334.herokuapp.com/graphql'
    fetch(REACT_APP_BACKEND_LINK, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 210) {
          throw new Error('Failed')
        }
        return res.json();
      })
      .then(resData => {
        console.log('resData')
        console.log(resData);
        const groups = resData.data.findGroups
        console.log(groups)
        this.setState({ groups: groups, isLoading: false })
        this.setState({ backdrop: true })
        this.setState({ showGroups: true })
        // console.log(this.state.contacts)
        // this.fetchTests();
      })
      .catch(err => {
        console.log(err)
      })

  }
  secRatingInfo() {
    console.log('info on security ratings')
  }
  backdropClickHandler = () => {
    // can add more functionality here
    this.setState({ backdrop: false });
    this.setState({ showTeams: false });
    this.setState({ offset: 0 })
    // this.setState({searchThis: ''});
  };
  fetchEnums() {
    const requestBody = {
      query: `
        query {
          __type(name: "UserCategory"){
            name
            enumValues {
              name
            }
          }
        }
        `
    }
    fetch(REACT_APP_BACKEND_LINK, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 21) {
          throw new Error('Failed')
        }
        console.log(res)
        return res.json();
      })
      .then(resData => {

        console.log(resData)
        // console.log(resData);
        const userCategories = resData.data.__type.enumValues
        console.log(userCategories)
        let userCategoriesArr = []
        for (const each in userCategories) {
          console.log(userCategories[each]['name'])
          userCategoriesArr.push(userCategories[each]["name"])
        }
        this.setState({ userCategories: userCategoriesArr, isLoading: false, enumsLoaded: true });

      })
      .catch(err => {
        console.log(err)
        this.setState({ isLoading: false });
      })

  }
  handleClick = (name, value, valueId) => {
    // console.log(e.target)
    // console.log(e.currentTarget)
    let nameId = name + "id"
    console.log(name, value, nameId, valueId)
    this.setState({
      [name]: value,
      [nameId]: valueId,
      showTeams: false,
      showGroups: false,
      backdrop: false,
      offset: 0,
    });



    // this.setState({
    //   [name]: value
    // });

  }
  componentDidMount() {
    this.fetchEnums()
    console.log(this.state.userCategories)
  }
  render() {
    const { displayName,
      password,
      userCategory,
      userCategories,
      enumsLoaded,
      team,
      group,
      secRating,
      currentSecRating,
      teamSearch,
      showGroups,
      showTeams } = this.state
    return (
      <div className="create_user">
        {this.state.backdrop && <Backdrop click={this.backdropClickHandler} />}
        <div className="wrap">
          <h3>Create a new User</h3>
          {this.state.isLoading && <Spinner />}
          {showTeams && <ModalTeams title={this.state.team} teams={this.state.teams} onNext={this.nextHandler} loading={this.state.isLoading} handleClick={this.handleClick} />}
          {showGroups && <ModalGroups title={this.state.group} groups={this.state.groups} onNext={this.nextHandler} loading={this.state.isLoading} handleClick={this.handleClick} />}
          <form>
            {displayName}
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder='UserName'
              onChange={this.handleChange}
              label='User Name'
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder='password'
              onChange={this.handleChange}
              label='Password'
            />
            {enumsLoaded && <SelectInput
              name="userCategory"
              value={userCategory}
              onChange={this.handleChange}
              label='User Classification'
              options={userCategories}
            />}

            <FormInput
              type="text"
              name="team"
              value={team}
              placeholder='Add Team'
              onChange={this.handleChange}
              label='Team'
              formHelper={this.findTeams}
              helpertext='Find a Team'
              searchbox="Search Teams"
              searchname='teamSearch'
              search={teamSearch}
              searchChange={this.handleChange}
            // searchable="true"
            />
            <FormInput
              type="text"
              name="group"
              value={group}
              placeholder='Add Group'
              onChange={this.handleChange}
              label='Group'
              formHelper={this.findGroups}
              helpertext='Find a Group'
              searchbox="Search Groups"
              searchname='teamSearch'
              search={teamSearch}
              searchChange={this.handleChange}
            />
            <SelectInput
              name="currentSecRating"
              value={currentSecRating}
              onChange={this.handleChange}
              label='User Classification'
              // options={secRating}
              formHelper={this.secRatingInfo}
              helpertext='Choosing a User Classification'
              options={secRating}

            />
          </form>
        </div>
      </div>
    );
  }
}

export default CreateUser;