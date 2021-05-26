import { useState } from "react";
import Head from "next/head";

import styles from "../styles/styles.module.scss";
import FormCard from "../components/FormCard";

import {
  BillingInfo,
  ConfirmPurchase,
  PersonalInfo,
} from "../components/Forms";

import FormCompleted from "../components/FormCompleted";

const App = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Multi Step Form</title>
      </Head>
      <h1>Formik Multi Step Form</h1>

      <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
        {formStep >= 0 && (
          <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 1 && (
          <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
        )}
        {formStep >= 2 && (
          <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} />
        )}

        {formStep > 2 && <FormCompleted />}
      </FormCard>
    </div>
  );
};

export default App;
