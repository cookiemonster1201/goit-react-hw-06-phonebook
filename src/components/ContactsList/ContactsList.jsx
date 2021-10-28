// import PropTypes from 'prop-types';
import styled from 'styled-components';

import ContactsListItem from 'components/ContactsListItem';
import filterContacts from 'utils/filter-contacts';
import { useSelector } from 'react-redux';

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  color: #722317;
  font-weight: bold;
`;

const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export default function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const value = useSelector(state => state.contacts.filter);

  const filteredContacts = filterContacts(contacts, value);

  return filteredContacts?.length > 0 ? (
    <Ul>
      {[...filteredContacts]
        .sort((contactA, contactB) =>
          contactA.name.localeCompare(contactB.name),
        )
        .map(contact => (
          <Li key={contact.id}>
            <ContactsListItem contact={contact} />
          </Li>
        ))}
    </Ul>
  ) : (
    <p>No contacts found</p>
  );
}

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
//   contacts: state.contacts.items,
// });
