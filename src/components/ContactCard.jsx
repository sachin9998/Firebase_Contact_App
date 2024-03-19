import { HiOutlineUserCircle } from "react-icons/hi"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"


const ContactCard = ({contact}) => {
  return (
      <div key={contact.id} className="bg-yellow flex justify-between items-center p-2 rounded-lg">

          <div className="flex gap-1">
              <HiOutlineUserCircle className="text-orange text-4xl" />

              <div className="">

                  <h2 className="font-medium">{contact.name}</h2>

                  <p className="text-sm">{contact.email}</p>

              </div>
          </div>

          <div className="flex">
              <RiEditCircleLine className="text-3xl" />
              <IoMdTrash className="text-3xl text-orange" />
          </div>

      </div>
  )
}

export default ContactCard