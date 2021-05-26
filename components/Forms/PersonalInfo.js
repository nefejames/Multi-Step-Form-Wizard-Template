import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

export default function PersonalInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
      <h2>Personal Info</h2>

      <form>
        <div className={styles.formRow}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <button type="button" onClick={nextFormStep}>
          Next
        </button>
      </form>
    </div>
  );
}
