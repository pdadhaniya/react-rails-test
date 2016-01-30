
const GuestIndex = React.createClass({
  propTypes: {
    guests: React.PropTypes.array
  },

  handleNameClick(name) {
    console.log(name)
  },

  render() {
    let guests = this.props.guests
    let guestRows = _.map(guests, guest => {
      let attending = guest.status ? "Yes" : "No"
      return (
        <tbody>
          <tr>
            <td onClick={this.handleNameClick.bind(this, guest.name)} className="guest-name">{guest.name}</td>
            <td className="status">{attending}</td>
          </tr>
        </tbody>
      )
    })

    return(
      <div className="row">
        <div className="large-12 columns">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Attending?</th>
              </tr>
            </thead>
            {guestRows}
          </table>
        </div>
      </div>
    )
  }
})