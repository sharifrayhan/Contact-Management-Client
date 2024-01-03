import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../axios/useAxiosSecure';
import Swal from "sweetalert2";
import { bg_three } from '../assets';

const useContacts = () => {
    const axiosSecure = useAxiosSecure()
  const { data: allContacts, isLoading, error, refetch } = useQuery({
    queryFn: async () => {
      const response = await axiosSecure.get('/contacts');
      return response.data;
    },
    queryKey: ['contacts'],
  });

  console.log(allContacts)

  const handleDelete = async (ContactId) => {
    try {
      const response = await axiosSecure.delete(`/contacts/${ContactId}`);

      if (response.status === 200) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Contact Deleted!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Failed to delete contact:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };


  const handleUpdate = (contact) => {
   
    Swal.fire({
      title: "Edit Contact",
      html: `
      <div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
          <input id="name" class="swal2-input" value="${contact?.Name}" required>
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input id="email" class="swal2-input" value="${contact?.Email}" required>
        </div>

        <div class="mb-4">
          <label for="address" class="block text-sm font-medium text-gray-600">Address</label>
          <input id="address" class="swal2-input" value="${contact?.Address}" required>
        </div>

        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-600">Phone</label>
          <input id="phone" class="swal2-input" value="${contact?.Phone}" required>
        </div>
        </div>
      `,
      confirmButtonText: "Update",
      showCloseButton: true,
      customClass: {
        background: "#C3E1DF"
      },
      focusConfirm: false,
      preConfirm: async () => {
        const updatedContact = {
          Name: Swal.getPopup().querySelector("#name").value,
          Email: Swal.getPopup().querySelector("#email").value,
          Address: Swal.getPopup().querySelector("#address").value,
          Phone: Swal.getPopup().querySelector("#phone").value,
        };

        try {
          const response = await axiosSecure.put(
            `/contacts/${contact?._id}`,
            updatedContact
          );

          if (response.status === 200) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Contact Updated!",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            console.error("Failed to update contact:", response.statusText);
          }
        } catch (error) {
          console.error("Error updating contact:", error);
        }
      },
    });
  };

  const handleAddToFavorites = async (contact) => {
    console.log(contact);

    try {
        const url = '/favourites';
        const response = await axiosSecure.post(url, contact);
        if (response.status === 201) {
          Swal.fire('Success!', 'Added to favourites!', 'success');
        } else {
          Swal.fire('Error', 'Failed to add', 'error');
        }
      } catch (error) {
        console.error("Error adding favourites:", error);
        Swal.fire('Error', 'Failed to add', 'error');
      }
  };

  return { allContacts, isLoading, error,handleDelete,handleUpdate,handleAddToFavorites, refetch };
};

export default useContacts;