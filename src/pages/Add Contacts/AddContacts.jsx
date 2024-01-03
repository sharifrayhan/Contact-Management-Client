import { useForm } from "react-hook-form";
import { styles } from "../../styles";
import { contact, bg_three } from "../../assets";
import Swal from "sweetalert2";
import Navbar from "../Home/Components/Navbar";
import useAxiosSecure from "../../axios/useAxiosSecure";

const AddContact = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const bgStyle = {
    backgroundImage: `url(${bg_three})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const onSubmit = async (data) => {
    try {
      const url = "/contacts";
      const response = await axiosSecure.post(url, data);
      if (response.status === 201) {
        Swal.fire("Success!", "Contact added successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to add contact", "error");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      Swal.fire("Error", "Failed to add task", "error");
    }
  };

  return (
    <div style={bgStyle}>
      <Navbar />
      <div className="mx-auto pb-9 md:ml-5 px-2 lg:ml-9 mt-2">
        <div className="max-w-[360px] flex items-center justify-center">
          <div className=" w-max bg-[#C3E1DF] p-3 rounded-full ">
            <img src={contact} className="h-[60px] " />
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[360px] px-6 -mt-10 py-10 rounded-lg bg-[#C3E1DF]"
        >
          <h1 className="text-2xl text-center text-slate-500 font-bold mb-4">
            Add Contact
          </h1>
          {/* Name field */}
          <div className="mb-4 mx-auto max-w-72">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              {...register("Name", { required: "Name is required" })}
              type="text"
              id="name"
              className="mt-1 p-2 text-slate-600 w-full border rounded-md"
            />
          </div>

          <div className="flex md:flex-row mx-auto flex-col max-w-[288px] gap-2">
            {/* Email */}
            <div className="mb-4  max-w-72 md:max-w-[140px]">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                {...register("Email")}
                type="email"
                id="email"
                className="mt-1 text-slate-600 p-2 w-full border rounded-md"
              />
            </div>

            {/* Phone number */}
            <div className="mb-4 max-w-72 md:max-w-[140px]">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                {...register("Phone")}
                type="tel"
                id="phone"
                className="mt-1 text-slate-600 p-2 w-full border rounded-md"
              />
            </div>
          </div>

          {/* Address field */}
          <div className="mb-4 mx-auto max-w-72">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              {...register("Address", { required: "Address is required" })}
              id="address"
              rows="3"
              className="mt-1 text-slate-600 p-2 w-full h-[50px] border rounded-md"
            ></textarea>
          </div>

          {/*Picture URL */}
          <div className="mb-4 mx-auto max-w-72">
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-600"
            >
              Profile Picture URL
            </label>
            <input
              {...register("Picture")}
              type="url"
              id="profilePicture"
              className="mt-1 p-2 text-slate-600 w-full border rounded-md"
            />
          </div>

          <center>
            <button type="submit" style={styles.buttonStyle}>
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
