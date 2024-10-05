import {
  FormControl,
  Box,
  Input,
  FormErrorMessage,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  company: string;
  phoneNumber: string;
  email: string;
  description: string;
}

const initialValues: FormData = {
  name: "",
  company: "",
  email: "",
  phoneNumber: "",
  description: "",
};

const ContactForm = () => {
  const toast = useToast();

  const validateData = (values: FormData) => {
    const errors: Partial<FormData> = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.company) {
      errors.company = "Company is required";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Project name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.description) {
      errors.description = "Description is required";
    }

    return errors;
  };
  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const handleSubmit = async (
    values: FormData,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: (values: FormData) => void;
    }
  ) => {
    // Your form submission logic goes here

    setSubmitting(true);
    await delay(2000);
    toast({
      title: "Thank You!",
      description: "We've recieved your email.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    resetForm({
      name: "",
      description: "",
      phoneNumber: "",
      company: "",
      email: "",
    });
    console.log(values);
    setSubmitting(false);
    const templateParams = {
      from_name: values.name,
      message: values.description,
      company: values.company,
      phone_number: values.phoneNumber,
      client_email: values.email,
    };

    emailjs
      .send(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        templateParams,
        `${import.meta.env.VITE_PUBLIC_ID}`
      )
      .then(
        (response) => {
          toast({
            title: "Thank You!",
            description: "We've recieved your email.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          resetForm({
            name: "",
            description: "",
            phoneNumber: "",
            company: "",
            email: "",
          });
          console.log("SUCCESSS!", response.status, response.text);
          setSubmitting(false);
        },
        (err) => {
          console.log("FAILED...", err);
          toast({
            title: "Sorry!",
            description: "Failed to send your message.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
          setSubmitting(false);
        }
      );
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validateData}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <Box mb={4}>
            <FormControl isInvalid={(errors?.name && touched?.name) || false}>
              <Input
                type="text"
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl isInvalid={(errors?.email && touched?.email) || false}>
              <Input
                type="text"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl
              isInvalid={(errors?.company && touched?.company) || false}
            >
              <Input
                type="text"
                name="company"
                value={values.company}
                placeholder="Company"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.company}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box mb={4}>
            <FormControl
              isInvalid={(errors?.phoneNumber && touched?.phoneNumber) || false}
            >
              <Input
                type="text"
                name="phoneNumber"
                value={values.phoneNumber}
                placeholder="Phone number"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box>
            <FormControl
              isInvalid={(errors?.description && touched?.description) || false}
            >
              <Textarea
                className="contact-textarea"
                name="description"
                value={values.description}
                placeholder="How can we help you?"
                onChange={handleChange}
                onBlur={handleBlur}
                resize="none"
              />
              <FormErrorMessage>{errors.description}</FormErrorMessage>
            </FormControl>
          </Box>

          <Button
            mt={4}
            variant="custom"
            isLoading={isSubmitting}
            loadingText="Submitting"
            isDisabled={isSubmitting}
            type="submit"
          >
            Submit{" "}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
