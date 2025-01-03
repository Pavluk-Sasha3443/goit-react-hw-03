import { RiUser5Fill } from "react-icons/ri";
import { ImPhone } from "react-icons/im";
import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.box}>
          <RiUser5Fill size={24} />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.box}>
          <ImPhone size={24} />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button onClick={onDelete} className={css.btnDelete} type="button">
        Delete
      </button>
    </>
  );
};
export default Contact;
