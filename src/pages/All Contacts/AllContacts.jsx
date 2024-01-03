import useContacts from "../../hook/useContacts";
import { edit, favorites, deleteIcon, bg_four } from "../../assets";
import Navbar from "../Home/Components/Navbar";

const AllContacts = () => {
  const { allContacts, handleDelete, handleUpdate, handleAddToFavorites } =
    useContacts();

  const bgStyle = {
    backgroundImage: `url(${bg_four})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div style={bgStyle} className=" min-h-screen">
      <Navbar />
      <div className="flex flex-wrap flex-col md:flex-row py-4 px-2 md:px-10 lg:flex-row items-center justify-center gap-8">
        {allContacts?.map((contact) => (
          <div
            key={contact?._id}
            className="relative bg-[#C3E1DF] hover:scale-105  max-w-[360px] h-[210px] max-h-[250px] p-4 rounded-md shadow-md transition-transform transform "
          >
            <div className="flex p-5 h-170px[] items-center gap-4 md:gap-6 justify-center">
              <div className=" w-1/2 flex flex-col justify-between text-slate-600">
                <p className=" text-sm">{contact?.Email}</p>
                <h1 className=" font-bold text-2xl line-clamp-2">{contact?.Name}</h1>
                <p className=" text-sm line-clamp-2">{contact?.Address}</p>
                <p className=" text-sm">Phone: {contact?.Phone}</p>
              </div>

              <div className="avatar w-1/2">
                <div className="w-24 rounded-full">
                  <img
                    src={contact?.Picture}
                    className="object-cover w-full h-full"
                    alt={contact?.Name}
                  />
                </div>
              </div>
            </div>

            <button
              className="absolute hover:scale-150 top-2 right-2 bg-transparent border-none focus:outline-none"
              onClick={() => handleUpdate(contact)}
            >
              <img className="h-5" src={edit} alt="Edit" />
            </button>

            <button
              className="absolute hover:scale-150 top-2 right-8 bg-transparent border-none focus:outline-none"
              onClick={() => handleDelete(contact?._id)}
            >
              <img className="h-5" src={deleteIcon} alt="Edit" />
            </button>

            <button
              className="absolute hover:scale-150 top-2 right-14 bg-transparent border-none focus:outline-none"
              onClick={() => handleAddToFavorites(contact)}
            >
              <img className="h-5" src={favorites} alt="Edit" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContacts;
