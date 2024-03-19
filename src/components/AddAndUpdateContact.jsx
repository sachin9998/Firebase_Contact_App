import { Formik, Field, Form } from "formik";
import Modal from "./Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";


// eslint-disable-next-line react/prop-types
const AddAndUpdateContact = ({ isOpen, onClose }) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
        } catch (error) {
            console.log(error);
        }
    }


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
                        addContact(values);
                    }}
                >
                    <Form className="flex flex-col gap-3">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field className="border h-10" name="name" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field className="border h-10" name="email" />
                        </div>

                        <button className="bg-orange px-3 py-1.5 border self-end">Add Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};

export default AddAndUpdateContact;