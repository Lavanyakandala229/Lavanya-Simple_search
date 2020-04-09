import React from 'react';
import './Search.css'

let users = [
    {
        "id": 1,
        "name": "Juliana Sims",
        "gender": "male"
      },
      {
        "id": 2,
        "name": "Alfreda Head",
        "gender": "female"
        },
      {
        "id": 3,
        "name": "Skinner Golden",
        "gender": "male"
      },
      {
        "id": 4,
        "name": "Georgia Rich",
        "gender": "female"

      },
      {
        "id": 5,
        "name": "Gay Mayer",
        "gender": "male"
      },
      {
        "id": 6,
        "name": "Aguirre Cameron",
        "gender": "male"
      },
    {
        "id": 7,
        "name": "Alison Ward",
        "gender": "male"
      },
      {
        "id": 8,
        "name": "Cynthia Mcintosh",
        "gender": "male"
      },
      {
        "id": 9,
        "name": "Phoebe Mayo",
        "gender": "female"

      },
      {
        "id": 10,
        "name": "Cecelia Kennedy",
        "gender": "male"
      },
      {
        "id": 11,
        "name": "Ellison Young",
        "gender": "female",
    },
      {
        "id": 12,
        "name": "Lara Hopkins",
        "gender": "male"
      },
      {
        "id": 13,
        "name": "Cecelia Kennedy",
        "gender": "female"

      },
      {
        "id": 14,
        "name": "Ellison Young",
        "gender": "male"
      },
      {
        "id": 15,
        "name": "Lara Hopkins",
        "gender": "female"

      },
      {
        "id": 16,
        "name": "Haley Vargas",
        "gender": "male"
      },
      {
        "id": 17,
        "name": "Curtis Baxter",
        "gender": "female"

      },
      {
        "id": 18,
        "name": "Jeanette Short",
        "gender": "male"
      },
      {
        "id": 19,
        "name": "Carole Wheeler",
        "gender": "female"
},
      {
        "id": 20,
        "name": "Ofelia Shepard",
        "gender": "male"
      },
      {
        "id": 21,
        "name": "Barber Trujillo",
        "gender": "male"
      },
      {
        "id": 22,
        "name": "Carole Wheeler",
        "gender": "female"
    },
      {
        "id": 23,
        "name": "Ofelia Shepard",
        "gender": "male"
      },
      {
        "id": 24,
        "name": "Barber Trujillo",
        "gender": "female"

      },
      {
        "id": 25,
        "name": "Carole Wheeler",
        "gender": "male"
      },
      {
        "id": 26,
        "name": "Ofelia Shepard",
        "gender": "female"

      },
      {
        "id": 27,
        "name": "Barber Trujillo",
        "gender": "male"
      }
];
  
  class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: "",
        users: []
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.setState({
        users: users
      });
      this.refs.search.focus();
    }
  
    handleChange() {
      this.setState({
        searchString: this.refs.search.value
      });
    }
  
    render() {
      let _users = this.state.users;
      let search = this.state.searchString.trim().toLowerCase();
  
      if (search.length > 0) {
        _users = _users.filter(function(user) {
          return user.name.toLowerCase().match(search);
        });
      }
  
      return (
        <div>
          <h3>React - simple search</h3>
          <div className="container">
            <input
              type="text"
              value={this.state.searchString}
              ref="search"
              onChange={this.handleChange}
              placeholder="type name here"
            />
            
            <i className="fa fa-search search-icon search-label" aria-hidden="true"/>

            <ul>
              {_users.map(l => {
                return (
                  <li>
                    <table>
                        

                <tr>
                            <td>{l.id}</td>
                            <td className="center">{l.name}</td>
                            <td className="right">{l.gender}</td>
                        </tr>
                        
                    </table>
                        
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );
    }
  }
  
  export default Search;