import {
  ItemList,
  Item,
  ItemContainer,
  NameStyle,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact, fetchContacts} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { getVisibleContacts } from 'redux/contacts/contactsSelector';

const ContactList = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts())
},[dispatch])
const visibleContacts = useSelector(getVisibleContacts)
if (!visibleContacts) return 
  return (
    <ItemList>
      {visibleContacts.map(({ name, id, number }) => (
        <Item key={id}>
          <ItemContainer>
            {name}: <NameStyle>{number}</NameStyle>
          </ItemContainer>
          <ButtonDelete onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDelete>
        </Item>
      ))}
    </ItemList>
  );
};

export default ContactList;
