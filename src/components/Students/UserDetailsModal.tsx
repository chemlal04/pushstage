import React, { useState } from 'react';
import Modal from 'react-modal';
import { CardContent, Card } from "@/components/ui/card";
import { User } from "@prisma/client";
import { Button } from "../ui/button";
import GoogleMapsComponent from "../mapsstaf/mapsttaf";
import { Dialog,DialogTrigger } from '@radix-ui/react-dialog';
import GoogleMapsComponentModal from '../mapsstaf/mapsttaf';
interface UserDetailsModalProps {
  user: User;
  onClose: () => void;
  isOpen: boolean; // State to control visibility
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ user, onClose, isOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to control the Modal visibility

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default action
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  }; 
  if (!isOpen) return null; // Render nothing if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <Card className="relative w-full max-w-md mx-auto">
        <div className="relative">
          <img
            alt="User Avatar"
            className="aspect-[4/3] w-full object-cover rounded-t-lg"
            height={360}
            src={user.image ? user.image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEUAAAD////7+/v4+Pjm5ub8/Pzg4ODU1NTMzMz09PTi4uIfHx+/v7/Jycnq6urFxcV5eXna2toUFBSurq5bW1syMjI3NzeGhoZcXFyXl5eNjY24uLhtbW2np6crKyubm5tPT09CQkJxcXEcHBxkZGQMDAxKSkpFRUV9fX0mJiah"}
            width={640}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-t-lg">
            <div className="text-white">
              <div className="font-semibold text-lg">{user.full_name}</div>
              <div className="text-sm">{user.email}</div>
            </div>
          </div>
          <button
            className="absolute top-4 right-4 rounded-full bg-gray-900/50 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50/50 dark:text-gray-900 dark:hover:bg-gray-50 dark:focus:ring-gray-300"
            onClick={onClose}
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <CardContent className="p-6 grid gap-4">
          <div className="grid gap-1">
            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Default Address</div>
            <div>
              {`${user.default_Adress_lat}, ${user.default_Adress_lng}`} 
               
              <div>
              <Dialog>
             <DialogTrigger asChild>
                      <Button
                size="sm"
                variant="outline"
              >
                <EyeIconOutline className="w-4 h-4 mr-2" />
                <p>View</p>
              </Button> 
               </DialogTrigger>


                      <GoogleMapsComponentModal coordinates={{lat:user.default_Adress_lat,lng:user.default_Adress_lng}} />
                    </Dialog>
              </div>
            </div>
          </div>
          
          <div className="grid gap-1">
            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Default Time</div>
            <div>{user.default_time}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Role</div>
            <div>{user.role}</div>
          </div>
          <div className="grid gap-1">
            <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">Status</div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${user.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
              <div>{user.status}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const ModalContent: React.FC<{ closeModal: () => void }> = React.memo(({ closeModal }) => {
  return (
    <div className="modal-content relative">
      <div className="map-container">
        <GoogleMapsComponent />
      </div>
      <div className="absolute top-5 right-5">
        <Button onClick={closeModal}>X</Button>
      </div>
      <div className="absolute bottom-0 right-5">
        <Button>Apply</Button>
      </div>
      <style jsx>{`
        .map-container {
          height: 550px;
        }
      `}</style>
    </div>
  );
});

export default UserDetailsModal;

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function EyeIconOutline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function setIsHovering(arg0: boolean): void {
  throw new Error('Function not implemented.');
}

function setSelectedUser(user: { id_User: string; full_name: string; image: string | null; email: string; role: import(".prisma/client").$Enums.Role; status: import(".prisma/client").$Enums.status | null; default_Adress_lat: number | null; default_Adress_lng: number | null; createdAt: Date; default_time: string | null; busId: number | null; }) {
  throw new Error('Function not implemented.');
}

