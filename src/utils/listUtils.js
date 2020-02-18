const listUtils = {

  // The sortList function takes three arguments: the list to sort, 
  // the object key that is sorted on, and the order to sort them in.
  // order only has two valid values: either 'asc' or 'desc'
  // if the parameter to sort on doesn't exist, the list will be returned
  // as is.  If the order is not valid it will sort the list ascending
  sortList(list, parameter, order) {
    const keys = Object.keys(list[0]);
    let orderVals = [-1, 1] // default for ascending order

    if (keys.indexOf(parameter) === -1) {
      return list;
    }

    if (order === 'desc') {
      orderVals = [1, -1]
    }

    list.sort((a, b) => {
      if (a[parameter] < b[parameter]) {
        return orderVals[0]
      }
      if (a[parameter] > b[parameter]) {
        return orderVals[1];
      }
      return 0;
    })
    return list;
  },

  processRawEmployeeList(rawList) {
    return rawList.map(rawEmployee => {
      const loc = rawEmployee.location;
      const address = `${loc.street.number} ${loc.street.name}, ${loc.city}, ${loc.state} ${loc.postcode}`;

      return {
        image: rawEmployee.picture.thumbnail,
        firstName: rawEmployee.name.first,
        lastName: rawEmployee.name.last,
        email: rawEmployee.email,
        phone: rawEmployee.phone,
        address: address
      }

    })
  },

  filterByParam(list, parameter, value) {
    value = value.toLowerCase()
    return list.filter(employee => employee[parameter].toLowerCase().includes(value))
  }
}

export default listUtils;