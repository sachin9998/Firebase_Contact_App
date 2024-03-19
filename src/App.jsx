import "./App.css";
import Navbar from "./components/Navbar";

import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "./config/firebase";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

function App() {

  const [contacts, setContacts] = useState();
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactsSnapshot = await getDocs(contactsRef);

        const contactLists = contactsSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });

        setContacts(contactLists);
      }
      catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);


  return (
    <>
      <div className="max-w-[370px] mx-auto px-4">

        <Navbar />

        <div className="flex gap-2">
          <div className="flex flex-grow relative items-center">

            <FiSearch className="ml-2 text-white text-3xl absolute" />

            <input placeholder="Search Contact" type="text" className="flex-grow border bg-transparent border-white rounded-md h-10 text-white pl-10" />

          </div>

          <AiFillPlusCircle
            onClick={onOpen} className="text-5xl text-white cursor-pointer" />

        </div>

        <div className="mt-4 flex flex-col gap-3">
          {
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          }
        </div>

      </div>

      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </>
  );
}

export default App;
