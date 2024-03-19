import { Formik, Field, Form } from "formik";
import Modal from "./Modal";


// eslint-disable-next-line react/prop-types
const AddAndUpdateContact = ({ isOpen, onClose }) => {

    


    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    <Form className="flex flex-col gap-3">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field className="border h-10" name="name" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field className="border h-10" name="email"/>
                        </div>

                        <button className="bg-orange px-3 py-1.5 border self-end">Add Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};

export default AddAndUpdateContact;