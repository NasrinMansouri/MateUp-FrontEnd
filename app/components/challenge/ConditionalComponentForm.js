import { useFormikContext } from "formik";
import React, { useEffect } from "react";
import { View } from "react-native";
import * as Yup from "yup";

import { AppFormField, AppFormPicker } from "../../components/forms";

const ConditionalComponentForm = ({ challengeGoal }) => {
  const { values, setFieldValue, setFieldTouched } = useFormikContext();

  useEffect(() => {
    if (values.base?.value === 1) {
      setFieldValue("goalTime", "");
      setFieldTouched("goalTime", false);
    } else {
      setFieldValue("goalFrequency", null);
      setFieldTouched("goalFrequency", false);
    }
  }, [values.base, setFieldValue, setFieldTouched]);

  return values.base ? (
    values.base.value === 1 ? (
      <AppFormField
        questionTitle="Set goal for your challenge :"
        name="goalTime"
        placeholder="ex: 20 hours"
        keyboardType="numeric"
      />
    ) : (
      <AppFormPicker
        questionTitle="Set goal for your challenge :"
        items={challengeGoal}
        name="goalFrequency"
        numberOfColumns={3}
        placeholder="Select goal"
        width="50%"
      />
    )
  ) : null;
};

export default ConditionalComponentForm;
