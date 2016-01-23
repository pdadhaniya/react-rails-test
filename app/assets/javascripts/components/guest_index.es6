
const GuestIndex = React.createClass({
  propTypes: {
    guests: React.PropTypes.array
  },

  renderGuests() {
    // debugger
    // let guests = this.props.guests
    // let guestJSX = []
    // _.forEach(guests, guest => {
    //   let attending = guest.status ? "Yes" : "No"
    //   guestJSX.push(
    //     <div>
    //       <div>
    //         Name: {guest.name}
    //       </div>
    //       <div>
    //         Attending: {attending}
    //       </div>
    //     </div>
    //   )
    let guests = this.props.guests
    _.map(guests, guest => {
      debugger
      let attending = guest.status ? "Yes" : "No"
      return (
        <tbody>
          <tr>
            <td>{guest.name}</td>
            <td>{attending}</td>
          </tr>
        </tbody>
      )
    })
  },

  render() {
    let guests = this.props.guests
    let guestRows = _.map(guests, guest => {
      let attending = guest.status ? "Yes" : "No"
      return (
        <tbody>
          <tr>
            <td>{guest.name}</td>
            <td>{attending}</td>
          </tr>
        </tbody>
      )
    })

    return(
      <div>
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
    )
  }
})