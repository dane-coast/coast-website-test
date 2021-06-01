import React, { Component } from 'react'

import FormInput from '../FormInput/formInput';
import SelectInput from '../FormInput/selectInput';

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
      group: '',
      secRating: [5, 4, 3, 2, 1],
      currentSecRating: 5,
      isLoading: true,
      enumsLoaded: false,
      searching: false,


      // enum
      userCategory: 'CLIENT',
      userCategories: []
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
  findTeams() {
    console.log('findTeams fx')
    this.setState({ searching: true });
    const requestBody = {

    }

  }
  findGroups() {
    console.log('write find Groups fetch')
  }
  secRatingInfo() {
    console.log('info on security ratings')
  }
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
      currentSecRating } = this.state
    return (
      <div className="create_user">
        <div className="wrap">
          <h3>Create a new User</h3>
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