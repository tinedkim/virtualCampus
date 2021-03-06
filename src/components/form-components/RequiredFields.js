import React from 'react';
import ContactInfo from "../form-components/ContactInfo"
import EntryDetails from "../form-components/EntryDetails"
import TimeAndEventType from "./TimeAndEventType"
import Tags from './Tags'

import { Field } from "formik"
import { CheckboxWithLabel } from "formik-material-ui";


const RequiredFields = (props) => {
  let errors = props.errors
  let touched = props.touched

  const content = (
    <div>
      <ContactInfo
        errorName={errors.name}
        touchedName={touched.name}
        errorEmail={errors.email}
        touchedEmail={touched.email}
      />
      <EntryDetails
        title={props.title}
        entryTitle={props.entryTitle}
        errorTitle={errors.title}
        touchedTitle={touched.title}
        errorImgLink={errors.image_link}
        touchedImgLink={touched.image_link}
        errorDesc={errors.desc}
        touchedDesc={touched.desc}
        imgUpload={props.imgUpload}
        fileName={props.fileName}
        onChange={props.onChange}
      />
      <TimeAndEventType
        timezones={props.timezones}
        errorEventType={errors.event_type}
        touchedEventType={touched.event_type}
      />
      <Tags
        tags={['Activism', 'COVID', 'Education', 'Health', 'Freshman', 'Social']}
        touched={props.touched}
        errors={props.errors}
      />


    </div>
  )

  return content
}

export default RequiredFields