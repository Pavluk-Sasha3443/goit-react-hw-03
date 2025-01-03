import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ numberPhone, onDelete }) => {
  return (
    <ul className={css.list}>
      {numberPhone.map(({ id, ...numberPhone }) => (
        <li className={css.item} key={id}>
          <Contact
            name={numberPhone.name}
            number={numberPhone.name}
            onDelete={() => onDelete(id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
