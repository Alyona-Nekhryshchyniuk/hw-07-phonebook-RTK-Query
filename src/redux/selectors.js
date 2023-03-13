export const selectContacts = state => state.contact;

export const selectFilter = state => state.filter;

export const selectError = state => state.contact.error;

// export const selectFilteredList = state => {
//   const filterValue = selectFilter(state);
//   const contactList = selectContacts(state);
//   console.log(contactList);
//   const loweredFilter = filterValue.toLowerCase();
//   return contactList.filter(({ name }) =>
//     name.toLowerCase().includes(loweredFilter)
//   );
// };
