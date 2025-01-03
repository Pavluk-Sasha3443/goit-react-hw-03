import ContactForm from "./ContactForm/ContactForm";
import css from "./App.module.css";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import AllContacts from "./contacts.json";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const storage = localStorage.getItem("contacts");
    if (storage) {
      return JSON.parse(storage);
    }
    return AllContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values) => {
    values.id = nanoid();
    setContacts((prevContacts) => [...prevContacts, values]);
  };

  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  const result = contacts.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const onDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox handleChange={handleChange} inputValue={inputValue} />
      <ContactList numberPhone={result} onDelete={onDelete} />
    </>
  );
}

export default App;
