import styles from "../../styles/styles.module.scss";
import { useFormData } from "../../context";

export default function BillingInfo({ formStep, nextFormStep }) {
  const { setFormValues } = useFormData();

  const handleSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  return (
    <div className={formStep === 1 ? styles.showForm : styles.hideForm}>
      <h2>Billing Info</h2>

      <form>
        <div className={styles.formRow}>
          <label htmlFor="address">Address</label>
          <input type="address" name="address" id="address" />
        </div>
        <button type="button" onClick={nextFormStep}>
          Next
        </button>
      </form>
    </div>
  );
}
